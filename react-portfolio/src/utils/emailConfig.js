// EmailJS Configuration
// Get these values from https://www.emailjs.com/
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // Replace with your EmailJS Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // Replace with your EmailJS Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  
  // Your email address (where you'll receive the emails)
  TO_EMAIL: 'mkarthik1725215@gmail.com',
}

// Google Sheets Web App URL (optional - for logging to spreadsheet)
// See SETUP_INSTRUCTIONS.md for how to set this up
export const GOOGLE_SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || ''

