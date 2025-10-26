# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets integration to automatically save registration data from your IntelliHack 5.0 website.

## 📋 Overview

When a participant registers (individually or as a team), their data will be automatically saved to a Google Sheet along with sending them a confirmation email. This uses Google Apps Script as a webhook endpoint.

## 🚀 Quick Setup Steps

1. **Create a Google Sheet**
2. **Set up Google Apps Script**
3. **Deploy as Web App**
4. **Configure Environment Variables**
5. **Test the Integration**

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "IntelliHack 5.0 Registrations"
4. **Important**: Copy the Spreadsheet ID from the URL
    - URL format: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
    - Example: If URL is `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F/edit`
    - Then Spreadsheet ID is: `1A2B3C4D5E6F`

---

## Step 2: Set up Google Apps Script

### 2.1 Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. This will open the Apps Script editor in a new tab
3. You'll see a blank `Code.gs` file

### 2.2 Add the Script Code

1. Delete any default code in `Code.gs`
2. Copy the entire contents of `google-apps-script.js` from your project
3. Paste it into the Apps Script editor

### 2.3 Update the Spreadsheet ID

Find this line at the top of the script:

```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
```

Replace `'YOUR_SPREADSHEET_ID_HERE'` with your actual Spreadsheet ID from Step 1.

Example:

```javascript
const SPREADSHEET_ID = "1A2B3C4D5E6F";
```

### 2.4 Save the Script

1. Click the **Save** icon (💾) or press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
2. You may be asked to name the project - name it "IntelliHack Registration Handler" or similar

---

## Step 3: Deploy as Web App

### 3.1 Start Deployment

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **Web app**

### 3.2 Configure Deployment Settings

Fill in the following settings:

-   **Description**: "Registration webhook v1" (or any description)
-   **Execute as**: **Me** (your email)
-   **Who has access**: **Anyone** ⚠️ **IMPORTANT**

> **Why "Anyone"?** Your React app needs to send data to this endpoint. The script itself validates the data and only writes to your specific Google Sheet.

### 3.3 Authorize the Script

1. Click **Deploy**
2. You'll see a permission dialog
3. Click **Authorize access**
4. Choose your Google account
5. You may see a warning "Google hasn't verified this app"
    - Click **Advanced**
    - Click **Go to [Your Project Name] (unsafe)**
    - Click **Allow**

### 3.4 Copy the Webhook URL

1. After deployment, you'll see a **Web app URL**
2. It will look like: `https://script.google.com/macros/s/AKfycbz.../exec`
3. **COPY THIS ENTIRE URL** - you'll need it in the next step

---

## Step 4: Configure Environment Variables

### 4.1 Update .env File

1. Open your project's `.env` file
2. Add this line (replace with your actual webhook URL):

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbz.../exec
```

### 4.2 Update .env.example (Optional)

If sharing this project, update `.env.example`:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_webhook_url_here
```

### 4.3 Restart Development Server

If you're running the dev server, restart it to load the new environment variable:

```bash
# Stop the current server (Ctrl+C)
# Then restart
bun run dev
```

### 4.4 Configure Vercel (Production)

For your production deployment on Vercel:

