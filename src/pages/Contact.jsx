import { contactLinks } from '../data/contact'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Contact = () => {
  const displayLinks = contactLinks.filter((link) => link.type !== 'resume')

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Karthik Manda for collaboration, internships, freelance work, or technical projects."
      />
      <div className="page-shell">
        <Navbar />
        <main className="page-main contact-main">
          <section className="page-hero center">
            <h1>Contact</h1>
            <p>Reach out for BNP Paribas-style finance technology, applied AI, STM32 embedded work, or React full-stack roles.</p>
          </section>

          <ContactForm />

          <section
            className="direct-links"
            aria-labelledby="direct-links-heading"
          >
            <h2 id="direct-links-heading">Direct Links</h2>
            <div>
              {displayLinks.map((link) => (
                <a
                  key={link.label}
                  className="btn-secondary"
                  href={link.href}
                  target={link.type === 'email' ? undefined : '_blank'}
                  rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Contact
