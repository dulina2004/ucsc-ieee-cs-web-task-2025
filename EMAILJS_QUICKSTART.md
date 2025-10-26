# EmailJS Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://dashboard.emailjs.com/sign-up](https://dashboard.emailjs.com/sign-up)
2. Sign up with your email or Google account

### Step 2: Add Email Service

1. Click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (easiest for testing)
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (e.g., `service_abc1234`)

### Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Name it: `IntelliHack Registration`
4. **Copy-paste** the HTML template from `EMAILJS_SETUP.md`
5. **Copy the Template ID** (e.g., `template_xyz5678`)

### Step 4: Get Public Key

1. Click **"Account"** in the left sidebar
2. Go to **"General"** tab
3. Find **"Public Key"** (also called API Key)
4. **Copy the Public Key** (e.g., `AbCdEfGh123456789`)

### Step 5: Configure Environment

1. Create `.env` file in project root:

    ```bash
    cp .env.example .env
    ```

2. Edit `.env` and add your credentials:

    ```env
    VITE_EMAILJS_SERVICE_ID=service_abc1234
    VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
    VITE_EMAILJS_PUBLIC_KEY=AbCdEfGh123456789
    ```

3. **Restart your dev server** after adding .env:
    ```bash
    npm run dev
    ```

### Step 6: Test

1. Go to your local site: `http://localhost:5173`
2. Fill out the registration form
3. Submit and check your email!

---

## 📧 Email Template Variables

Make sure these variables are in your EmailJS template:

-   `{{to_name}}` - Recipient's name
-   `{{team_name}}` - Team name
-   `{{registration_type}}` - "individual" or "team"
-   `{{team_size}}` - Number of members
-   `{{team_members}}` - All member names
-   `{{event_name}}` - Event title
-   `{{event_date}}` - Event date
-   `{{event_location}}` - Venue
-   `{{registration_date}}` - Today's date

---

## 🎨 Customization

### Update Event Details

Edit `src/components/RegistrationForm.tsx` line ~210:

```typescript
event_name: "IntelliHack 5.0",
event_date: "December 19–21, 2025",
event_location: "UCSC, Colombo",
```

### Change Email Design

Edit the HTML template in EmailJS dashboard to customize:

-   Colors
-   Logo
-   Content
-   Social links

---

## ⚠️ Troubleshooting

### Emails not sending?

1. Check browser console for errors
2. Verify all 3 environment variables are set
3. Restart dev server after changing .env
4. Check EmailJS dashboard usage limits (200/month free)

### Email goes to spam?

1. Ask users to check spam folder
2. Use a custom domain email (not Gmail)
3. Consider upgrading EmailJS plan

### Template variables not working?

1. Use exact variable names: `{{to_name}}` not `{to_name}`
2. Check spelling in both template and code
3. Test with EmailJS "Test" button in dashboard

---

## 📊 Free Tier Limits

EmailJS Free Plan:

-   ✅ 200 emails/month
-   ✅ 2 email services
-   ✅ 2 email templates
-   ✅ Basic support

For production, consider:

-   EmailJS Pro: $15/month (1,000 emails)
-   EmailJS Plus: $25/month (10,000 emails)

---

## 🔒 Security Notes

1. **Never commit `.env` to git** (already in `.gitignore`)
2. **Use environment variables** on Vercel/deployment platform
3. **Regenerate keys** if accidentally exposed
4. **Monitor usage** in EmailJS dashboard

---

## 🚀 Deployment (Vercel)

1. Go to your Vercel project settings
2. Click **"Environment Variables"**
3. Add these 3 variables:
    - `VITE_EMAILJS_SERVICE_ID`
    - `VITE_EMAILJS_TEMPLATE_ID`
    - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

---

## 📚 Resources

-   [EmailJS Documentation](https://www.emailjs.com/docs/)
-   [Full Setup Guide](./EMAILJS_SETUP.md)
-   [EmailJS Dashboard](https://dashboard.emailjs.com/)

---

