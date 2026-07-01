import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Contact = () => (
  <>
    <SEO
      title="Contact"
      description="Get in touch with Karthik Manda for collaboration, internships, freelance work, or technical projects."
    />
    <div className="page-shell">
      <Navbar />
      <main className="page-main contact-main">
        <section className="scale-section contact-section" aria-labelledby="contact-title">
          <div className="scale-section__header">
            <span className="section-label">Contact</span>
            <h1 id="contact-title" className="section-heading">
              {"Let's work together."}
            </h1>
            <p className="section-support">
              Reach out for finance technology, applied AI, embedded systems, or React engineering.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  </>
)

export default Contact
