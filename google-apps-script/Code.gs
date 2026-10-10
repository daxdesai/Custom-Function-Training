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
