# EmailJS Setup Guide

This guide will walk you through setting up EmailJS for your interactive resume contact form.

## Prerequisites

- A GitHub account (you already have this!)
- A Gmail account (recommended) or any other email service

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (top right)
3. You can sign up with:
   - Google account (recommended - fastest)
   - GitHub account
   - Or create a new account with email

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or any other SMTP service
4. For Gmail:
   - Click on **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account
   - Allow EmailJS to access your Gmail
   - Give your service a name (e.g., "Resume Contact Form")
   - Click **Create Service**
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Replace the default template with this:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your interactive resume contact form.
Reply to: {{from_email}}
```

4. In the **Settings** tab:
   - **Template Name**: Contact Form
   - **Subject**: `New Message from {{from_name}} - {{subject}}`
   - **From Name**: Your name (e.g., "Atharva Sarada")
   - **To Email**: Your email (where you want to receive messages)
   - **Reply To**: `{{from_email}}` (so you can reply directly to the sender)

5. Click **Save**
6. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Click on your profile icon (top right)
2. Go to **Account** → **General**
3. Scroll down to **API Keys**
4. **Copy the Public Key** (it looks like: `xYz-aBc123_dEf456`)

## Step 5: Update Your Project Configuration

1. Open the file: `src/config/emailjs.config.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your-public-key-here',     // From Step 4
  SERVICE_ID: 'your-service-id-here',     // From Step 2
  TEMPLATE_ID: 'your-template-id-here',   // From Step 3
};

export const EMAIL_TEMPLATE_PARAMS = {
  to_name: 'Your Name',                    // Your name
  reply_to: 'your.email@example.com',     // Your email
};
```

### Example:
```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'xYz-aBc123_dEf456',
  SERVICE_ID: 'service_abc1234',
  TEMPLATE_ID: 'template_xyz5678',
};

export const EMAIL_TEMPLATE_PARAMS = {
  to_name: 'Atharva Sarada',
  reply_to: 'atharva.sarada@example.com',
};
```

## Step 6: Test Your Contact Form

1. Save the configuration file
2. Build and deploy your site:
   ```bash
   npm run deploy
   ```
3. Wait a few minutes for GitHub Pages to update
4. Visit your site and go to the Contact section
5. Fill out the form and click **Send Message**
6. Check your email inbox - you should receive the message!

## Troubleshooting

### "Failed to send message" error

**Check your configuration:**
- Make sure all IDs are correct (no typos)
- Public Key should NOT have quotes around it in EmailJS dashboard
- Service must be active (green status in Email Services)

**Check your email service:**
- For Gmail: Make sure you've authorized EmailJS
- Check if your Gmail has blocked the connection
- Try disconnecting and reconnecting your Gmail account

### Email not received

1. Check your **Spam/Junk folder**
2. Verify the "To Email" in your template settings
3. Go to EmailJS Dashboard → **Email Logs** to see if the email was sent
4. Make sure your template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

### Rate Limiting

EmailJS free tier allows:
- **200 emails per month**
- **1 email per second**

If you need more, consider upgrading to a paid plan.

## Security Notes

✅ **Safe to commit:** The public key, service ID, and template ID are safe to commit to GitHub. They're meant to be public.

❌ **Never commit:** Your EmailJS account password

## Alternative: Using Environment Variables (Optional)

For extra security, you can use environment variables:

1. Create a `.env` file in your project root:
```env
VITE_EMAILJS_PUBLIC_KEY=your-public-key
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
```

2. Update `src/config/emailjs.config.js`:
```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};
```

3. Add to `.gitignore`:
```
.env
.env.local
```

4. For GitHub Pages, you'll need to set these as repository secrets and use GitHub Actions.

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

---

## Quick Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail recommended)
- [ ] Created email template
- [ ] Copied Public Key, Service ID, and Template ID
- [ ] Updated `src/config/emailjs.config.js` with credentials
- [ ] Tested the contact form
- [ ] Received test email successfully

Once everything is working, you're all set! 🎉