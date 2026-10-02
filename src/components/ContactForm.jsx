import { useState } from 'react'
import { profile } from '../content/profile'

const FORM_NAME = 'portfolio-contact'
const blank = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(blank)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [failed, setFailed] = useState(false)
  const [sending, setSending] = useState(false)
  const change = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
    setStatus('')
    setFailed(false)
  }
  const submit = async (event) => {
    event.preventDefault()
    if (sending) return
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return
    setSending(true)
    setFailed(false)
    setStatus('')
    try {
      const response = await fetch('/form-blueprint.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': FORM_NAME, name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim() || `Portfolio message from ${values.name.trim()}`, message: values.message.trim(), 'bot-field': '' }).toString(),
      })
      if (!response.ok) throw new Error(`Form returned ${response.status}`)
      setValues(blank)
      setStatus('Message received. I’ll reply by email.')
    } catch {
      setFailed(true)
      setStatus('Message could not be sent. Your draft is still here.')
    } finally { setSending(false) }
  }
  const fallback = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject || `Portfolio message from ${values.name}`)}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`)}`
  return <form className="contact-form" name={FORM_NAME} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} noValidate aria-busy={sending}>
    <input type="hidden" name="form-name" value={FORM_NAME} />
    <p hidden><label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    {[['name', 'Name', true], ['email', 'Email', true], ['subject', 'Subject', false], ['message', 'Message', true]].map(([name, label, required]) => <div className="form-field" key={name}><label htmlFor={`contact-${name}`}>{label}{required ? ' *' : ''}</label>{name === 'message' ? <textarea id={`contact-${name}`} name={name} value={values[name]} onChange={change} rows={5} maxLength={5000} required={required} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} /> : <input id={`contact-${name}`} type={name === 'email' ? 'email' : 'text'} name={name} value={values[name]} onChange={change} maxLength={name === 'subject' ? 180 : 254} required={required} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} />}{errors[name] && <span id={`contact-${name}-error`} className="field-error">{errors[name]}</span>}</div>)}
    <p className="form-status" role="status" aria-live="polite">{status}</p>{failed && <a className="contact-fallback" href={fallback}>Open your email app with this draft ↗</a>}<button className="primary-action" type="submit" disabled={sending}>{sending ? 'SENDING…' : 'SEND MESSAGE'}</button>
  </form>
}
