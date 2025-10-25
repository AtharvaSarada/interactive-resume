# 🔧 EmailJS Troubleshooting Guide

## Why Your Contact Form Might Not Be Working

Your EmailJS configuration looks correct, but here are the most common issues:

---

## ✅ Quick Checklist

- [ ] EmailJS account created and verified
- [ ] Email service (Gmail) connected and active
- [ ] Email template created with correct variables
- [ ] All three IDs copied correctly (no typos)
- [ ] Template "To Email" field has YOUR actual email
- [ ] Website deployed to GitHub Pages
- [ ] Tested from the LIVE site (not localhost)

---

## 🔍 Common Issues & Solutions

### Issue 1: Template Variables Don't Match

Your code sends these variables:
- `from_name`
- `from_email`
- `subject`
- `message`
- `to_name`
- `reply_to`

**Solution:** Make sure your EmailJS template uses the EXACT same variable names in double curly braces:

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

### Issue 2: "To Email" Not Set in Template

**Check this:**
1. Go to EmailJS Dashboard
2. Click on **Email Templates**
3. Click on your template
4. Go to **Settings** tab
5. Check the **"To Email"** field

**It MUST contain YOUR actual email address where you want to receive messages!**

Example: `your.actual.email@gmail.com`

### Issue 3: Template Not Saved Properly

After editing your template:
1. Click **Save** button
2. You should see a green success message
3. Try clicking **"Test It"** to send a test email

### Issue 4: EmailJS Service Not Active

**Check this:**
1. Go to **Email Services** in EmailJS dashboard
2. Your Gmail service should show a **green status indicator**
3. If it shows red or disconnected, click **Reconnect**

### Issue 5: Browser Console Errors

**How to check:**
1. Visit your live site: https://atharvasarada.github.io/interactive-resume/
2. Open browser console (F12 or Ctrl+Shift+I)
3. Go to **Console** tab
4. Fill out the contact form and submit
5. Look for RED error messages

**Common error messages and fixes:**

- **"403 Forbidden"** → Wrong Public Key
- **"400 Bad Request"** → Template variables don't match
- **"401 Unauthorized"** → Service ID is incorrect
- **"404 Not Found"** → Template ID is incorrect
- **"Network Error"** → Check internet connection

### Issue 6: Testing on Localhost

EmailJS might have issues with localhost due to CORS or missing configuration.

**Solution:** Always test on the LIVE deployed site:
```
https://atharvasarada.github.io/interactive-resume/
```

Not on `localhost:3000`!

### Issue 7: Gmail Blocking EmailJS

Sometimes Gmail's security settings block EmailJS.

**Solution:**
1. Go to EmailJS Dashboard → Email Services
2. Click on your Gmail service
3. Click **"Reconnect Account"**
4. Go through the authorization flow again
5. Make sure you click **"Allow"** for all permissions

---

## 🧪 Testing Steps

### Step 1: Test in EmailJS Dashboard

1. Go to **Email Templates**
2. Click on your template
3. Click **"Test It"** button
4. Fill in test values:
   - `from_name`: Test User
   - `from_email`: test@example.com
   - `subject`: Test Subject
   - `message`: This is a test message
5. Click **Send Test**
6. Check your email inbox

**If this works** → Problem is in your code
**If this doesn't work** → Problem is in EmailJS setup

### Step 2: Check Browser Console

1. Visit: https://atharvasarada.github.io/interactive-resume/
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Fill out the contact form
5. Click "Send Message"
6. Watch the console for errors

### Step 3: Check Network Tab

1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Submit the contact form
4. Look for a request to `api.emailjs.com`
5. Click on it to see the response

**Status 200** = Success ✅
**Status 4xx** = Configuration error ❌
**Status 5xx** = EmailJS server error ❌

---

## 📋 Verify Your Configuration

### Current Configuration Check:

Your `src/config/emailjs.config.js` has:
```javascript
PUBLIC_KEY: "Gt63vNf0S6r0I1-YJ"
SERVICE_ID: "service_xgyhj15"
TEMPLATE_ID: "template_z0urf7a"
```

