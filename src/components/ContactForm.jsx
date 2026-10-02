import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../utils/emailConfig'
import { profile } from '../content/profile'
const blank = { name: '', email: '', subject: '', message: '' }
export default function ContactForm() {
  const [values, setValues] = useState(blank)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const change = (event) => { setValues((current) => ({ ...current, [event.target.name]: event.target.value })); setErrors((current) => ({ ...current, [event.target.name]: '' })); setStatus('') }
  const submit = async (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return
    if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      const subject = encodeURIComponent(values.subject || `Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('Your email app is opening.')
      return
    }
    setSending(true)
    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, { from_name: values.name, from_email: values.email, to_email: profile.email, subject: values.subject || `Portfolio message from ${values.name}`, message: values.message, reply_to: values.email }, { publicKey: EMAILJS_CONFIG.PUBLIC_KEY })
      setValues(blank)
      setStatus('Message sent.')
    } catch { setStatus(`Message could not be sent. Email ${profile.email} directly.`) }
    finally { setSending(false) }
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    {[['name', 'Name', true], ['email', 'Email', true], ['subject', 'Subject', false], ['message', 'Message', true]].map(([name, label, required]) => <div className="form-field" key={name}><label htmlFor={`contact-${name}`}>{label}{required ? ' *' : ''}</label>{name === 'message' ? <textarea id={`contact-${name}`} name={name} value={values[name]} onChange={change} rows={4} required={required} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} /> : <input id={`contact-${name}`} type={name === 'email' ? 'email' : 'text'} name={name} value={values[name]} onChange={change} required={required} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} />}{errors[name] && <span id={`contact-${name}-error`} className="field-error">{errors[name]}</span>}</div>)}
    <p className="form-status" role="status" aria-live="polite">{status}</p><button className="primary-action" type="submit" disabled={sending}>{sending ? 'SENDING' : 'SEND MESSAGE'}</button>
  </form>
}
