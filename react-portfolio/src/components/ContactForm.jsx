import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, GOOGLE_SHEETS_WEBHOOK } from '../utils/emailConfig'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear status when user types
    if (status.message) setStatus({ type: '', message: '' })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' })
      return false
    }
    if (formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Message must be at least 10 characters' })
      return false
    }
    return true
  }

  const logToGoogleSheets = async (data) => {
    if (!GOOGLE_SHEETS_WEBHOOK) return

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script doesn't support CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: data.name,
          email: data.email,
          subject: data.subject || 'No subject',
          message: data.message,
        }),
      })
    } catch (error) {
      // Silently fail - logging is optional
      console.log('Google Sheets logging failed (optional feature)')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
        throw new Error('EmailJS not configured. Please check your environment variables.')
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        subject: formData.subject || `Contact from ${formData.name}`,
        message: formData.message,
        reply_to: formData.email,
      }

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      // Log to Google Sheets (optional, runs in background)
      logToGoogleSheets(formData).catch(() => {
        // Silently fail - this is optional
      })

      // Success!
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({ 
        type: 'error', 
        message: error.message || 'Failed to send message. Please try again or email me directly at mkarthik1725215@gmail.com' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name">
            Name <span className="text-text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            className="form-field"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email">
            Email <span className="text-text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            className="form-field"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-field"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message">
          Message <span className="text-text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          rows={6}
          className="form-field resize-none"
          placeholder="Tell me about your project, collaboration idea, or just say hi..."
        />
        <div className="form-help">
          {formData.message.length} characters {formData.message.length < 10 && '(minimum 10)'}
        </div>
      </div>

      {status.message && (
        <div
          className={`form-status ${status.type === 'error' ? 'form-status--error' : 'form-status--success'}`}
          role="alert"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="form-submit w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm

