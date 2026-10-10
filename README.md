# Custom Function Training

Premium landing page for the Custom Function Training program. Visitors learn what the training includes, then enroll or book a demo class. Every lead is validated and saved to Google Sheets.

## Stack

- Next.js, React, TypeScript
- Tailwind CSS
- Motion for the mobile menu and the enrollment prompt
- Lucide icons
- React Hook Form and Zod

Scroll fades and the curriculum progress line use CSS view timelines so they stay smooth, respect reduced motion, and do not hide content before the page hydrates.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Until `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` is set, the form validates and then shows that lead capture is not configured. It does not fail silently.

Set the variable to `mock` if you want to preview the success state without a spreadsheet.

## Lead flow

```text
Visitor
  → Enroll Now or Book a Demo Class
  → Lead form (name, email, phone, optional experience and message)
  → lib/submitLead.ts
  → POST /api/leads
  → Google Apps Script web app
  → Google Sheet
  → Success message
```

The form scrolls into view. It is not shown as a full-screen popup on arrival. A small dismissible prompt can appear after someone has spent time on the page or scrolled well into it, and it hides while the form is on screen.

`/api/leads` reads `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` on the server and forwards the lead. The URL is not hardcoded. The browser posts to this app, not directly to Google, so the page can show a real success or error response. Apps Script redirects often block the browser from reading a direct response.

Each saved row includes:

| Timestamp | Name | Email | Phone | Experience | Message | Source | Page URL | User Agent |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

`Source` records which call to action was used, for example `Hero - Enroll Now`, `Hero - Book Demo`, `Final CTA - Enroll Now`, or `Contact Form`.

The form and the API both require a name, a valid email, and a valid phone number. A hidden honeypot field and a short rate limit reduce spam. Values that could be interpreted as spreadsheet formulas are stored as text. Google credentials never appear in the frontend.

## Google Sheets Lead Setup

1. Create a Google Sheet. Name the file something you will recognize, such as `Custom Function Training Leads`.
2. Rename the first tab to `Leads`.
3. Add this header row in row 1:

   `Timestamp | Name | Email | Phone | Experience | Message | Source | Page URL | User Agent`

   If row 1 is empty, the script writes these headers the first time a lead arrives.
4. Open **Extensions → Apps Script**.
5. Replace the default script with the complete script below. The same file is saved at `google-apps-script/Code.gs`.
6. Click **Deploy → New deployment**.
7. Choose **Web app**.
8. Set **Execute as** to **Me**.
9. Set **Who has access** to **Anyone**.
10. Deploy, authorize the requested spreadsheet access, and copy the **Web app URL**. It ends in `/exec`.
11. In the project, create `.env.local` and set:

    ```bash
    NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-deployment-id/exec
    NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ```

    Do not commit `.env.local`. `.env.example` is the only env file that belongs in git, and it has an empty webhook URL.
12. Restart `npm run dev`. Next.js reads env files at startup.
13. On the site, choose **Enroll Now**, fill in a name, email, and phone, and submit.
14. Confirm a new row in the sheet. The Source column should match the button you used.
15. If you change the Apps Script later, deploy a new version. Manage deployments and update the existing web app so the `/exec` URL stays the same.

### Apps Script

```javascript
/**
 * Custom Function Training — Google Sheets lead collector.
 *
 * Deploy as a Web App (Execute as: Me, Who has access: Anyone).
 * The website posts JSON to this web app through the Next.js /api/leads route.
 * Spreadsheet credentials never leave Google.
 */
var SHEET_NAME = "Leads";
var HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Experience",
  "Message",
  "Source",
  "Page URL",
  "User Agent",
];

function doGet() {
  return json({
    success: true,
    message: "Custom Function Training lead endpoint is running.",
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ success: false, message: "Missing request body." });
    }

    var data = JSON.parse(e.postData.contents);

    if (asText(data.companyWebsite)) {
      return json({ success: true, message: "Lead submitted successfully" });
    }

    var name = asText(data.name);
    var email = asText(data.email);
    var phone = asText(data.phone);

    if (!name || !email || !phone) {
      return json({
        success: false,
        message: "Name, email, and phone are required.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.replace(/^'/, ""))) {
      return json({ success: false, message: "A valid email is required." });
    }

    var digits = String(phone).replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      return json({ success: false, message: "A valid phone number is required." });
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      var sheet = getSheet();
      ensureHeaders(sheet);
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        name,
        email,
        phone,
        asText(data.experience),
        asText(data.message),
        asText(data.source),
        asText(data.pageUrl),
        asText(data.userAgent),
      ]);
    } finally {
      lock.releaseLock();
    }

    return json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    return json({ success: false, message: "Unable to save lead." });
  }
}

function getSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (sheet) return sheet;
  return spreadsheet.getSheets()[0];
}

function ensureHeaders(sheet) {
  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  var isEmpty = firstRow.every(function (cell) {
    return cell === "";
  });

  if (!isEmpty) return;

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function asText(value) {
  var text = String(value || "")
    .replace(/[<>]/g, "")
    .trim();

  if (text.length > 1000) {
    text = text.substring(0, 1000);
  }

  if (/^[=+\-@\t\r]/.test(text)) {
    return "'" + text;
  }

  return text;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
```

## Contact placeholders

The footer email and phone are placeholders in `src/lib/site.ts`. Replace them before publishing.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
