# EmailJS Template for IntelliHack 5.0

## ⚠️ CRITICAL SETUP STEP

**Before using the HTML template below, you MUST configure the recipient email in EmailJS:**

1. In your EmailJS template editor, find the **Settings** tab
2. Set the **"To Email"** field to: `{{to_email}}`
3. Set the **"To Name"** field to: `{{to_name}}` (optional but recommended)
4. This tells EmailJS to use the dynamic email address from your form

**Without this step, you'll get a "422 - The recipients address is empty" error!**

---

## Email Template HTML

Use this HTML template in your EmailJS dashboard for the registration confirmation email.

### Template Variables:

-   `{{to_email}}` - Recipient's email address (**REQUIRED in Settings**)
-   `{{to_name}}` - Recipient's name (Team Leader or Individual)
-   `{{team_name}}` - Name of the team
-   `{{registration_type}}` - "individual" or "team"
-   `{{team_size}}` - Number of team members
-   `{{team_members}}` - Comma-separated list of team member names
-   `{{event_name}}` - IntelliHack 5.0
-   `{{event_date}}` - Event date
-   `{{event_location}}` - Event location
-   `{{registration_date}}` - Date of registration

---

## HTML Template Code:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IntelliHack 5.0 - Registration Confirmation</title>
    </head>
    <body
        style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;"
    >
        <div
            style="max-width: 600px; margin: 0 auto; background-color: #ffffff;"
        >
            <!-- Header with Logo and Gradient -->
            <div
                style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); padding: 40px 30px; text-align: center;"
            >
                <a
                    style="text-decoration: none; outline: none;"
                    href="https://ucsc-ieee-cs-web-task-2025.vercel.app/"
                    target="_blank"
                >
                    <img
                        style="height: 48px; margin-bottom: 20px;"
                        height="48"
                        src="cid:logo.png"
                        alt="IntelliHack 5.0"
                    />
                </a>
                <h1
                    style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);"
                >
                    🎉 Registration Confirmed!
                </h1>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
                <!-- Greeting -->
                <p style="font-size: 18px; color: #1f2937; margin: 0 0 24px 0;">
                    Hi <strong>{{to_name}}</strong>,
                </p>

                <!-- Confirmation Message -->
                <p
                    style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 24px 0;"
                >
                    Thank you for registering for
                    <strong style="color: #3B82F6;">IntelliHack 5.0</strong>!
                    We're thrilled to have you join us for this exciting
                    hackathon event.
                </p>

                <!-- Registration Details Card -->
                <div
                    style="background: linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%); border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #3B82F6;"
                >
                    <h2
                        style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; font-weight: 600;"
                    >
                        📋 Your Registration Details
                    </h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Team Name:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{team_name}}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Registration Type:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right; text-transform: capitalize;"
                            >
                                {{registration_type}}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Team Size:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{team_size}} member(s)
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Registered On:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{registration_date}}
                            </td>
                        </tr>
                    </table>

                    <!-- Team Members (if applicable) -->
                    <div
                        style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(139, 92, 246, 0.2);"
                    >
                        <p
                            style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;"
                        >
                            Team Members:
                        </p>
                        <p
                            style="color: #1f2937; font-size: 14px; margin: 0; font-weight: 500;"
                        >
                            {{team_members}}
                        </p>
                    </div>
                </div>

                <!-- Event Details -->
                <div
                    style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin: 24px 0;"
                >
                    <h2
                        style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; font-weight: 600;"
                    >
                        📅 Event Information
                    </h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Event:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{event_name}}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Date:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{event_date}}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding: 8px 0; color: #6b7280; font-size: 14px;"
                            >
                                Location:
                            </td>
                            <td
                                style="padding: 8px 0; color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;"
                            >
                                {{event_location}}
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Next Steps -->
                <div
                    style="background: linear-gradient(135deg, #FEF3C7 0%, #FED7AA 100%); border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #F59E0B;"
                >
                    <h2
                        style="color: #92400e; font-size: 18px; margin: 0 0 12px 0; font-weight: 600;"
                    >
                        🚀 What's Next?
                    </h2>
                    <ul
                        style="color: #78350f; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;"
                    >
                        <li style="margin-bottom: 8px;">
                            Watch your inbox for event updates and schedule
                            details
                        </li>
                        <li style="margin-bottom: 8px;">
                            Join our Discord/Slack channel (link will be sent
                            soon)
                        </li>
                        <li style="margin-bottom: 8px;">
                            Start brainstorming ideas with your team
                        </li>
                        <li style="margin-bottom: 8px;">
                            Review the event guidelines and judging criteria
                        </li>
                        <li>Prepare your development environment</li>
                    </ul>
                </div>

                <!-- Important Note -->
                <div
                    style="background-color: #FEE2E2; border-radius: 8px; padding: 16px; margin: 24px 0;"
                >
                    <p
                        style="color: #991B1B; font-size: 14px; margin: 0; line-height: 1.6;"
                    >
                        <strong>📌 Important:</strong> Please save this email
                        for your records. You'll need your registration details
                        on the day of the event.
                    </p>
                </div>

                <!-- Call to Action -->
                <div style="text-align: center; margin: 32px 0;">
                    <a
                        href="https://ucsc-ieee-cs-web-task-2025.vercel.app/"
                        style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);"
                    >
                        Visit Event Website
                    </a>
                </div>

                <!-- Support Message -->
                <p
                    style="font-size: 14px; color: #6b7280; line-height: 1.6; margin: 24px 0 0 0;"
                >
                    If you have any questions or need assistance, feel free to
                    reach out to us at
                    <a
                        href="mailto:ieee@ucsc.cmb.ac.lk"
                        style="color: #3B82F6; text-decoration: none;"
                        >ieee@ucsc.cmb.ac.lk</a
                    >
                </p>
            </div>

            <!-- Footer -->
            <div
                style="background-color: #1f2937; padding: 30px; text-align: center; border-top: 4px solid #3B82F6;"
            >
                <p style="color: #9ca3af; font-size: 14px; margin: 0 0 12px 0;">
                    We can't wait to see what you build! 💡✨
                </p>

                <p
                    style="color: #9ca3af; font-size: 14px; margin: 0 0 16px 0; padding-top: 16px; border-top: 1px solid #374151;"
                >
                    Best regards,<br />
                    <strong style="color: #ffffff;"
                        >IEEE Computer Society — UCSC Student Branch
                        Chapter</strong
                    >
                </p>

                <!-- Social Links -->
                <div style="margin: 20px 0;">
                    <a
                        href="https://www.linkedin.com/company/ieee-computer-society-student-branch-chapter-of-ucsc/posts/?feedView=all"
                        style="display: inline-block; margin: 0 8px; color: #60a5fa; text-decoration: none; font-size: 14px;"
                    >
                        LinkedIn
                    </a>
                    <span style="color: #4b5563;">|</span>
                    <a
                        href="https://www.facebook.com/IEEECSUCSC/"
                        style="display: inline-block; margin: 0 8px; color: #60a5fa; text-decoration: none; font-size: 14px;"
                    >
                        Facebook
                    </a>
                    <span style="color: #4b5563;">|</span>
                    <a
                        href="https://www.instagram.com/ieeeucsc/"
                        style="display: inline-block; margin: 0 8px; color: #60a5fa; text-decoration: none; font-size: 14px;"
                    >
                        Instagram
                    </a>
                </div>

                <p style="color: #6b7280; font-size: 12px; margin: 16px 0 0 0;">
                    © 2025 IEEE Computer Society UCSC. All rights reserved.
                </p>
            </div>
        </div>
    </body>
