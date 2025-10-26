# 🔍 Google Sheets Integration Debugging Guide

## Problem: Registration data not appearing in Google Sheet

Follow these steps to diagnose and fix the issue:

---

## Step 1: Test the Webhook Directly

I created a test file for you: **`test-google-sheets.html`**

1. Open this file in your browser (it should have opened automatically)
2. Click **"Test Individual Registration"**
3. Click **"Test Team Registration"**
4. **Check your Google Sheet** - Do you see the test data?

### ✅ If test data appears in Google Sheet:

-   The webhook is working correctly
-   The problem is in the React app integration
-   Skip to **Step 3**

### ❌ If test data does NOT appear:

-   The webhook or Google Apps Script has an issue
-   Continue to **Step 2**

---

## Step 2: Verify Google Apps Script Setup

### 2.1 Check Deployment Settings

1. Go to your Google Sheet
2. Click **Extensions** → **Apps Script**
3. Click **Deploy** → **Manage deployments**
4. Verify these settings:
    - ✅ Type: **Web app**
    - ✅ Execute as: **Me** (your email)
    - ✅ Who has access: **Anyone** ⚠️ CRITICAL!

### 2.2 Check Script Logs

1. In Apps Script editor, click **Executions** (left sidebar)
2. Do you see any recent executions?
    - ✅ **Yes**: Check if they show errors
    - ❌ **No**: The webhook isn't receiving requests

### 2.3 Test the Script Manually

1. In Apps Script editor, select **`testScript`** from the function dropdown
2. Click **Run** (▶️ button)
3. Check your Google Sheet - do you see test data?
    - ✅ **Yes**: Script works, deployment might be wrong
    - ❌ **No**: There's an error in the script

### 2.4 Check for Errors

Common issues:

-   **"Cannot read property..."** → Script has a bug
-   **"Permission denied"** → Authorization issue
-   **Nothing happens** → Deployment not configured

---

## Step 3: Check Browser Console

### 3.1 Open Developer Tools

1. Open your website (http://localhost:8080 or similar)
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab

### 3.2 Fill Out Registration Form

1. Fill out the registration form (individual or team)
2. Click **Register**
3. Watch the console - do you see:

#### ✅ Expected Messages:

```
Registration data sent to Google Sheets successfully
```

#### ❌ Error Messages:

```
Google Sheets webhook URL not configured
```

**FIX**: Environment variable not loaded. Restart dev server.

```
Failed to send registration to Google Sheets: [error]
```

**FIX**: Check the error details, likely network or CORS issue.

---

## Step 4: Verify Environment Variable

### 4.1 Check if Variable is Loaded

1. Open browser console on your website
2. Type this and press Enter:

```javascript
console.log(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL);
```

#### ✅ Should show:

```
https://script.google.com/macros/s/AKfycbyxNa4VlThhVNwTRXEJFso01J5sYSWsq_b5GumD5HslQKsYrmc1VNZy4cbjU4NR5cGk/exec
```

#### ❌ Shows `undefined`:

-   Environment variable not loaded
-   **FIX**: Restart your dev server

### 4.2 Restart Dev Server

```powershell
# Stop current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

⚠️ **IMPORTANT**: Vite only loads environment variables at startup!

---

## Step 5: Check Network Requests

### 5.1 Open Network Tab

1. In Developer Tools, go to **Network** tab
2. Fill out and submit registration form
3. Look for a request to `script.google.com`

### 5.2 Analyze the Request

#### ✅ Request appears:

-   Check the **Payload** tab - is data correct?
-   Check **Response** - note: no-cors means you won't see response body
-   If request shows **Status: (opaque)** - this is NORMAL for no-cors mode

#### ❌ Request does NOT appear:

-   Function is not being called
-   Check if `sendIndividualRegistration` or `sendTeamRegistration` is called

---

## Step 6: Common Issues & Fixes

### Issue #1: "Webhook URL not configured"

**Cause**: Environment variable not loaded  
**Fix**:

1. Verify `.env` file has the URL
2. Restart dev server: `npm run dev`
3. Clear browser cache

### Issue #2: Request goes through but no data in sheet

**Cause**: Google Apps Script deployment issue  
**Fix**:

1. Redeploy the script as Web App
2. Make sure "Who has access" is **Anyone**
3. Copy the NEW deployment URL (it changes with each deployment)
4. Update `.env` with new URL
5. Restart dev server

### Issue #3: CORS errors in console

**Cause**: Google Apps Script requires no-cors mode  
**Fix**: This is already handled in the code (mode: 'no-cors')

### Issue #4: "Permission denied" in Apps Script logs

**Cause**: Authorization issue  
**Fix**:

1. Redeploy the script
2. Re-authorize when prompted
3. Make sure you authorize with the same Google account that owns the sheet

### Issue #5: Data format wrong in sheet

**Cause**: Data structure mismatch  
**Fix**: Check `google-apps-script.js` matches the data structure being sent

---

## Step 7: Manual Verification

### Test with cURL (PowerShell)

```powershell
$url = "https://script.google.com/macros/s/AKfycbyxNa4VlThhVNwTRXEJFso01J5sYSWsq_b5GumD5HslQKsYrmc1VNZy4cbjU4NR5cGk/exec"

$body = @{
    registrationType = "individual"
    teamName = "Solo Test"
    name = "Test User"
    email = "test@example.com"
    institution = "UCSC"
    role = "Student"
} | ConvertTo-Json

Invoke-WebRequest -Uri $url -Method POST -Body $body -ContentType "application/json"
```

**Check your Google Sheet** - do you see the data?

-   ✅ **Yes**: Webhook works, issue is in React app
-   ❌ **No**: Webhook or script issue

---

## Quick Checklist

Before asking for more help, verify:

-   [ ] `.env` file has `VITE_GOOGLE_SHEETS_WEBHOOK_URL=...`
-   [ ] Dev server was restarted after adding environment variable
-   [ ] Google Apps Script is deployed as **Web App**
-   [ ] "Who has access" is set to **Anyone**
-   [ ] `test-google-sheets.html` successfully sends data to sheet
-   [ ] Browser console shows "Registration data sent to Google Sheets successfully"
-   [ ] Network tab shows request to `script.google.com`
-   [ ] Apps Script **Executions** log shows recent runs

---

## 🆘 Still Not Working?

Share these details:

1. **Browser Console Logs** (when submitting form)
2. **Google Apps Script Execution Logs** (Extensions → Apps Script → Executions)
3. **Network Request Details** (Developer Tools → Network tab → script.google.com request)
4. **Result of**: `console.log(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL)` in browser console
5. **Does `test-google-sheets.html` work?** (Yes/No)

This will help identify exactly where the problem is! 🔍
