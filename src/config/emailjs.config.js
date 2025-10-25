// EmailJS Configuration
// Follow these steps to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Get your Public Key from Account settings
// 5. Replace the placeholder values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > General)
  PUBLIC_KEY: "Gt63vNf0S6r0I1-YJ",

  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: "service_xgyhj15",

  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: "template_z0urf7a",
};

// Template variables that will be sent to EmailJS
// Make sure your EmailJS template includes these variables:
// - {{from_name}} - Sender's name
// - {{from_email}} - Sender's email
// - {{subject}} - Email subject
// - {{message}} - Email message
// - {{to_name}} - Your name (optional)

export const EMAIL_TEMPLATE_PARAMS = {
  to_name: "Atharva Sarada", // Your name
  reply_to: "atharva.sarada@example.com", // Your email for replies
};