</html>
```

---

## Setup Instructions:

### 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in to your account

### 2. Create Email Service

1. Go to "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended for testing)
4. Follow the setup instructions
5. Copy the **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. **IMPORTANT: Configure the Settings tab first:**
    - Click on the **"Settings"** tab
    - In **"To Email"** field, enter: `{{to_email}}`
    - In **"To Name"** field, enter: `{{to_name}}`
    - In **"Subject"** field, enter: `IntelliHack 5.0 - Registration Confirmed! 🎉`
4. Now click on the **"Content"** tab
5. Paste the HTML template code above
6. Give it a name: "IntelliHack Registration Confirmation"
7. Click **"Save"**
8. Copy the **Template ID**

### 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy this key

### 5. Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id_here
    VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
    ```

### 6. Add Logo Image (Optional)

-   In EmailJS template editor, you can upload a logo image
-   The template uses `cid:logo.png` to reference an attached logo
-   Or replace `<img src="cid:logo.png" />` with a direct URL to your logo

### 7. Test Your Setup

-   After integration, test with a real email address
-   Check spam folder if email doesn't arrive
-   Verify all template variables are properly replaced

---

## Important Notes:

1. **Email Deliverability**:

    - Use a verified email service (Gmail, SendGrid, etc.)
    - Emails may land in spam initially - ask users to check spam folder
    - Consider using a custom domain for better deliverability

2. **Rate Limits**:

    - EmailJS free tier: 200 emails/month
    - Consider upgrading for production use

3. **Security**:

    - Never commit `.env` file to git
    - Keep your EmailJS credentials private
    - The `.env` file is already in `.gitignore`

4. **Error Handling**:
    - The integration includes proper error handling
    - Users will still see success message even if email fails
    - Check browser console for email sending errors

---

## Template Variables Explanation:

-   **to_name**: Name of the recipient (team leader or individual)
-   **team_name**: Team name provided during registration
-   **registration_type**: Either "individual" or "team"
-   **team_size**: Number of members in the team
-   **team_members**: Comma-separated list of all team member names
-   **event_name**: "IntelliHack 5.0"
-   **event_date**: "December 19–21, 2025"
-   **event_location**: "UCSC, Colombo"
-   **registration_date**: Auto-generated current date

---

## Customization Tips:

1. **Update Event Details**: Modify the event_date and event_location in the RegistrationForm component
2. **Change Colors**: Adjust the gradient colors in the HTML to match your brand
3. **Add More Info**: Include additional sections like "FAQs" or "Preparation Guide"
4. **Social Links**: Update social media links with your actual profiles
5. **Logo**: Replace the logo source with your actual logo URL or use attached image

---

## Email Preview:

The email will display:

-   ✅ Professional header with gradient and logo
-   ✅ Personalized greeting
-   ✅ Registration details card (team name, type, size, members)
-   ✅ Event information (date, location)
-   ✅ Next steps checklist
-   ✅ Important notes
-   ✅ Call-to-action button
-   ✅ Contact information
-   ✅ Professional footer with social links

The design is:

-   📱 Fully responsive (works on all devices)
-   🎨 Modern gradient design matching your website
-   ♿ Accessible with proper semantics
-   📧 Compatible with all major email clients
