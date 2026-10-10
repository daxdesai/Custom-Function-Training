export type LeadRequest = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  source: string;
  pageUrl: string;
  userAgent: string;
  companyWebsite?: string;
};

export type SubmitLeadResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

const FAILURE = "Something went wrong. Please try again.";

/**
 * Sends a validated lead to the app's `/api/leads` route.
 * That route forwards the payload to the Google Apps Script web app
 * configured with NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL.
 * The webhook URL is never hardcoded here.
 */
export async function submitLead(lead: LeadRequest): Promise<SubmitLeadResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    const data = (await response.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!response.ok || !data?.success) {
      return { ok: false, message: data?.message || FAILURE };
    }

    return {
      ok: true,
      message: data.message || "Lead submitted successfully",
    };
  } catch {
    return { ok: false, message: FAILURE };
  }
}
