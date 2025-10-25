# 🚀 Quick EmailJS Setup (5 Minutes)

Get your contact form working in just 5 minutes!

## Step 1: Create EmailJS Account (1 min)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** → Sign up with Google (fastest!)
3. ✅ Done!

## Step 2: Connect Gmail (2 min)

1. In EmailJS dashboard → **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with your Gmail
6. Allow EmailJS access
7. Name it: `Resume Contact Form`
8. Click **"Create Service"**
9. **📋 COPY the Service ID** (looks like: `service_abc1234`)

## Step 3: Create Email Template (1 min)

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Delete everything and paste this:

```
Subject: New Message from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Click **Settings** tab:
   - **To Email**: YOUR_EMAIL@gmail.com ← IMPORTANT!
   - **Reply To**: `{{from_email}}`
5. Click **"Save"**
6. **📋 COPY the Template ID** (looks like: `template_xyz5678`)

## Step 4: Get Public Key (30 sec)

1. Click your profile icon (top right)
2. Go to **"Account"** → **"General"**
3. Scroll to **"API Keys"** section
4. **📋 COPY the Public Key** (looks like: `xYz-aBc123_dEf456`)

## Step 5: Update Your Code (30 sec)

1. Open: `src/config/emailjs.config.js`
2. Replace these three lines:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'xYz-aBc123_dEf456',    // ← Paste your Public Key here
  SERVICE_ID: 'service_abc1234',      // ← Paste your Service ID here
  TEMPLATE_ID: 'template_xyz5678',    // ← Paste your Template ID here
};

export const EMAIL_TEMPLATE_PARAMS = {
  to_name: 'Atharva Sarada',                      // ← Your name
  reply_to: 'atharva.sarada@example.com',        // ← Your email
};
```

3. **Save the file!**

## Step 6: Deploy & Test! (2 min)

```bash
npm run deploy
```

Wait 2-3 minutes, then:
1. Visit: **https://atharvasarada.github.io/interactive-resume/**
2. Scroll to **Contact** section
3. Fill out the form
4. Click **"Send Message"**
5. Check your email! 📧

---

## ✅ Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Got Public Key, Service ID, Template ID
- [ ] Updated `src/config/emailjs.config.js`
- [ ] Deployed with `npm run deploy`
- [ ] Tested and received email!

---

## 🆘 Not Working?

### "Failed to send message"
- Double-check all three IDs in config file
- Make sure you saved the file
- Redeploy: `npm run deploy`

### Email not received?
- Check **Spam folder**
- Verify "To Email" in EmailJS template settings
- Go to EmailJS → **"Email Logs"** to see if it sent

### Rate limit (200 emails/month)
- Enough for most portfolios!
- Upgrade if you need more

---

## 🎉 Done!

Your contact form is now live and functional!

**Questions?** See the full guide in `EMAILJS_SETUP.md`
