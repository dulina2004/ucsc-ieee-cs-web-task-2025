# 🚨 FIXING "422 - Recipients Address is Empty" Error

## The Problem

You're seeing this error:

```
POST https://api.emailjs.com/api/v1.0/email/send 422 (Unprocessable Content)
EmailJSResponseStatus {status: 422, text: 'The recipients address is empty'}
```

## The Solution

EmailJS needs you to configure the **"To Email"** field in your template settings. Here's how:

---

## Step-by-Step Fix

### 1. Go to EmailJS Dashboard

-   Open [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
-   Log in to your account

### 2. Open Your Template

-   Click on **"Email Templates"** in the left sidebar
-   Find your template: **"IntelliHack Registration Confirmation"** (or `template_u0ukcik`)
-   Click on it to open the editor

### 3. Configure the Settings Tab ⚠️ THIS IS THE KEY STEP

**Click on the "Settings" tab** (not the Content tab!)

You'll see fields like:

-   **From Name**
-   **From Email**
-   **Reply To**
-   **To Email** ← THIS IS WHAT YOU NEED TO FIX
-   **To Name**
-   **Subject**
-   **BCC**

### 4. Fill in the Required Fields

Set these values **EXACTLY** as shown:

| Field        | Value                                          |
| ------------ | ---------------------------------------------- |
| **To Email** | `{{to_email}}`                                 |
| **To Name**  | `{{to_name}}`                                  |
| **Subject**  | `IntelliHack 5.0 - Registration Confirmed! 🎉` |
| **Reply To** | `ieee@ucsc.cmb.ac.lk`                          |

**Important:**

-   The double curly braces `{{}}` are required
-   Don't forget them or it won't work
-   This tells EmailJS to use the dynamic email from your form

### 5. Save Your Template

-   Click the **"Save"** button at the top
-   You should see a success message

### 6. Test Again

-   Go back to your website: `http://localhost:5173`
-   Fill out the registration form
-   Submit it
-   Check your email!

---

## Visual Guide

```
EmailJS Template Editor
┌─────────────────────────────────────────┐
│ [Content] [Settings] [Test]            │ ← Click "Settings" tab
├─────────────────────────────────────────┤
│                                         │
│  From Name:  [IEEE UCSC              ] │
│  From Email: [your-email@gmail.com   ] │
│  Reply To:   [ieee@ucsc.cmb.ac.lk    ] │
│  ┌──────────────────────────────────┐  │
│  │ To Email: {{to_email}}           │  │ ← MUST be {{to_email}}
│  └──────────────────────────────────┘  │
│  To Name:    [{{to_name}}            ] │
│  Subject:    [IntelliHack 5.0...     ] │
│  BCC:        [                       ] │
│                                         │
│  [Save]                                 │
└─────────────────────────────────────────┘
```

---

## Why This Happens

EmailJS requires you to explicitly tell it where to send the email. When you set:

-   **To Email** = `{{to_email}}`

It means: "Use the `to_email` variable from the data I'm sending from my website"

Without this, EmailJS doesn't know where to send the email, so it returns the 422 error.

---

## Verification Checklist

Before testing, make sure:

-   [ ] Template Settings tab has `{{to_email}}` in "To Email" field
-   [ ] Template is saved (green success message appears)
-   [ ] Environment variables are set in `.env` file
-   [ ] Dev server is restarted after adding `.env` (`npm run dev`)
-   [ ] Browser console shows no errors about missing env variables

---

## Still Not Working?

### Check Your .env File

Make sure `d:\lapekode\IEE\final\.env` contains:

```env
VITE_EMAILJS_SERVICE_ID=service_xajb4gn
VITE_EMAILJS_TEMPLATE_ID=template_u0ukcik
VITE_EMAILJS_PUBLIC_KEY=6379_yiLoRMixf_QM
```

### Restart Dev Server

After making changes:

1. Stop the dev server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. Open `http://localhost:5173`

### Check Browser Console

Open Developer Tools (F12) and check the Console tab:

-   Should see: "Sending email with params: {to_email: '...', ...}"
-   Should NOT see: "EmailJS configuration is incomplete"

### Test Email in EmailJS Dashboard

1. Go to your template in EmailJS
2. Click the **"Test"** tab
3. Fill in test values for all variables including `to_email`
4. Click "Send Test Email"
5. Check if you receive the test email

If the test email works but your form doesn't, the issue is in your website code.
If the test email doesn't work, the issue is in your EmailJS template configuration.

---

## Common Mistakes

❌ **Wrong:** `To Email: user@example.com` (hardcoded email)
✅ **Correct:** `To Email: {{to_email}}` (dynamic variable)

❌ **Wrong:** `To Email: {to_email}` (single braces)
✅ **Correct:** `To Email: {{to_email}}` (double braces)

❌ **Wrong:** Forgot to click Save
✅ **Correct:** Always save after making changes

---

## Success Indicators

When it works, you'll see:

-   ✅ Form submits successfully
-   ✅ Toast message: "Registration successful! Check your email for confirmation."
-   ✅ Console log: "Registration email sent successfully!"
-   ✅ Email arrives in inbox (check spam folder too!)

---

## Need More Help?

1. Check `EMAILJS_SETUP.md` for full documentation
2. Check `EMAILJS_QUICKSTART.md` for quick setup guide
3. Visit EmailJS documentation: https://www.emailjs.com/docs/
4. Contact: ieee@ucsc.cmb.ac.lk

---

**After fixing this, your email integration will work perfectly! 🎉**
