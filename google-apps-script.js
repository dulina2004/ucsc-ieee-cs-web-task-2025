// Google Apps Script for IntelliHack 5.0 Registration
// This script receives registration data and writes it to Google Sheets

// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet
// 2. Click Extensions > Apps Script
// 3. Delete any existing code and paste this entire script
// 4. Click "Deploy" > "New deployment"
// 5. Select type: "Web app"
// 6. Set "Execute as": Me
// 7. Set "Who has access": Anyone
// 8. Click "Deploy" and copy the Web App URL
// 9. Add the URL to your .env file as VITE_GOOGLE_SHEETS_WEBHOOK_URL

// Main function that handles POST requests
function doPost(e) {
    try {
        // Parse the incoming JSON data
        const data = JSON.parse(e.postData.contents);

        // Get the active spreadsheet
        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

        // Determine which sheet to write to based on registration type
        let sheet;
        if (data.registrationType === "individual") {
            sheet = getOrCreateSheet(spreadsheet, "Individual Registrations");
            writeIndividualRegistration(sheet, data);
        } else {
            sheet = getOrCreateSheet(spreadsheet, "Team Registrations");
            writeTeamRegistration(sheet, data);
        }

        // Return success response
        return ContentService.createTextOutput(
            JSON.stringify({
                status: "success",
                message: "Registration saved successfully",
            })
        ).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        // Return error response
        return ContentService.createTextOutput(
            JSON.stringify({
                status: "error",
                message: error.toString(),
            })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}

// Get or create a sheet with the given name
function getOrCreateSheet(spreadsheet, sheetName) {
    let sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
        sheet = spreadsheet.insertSheet(sheetName);

        // Set up headers based on sheet type
        if (sheetName === "Individual Registrations") {
            sheet
                .getRange(1, 1, 1, 7)
                .setValues([
                    [
                        "Timestamp",
                        "Team Name",
                        "Full Name",
                        "Email",
                        "Institution",
                        "Role",
                        "Registration Type",
                    ],
                ]);
        } else {
            sheet
                .getRange(1, 1, 1, 10)
                .setValues([
                    [
                        "Timestamp",
                        "Team Name",
                        "Team Size",
                        "Member 1 (Leader)",
                        "Member 1 Email",
                        "Member 2",
                        "Member 2 Email",
                        "Member 3",
                        "Member 3 Email",
                        "Member 4",
                        "Member 4 Email",
                    ],
                ]);
        }

        // Format header row
        const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
        headerRange.setFontWeight("bold");
        headerRange.setBackground("#3B82F6");
        headerRange.setFontColor("#FFFFFF");

        // Freeze header row
        sheet.setFrozenRows(1);
    }

    return sheet;
}

// Write individual registration data
function writeIndividualRegistration(sheet, data) {
    const timestamp = new Date();

    const row = [
        timestamp,
        data.teamName || "",
        data.name || "",
        data.email || "",
        data.institution || "",
        data.role || "",
        "Individual",
    ];

    sheet.appendRow(row);

    // Auto-resize columns
    sheet.autoResizeColumns(1, sheet.getLastColumn());
}

// Write team registration data
function writeTeamRegistration(sheet, data) {
    const timestamp = new Date();
    const members = data.members || [];

    const row = [timestamp, data.teamName || "", data.teamSize || 0];

    // Add member details (up to 4 members)
    for (let i = 0; i < 4; i++) {
        if (i < members.length) {
            row.push(members[i].name || "");
            row.push(members[i].email || "");
        } else {
            row.push("");
            row.push("");
        }
    }

    sheet.appendRow(row);

    // Auto-resize columns
    sheet.autoResizeColumns(1, sheet.getLastColumn());
}

// Optional: Function to test the script
function testScript() {
    const testData = {
        registrationType: "team",
        teamName: "Test Team",
        teamSize: 3,
        members: [
            {
                name: "John Doe",
                email: "john@example.com",
                institution: "UCSC",
                role: "Student",
            },
            {
                name: "Jane Smith",
                email: "jane@example.com",
                institution: "UCSC",
                role: "Student",
            },
            {
                name: "Bob Johnson",
                email: "bob@example.com",
                institution: "UCSC",
                role: "Student",
            },
        ],
    };

    const e = {
        postData: {
            contents: JSON.stringify(testData),
        },
    };

    const result = doPost(e);
    Logger.log(result.getContent());
}