### Verify Each Value:

**PUBLIC_KEY:**
1. Go to EmailJS → Account → General
2. Scroll to "API Keys" section
3. Compare the Public Key
4. Should look like: `Gt63vNf0S6r0I1-YJ` ✅

**SERVICE_ID:**
1. Go to EmailJS → Email Services
2. Click on your Gmail service
3. Look for "Service ID" at the top
4. Should look like: `service_xgyhj15` ✅

**TEMPLATE_ID:**
1. Go to EmailJS → Email Templates
2. Click on your template
3. Look for "Template ID" at the top
4. Should look like: `template_z0urf7a` ✅

---

## 🎯 Most Likely Issue

Based on your setup, the most common issue is:

### **The "To Email" field in your EmailJS template is not set to your actual email!**

**Fix it:**
1. Go to https://dashboard.emailjs.com/admin/templates
2. Click on template `template_z0urf7a`
3. Click the **Settings** tab
4. Find **"To Email"** field
5. Enter: `your.actual.email@gmail.com` (replace with your real email!)
6. Click **Save**
7. Test again!

---

## 🔄 If Nothing Works: Fresh Start

### Option 1: Regenerate Public Key

1. EmailJS Dashboard → Account → General
2. Click **"Regenerate"** next to Public Key
3. Copy the NEW key
4. Update `src/config/emailjs.config.js`
5. Deploy again: `npm run deploy`

### Option 2: Create New Template

1. EmailJS Dashboard → Email Templates
2. Click **"Create New Template"**
3. Use this exact template:

```
Subject: New Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

**Settings Tab:**
- To Email: [YOUR_ACTUAL_EMAIL]
- Reply To: {{from_email}}

4. Save and copy the new Template ID
5. Update `src/config/emailjs.config.js`
6. Deploy: `npm run deploy`

---

## 📧 Expected Behavior

When working correctly:

1. User fills out form
2. Clicks "Send Message"
3. Loading spinner appears
4. Green success toast: "Message sent successfully! I'll get back to you soon."
5. Form fields clear
6. **You receive email within 1-2 minutes**
7. Email has all the details from the form

---

## 🆘 Still Not Working?

### Get Help:

1. **EmailJS Support:**
   - https://www.emailjs.com/support/
   - They respond within 24 hours

2. **Check EmailJS Status:**
   - https://status.emailjs.com/
   - Make sure EmailJS service is up

3. **EmailJS Documentation:**
   - https://www.emailjs.com/docs/

4. **Test with EmailJS Playground:**
   - https://dashboard.emailjs.com/admin/integration/browser
   - Try their test interface

---

## 💡 Pro Tips

1. **Check Spam Folder** - EmailJS emails might go to spam initially
2. **Wait 2-3 minutes** - Sometimes emails take time to arrive
3. **Check Email Logs** - EmailJS Dashboard → Email Logs shows all sent emails
4. **Rate Limits** - Free tier: 200 emails/month, 1 email/second
5. **Test Email** - Send a test to yourself first before announcing it's live

---

## ✅ Deployment Reminder

After making ANY changes to the config file:

```bash
npm run deploy
```

Wait 2-3 minutes for GitHub Pages to update, then test on:
```
https://atharvasarada.github.io/interactive-resume/
```

---

## 📊 Debug Checklist

Run through this checklist:

1. [ ] EmailJS account is active
2. [ ] Gmail service shows GREEN status
3. [ ] Template has "To Email" set to my actual email
4. [ ] All three IDs match exactly (no spaces, no typos)
5. [ ] Template uses {{from_name}}, {{from_email}}, {{subject}}, {{message}}
6. [ ] Code is deployed to GitHub Pages
7. [ ] Testing on live site (not localhost)
8. [ ] Browser console shows no errors
9. [ ] Network tab shows status 200
10. [ ] Checked spam folder for test emails

If all checked and still not working → Contact EmailJS support with your Service ID

---

Good luck! 🚀