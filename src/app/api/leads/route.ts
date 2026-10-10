import { leadSubmissionSchema } from "@/lib/leadSchema";
import { plainText } from "@/lib/plainText";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const buckets = new Map<string, number[]>();

const FAILURE = "Something went wrong. Please try again.";
const NOT_CONFIGURED = "Lead capture is not configured yet.";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (buckets.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);

  if (recent.length >= MAX_HITS) {
    buckets.set(key, recent);
    return true;
  }

  recent.push(now);
  buckets.set(key, recent);

  if (buckets.size > 5000) {
    for (const [bucketKey, stamps] of buckets) {
      if (stamps.every((stamp) => now - stamp >= WINDOW_MS)) {
        buckets.delete(bucketKey);
      }
    }
  }

  return false;
}

async function postToAppsScript(url: string, body: string) {
  // Apps Script saves the lead, then redirects to a URL that only accepts GET.
  // Following that redirect is what returns the JSON result.
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body,
    redirect: "follow",
    cache: "no-store",
  });
}

function json(body: { success: boolean; message: string }, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return json(
      {
        success: false,
        message: "Please wait a moment before submitting again.",
      },
      429,
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return json({ success: false, message: FAILURE }, 413);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, message: FAILURE }, 400);
  }

  if (
    body &&
    typeof body === "object" &&
    "companyWebsite" in body &&
    String((body as { companyWebsite?: string }).companyWebsite || "").trim()
  ) {
    return json({ success: true, message: "Lead submitted successfully" });
  }

  const parsed = leadSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      { success: false, message: "Please check the form and try again." },
      400,
    );
  }

  const webhook = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  if (!webhook) {
    return json({ success: false, message: NOT_CONFIGURED }, 503);
  }

  if (
    webhook !== "mock" &&
    !/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(webhook)
  ) {
    return json(
      {
        success: false,
        message:
          "The webhook URL is not a web app address. In Apps Script, open Deploy, then copy the Web app URL that ends in /exec.",
      },
      503,
    );
  }

  const lead = {
    timestamp: new Date().toISOString(),
    name: plainText(parsed.data.name, 80),
    email: plainText(parsed.data.email, 120),
    phone: plainText(parsed.data.phone, 20),
    experience: plainText(parsed.data.experience, 80),
    message: plainText(parsed.data.message, 1000, true),
    source: plainText(parsed.data.source, 80),
    pageUrl: plainText(parsed.data.pageUrl, 500),
    userAgent: plainText(parsed.data.userAgent, 400),
  };

  if (webhook === "mock") {
    return json({ success: true, message: "Lead submitted successfully" });
  }

  try {
    const upstream = await postToAppsScript(webhook, JSON.stringify(lead));
    const text = await upstream.text();
    let data: { success?: boolean; message?: string } = {};

    try {
      data = JSON.parse(text) as { success?: boolean; message?: string };
    } catch {
      data = {};
    }

    if (upstream.status === 401 || upstream.status === 403) {
      return json(
        {
          success: false,
          message:
            "Google rejected the lead. Redeploy the Apps Script web app with access set to Anyone, then use the script.google.com/macros/s/.../exec URL.",
        },
        502,
      );
    }

    if (!upstream.ok || data.success === false) {
      return json({ success: false, message: FAILURE }, 502);
    }

    return json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch {
    return json({ success: false, message: FAILURE }, 502);
  }
}
