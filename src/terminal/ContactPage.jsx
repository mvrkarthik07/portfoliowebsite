import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { profile } from '../content/profile'

export default function ContactPage() {
  return <div className="inner-page directory-page contact-page">
    <header className="directory-intro"><p className="prompt">~ $ open contact</p><h1>Contact</h1><p>Open to 2028 full-time roles. Send a message here, or use email directly.</p></header>
    <div className="contact-layout">
      <section className="contact-card" aria-labelledby="message-heading"><h2 id="message-heading">Send a message</h2><p>Your note will be sent from this page. I’ll reply to the email address you enter.</p><ContactForm /></section>
      <aside className="contact-card contact-direct" aria-labelledby="direct-heading"><h2 id="direct-heading">Direct links</h2><a href={`mailto:${profile.email}`}>Email <span>{profile.email} ↗</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>Open ↗</span></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>Open ↗</span></a><a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <span>PDF ↗</span></a><Link to="/experience">Experience <span>View roles ↗</span></Link></aside>
    </div>
  </div>
}