1. Go to your project on [Vercel](https://vercel.com)
2. Go to **Settings** → **Environment Variables**
3. Add a new variable:
    - **Name**: `VITE_GOOGLE_SHEETS_WEBHOOK_URL`
    - **Value**: Your webhook URL from Step 3.4
4. Click **Save**
5. **Redeploy** your application for the changes to take effect

---

## Step 5: Test the Integration

### 5.1 Test in Development

1. Run your development server: `bun run dev`
2. Open the website in your browser
3. Fill out the registration form (try both individual and team registration)
4. Submit the form
5. Check your Google Sheet - you should see new sheets created:
    - "Individual Registrations"
    - "Team Registrations"
6. Verify the data is correctly saved

### 5.2 Test in Production

1. After deploying to Vercel with the environment variable
2. Visit your production website
3. Submit a test registration
4. Check your Google Sheet for the data

---

## 🔍 What Gets Saved

### Individual Registrations Sheet

| Column      | Description                   |
| ----------- | ----------------------------- |
| Timestamp   | Date and time of registration |
| Name        | Participant's full name       |
| Email       | Participant's email           |
| NIC         | National Identity Card number |
| Institution | University/Institution        |
| Phone       | Contact number                |

### Team Registrations Sheet

| Column                        | Description                   |
| ----------------------------- | ----------------------------- |
| Timestamp                     | Date and time of registration |
| Team Name                     | Name of the team              |
| Team Size                     | Number of members (3 or 4)    |
| Member 1 Name                 | First member's name           |
| Member 1 Email                | First member's email          |
| Member 1 NIC                  | First member's NIC            |
| Member 1 Institution          | First member's institution    |
| Member 1 Phone                | First member's phone          |
| (Continues for all 4 members) | ...                           |

---

## 🛠️ Troubleshooting

### Issue: "Script function not found: doPost"

**Solution**: Make sure you:

1. Copied the entire script from `google-apps-script.js`
2. Saved the script in Apps Script editor
3. Deployed it as a Web App (not as API Executable)

### Issue: "Permission denied"

**Solution**:

1. Redeploy the script
2. Make sure "Execute as" is set to **Me**
3. Make sure "Who has access" is set to **Anyone**

### Issue: Data not appearing in Google Sheet

**Solution**:

1. Check that you updated the `SPREADSHEET_ID` in the Apps Script code
2. Open the Google Sheet and check if sheets named "Individual Registrations" or "Team Registrations" were created
3. Check browser console for any error messages
4. Verify the webhook URL is correctly set in `.env`

### Issue: "VITE_GOOGLE_SHEETS_WEBHOOK_URL is undefined"

**Solution**:

1. Make sure the environment variable is in `.env` file
2. Make sure it starts with `VITE_` (required for Vite to expose it)
3. Restart your development server after adding the variable

### Issue: Environment variable not working in Vercel

**Solution**:

1. Double-check the variable name in Vercel settings
2. Make sure there are no extra spaces in the value
3. Redeploy the application after adding the variable

---

## 🔒 Security Notes

### Is it safe to use "Anyone" access?

**Yes**, because:

1. The script only accepts POST requests with valid data
2. It only writes to YOUR specific Google Sheet (via Spreadsheet ID)
3. The script validates all incoming data
4. No one can read your sheet without permission
5. The webhook URL is kept private in your `.env` file

### Protecting Your Webhook URL

-   ✅ **DO**: Keep the URL in `.env` (which is in `.gitignore`)
-   ✅ **DO**: Use Vercel environment variables for production
-   ❌ **DON'T**: Commit the actual URL to GitHub
-   ❌ **DON'T**: Share the URL publicly

---

## 📝 Testing the Script Manually (Optional)

You can test if the script is working before integrating:

1. In Apps Script editor, select the `testScript` function from the dropdown
2. Click the **Run** button (▶️)
3. Check your Google Sheet - you should see test data appear
4. Delete the test data before going live

---

## 🔄 Updating the Script

If you need to update the script later:

1. Make changes in the Apps Script editor
2. Save the changes
3. Click **Deploy** → **Manage deployments**
4. Click the **edit icon** (✏️) next to your deployment
5. Change the version to "New version"
6. Add a description of changes
7. Click **Deploy**
8. The webhook URL remains the same (no need to update `.env`)

---

## 📧 Integration with EmailJS

The Google Sheets integration works alongside EmailJS:

1. User fills out registration form
2. **Data is validated** by the form
3. **Data is saved to localStorage** (offline backup)
4. **Data is sent to Google Sheets** ← NEW
5. **Confirmation email is sent via EmailJS**
6. User sees success message

Both Google Sheets and EmailJS operations run in parallel for efficiency.

---

## ✅ Setup Complete!

Once you've completed all steps:

-   ✅ Registrations are automatically saved to Google Sheets
-   ✅ Users receive confirmation emails
-   ✅ You can access and manage all registrations in one place
-   ✅ Data is backed up in localStorage as well

You can now view, filter, sort, and export your registration data directly from Google Sheets!

---

## 🆘 Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Check the browser console for error messages
4. Review the Apps Script execution logs:
    - In Apps Script editor: **View** → **Executions**

---

## 📚 Additional Resources

-   [Google Apps Script Documentation](https://developers.google.com/apps-script)
-   [Google Sheets API Reference](https://developers.google.com/sheets/api)
-   [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
