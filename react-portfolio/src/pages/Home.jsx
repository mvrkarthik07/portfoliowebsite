import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ProjectScrollDriver from '../components/ProjectScrollDriver'

const credentials = [
  'WorldQuant BRAIN -- Gold Tier Research Consultant',
  'Apple Swift Student Challenge 2026 -- Global Top 300',
  'BNP Paribas Technology & AI -- Incoming Intern, Jul-Dec 2026',
  'HTX HackX 2025 -- Top 15 of 60 teams',
  'NTU Computer Engineering -- Year 3',
]

const Home = () => {
  const marqueeItems = [...credentials, ...credentials]

  return (
    <>
      <SEO
        title="Home"
        description="Karthik Manda - Computer Engineering undergraduate building across software, AI, embedded systems, quant research, and UI/UX."
      />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="page-shell">
        <Navbar />
        <main id="main-content" className="page-main" tabIndex={-1}>
          <section className="scale-section home-hero" aria-labelledby="home-hero-title">
            <div className="scale-section__header">
              <span className="section-label">Computer Engineering / NTU</span>
              <h1 id="home-hero-title" className="hero-title">
                Turning complex signals into engineered advantage.
              </h1>
              <p className="section-support">
                WorldQuant Gold Tier research and BNP Paribas AI experience ground the work in financial systems.
              </p>
              <div className="home-hero__actions">
                <Link to="/work" className="btn-primary">
                  View Work
                </Link>
                <Link to="/contact" className="text-link">
                  Contact
                </Link>
              </div>
            </div>
          </section>

          <section className="scale-section scale-section--work" aria-labelledby="home-work-title">
            <div className="scale-section__header">
              <span className="section-label">Work</span>
              <h2 id="home-work-title" className="section-heading">
                Systems built and shipped.
              </h2>
              <p className="section-support">Quantitative research, embedded engineering, and applied ML.</p>
            </div>
            <ProjectScrollDriver />
          </section>

          <section className="scale-section scale-section--credentials" aria-labelledby="home-recognition-title">
            <div className="scale-section__header">
              <span className="section-label">Recognition</span>
              <h2 id="home-recognition-title" className="section-heading">
                Proven across domains.
              </h2>
              <p className="section-support">Signals of performance span finance, engineering, product design, and competitions.</p>
            </div>
            <div className="credential-marquee" aria-label="Credentials">
              <div className="credential-marquee__track">
                {marqueeItems.map((credential, index) => (
                  <span className="credential-marquee__item" key={`${credential}-${index}`}>
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="scale-section" aria-labelledby="home-experience-title">
            <div className="scale-section__header">
              <span className="section-label">Experience</span>
              <h2 id="home-experience-title" className="section-heading">
                Where the work happened.
              </h2>
              <p className="section-support">Research, finance technology, web systems, and diagnostics shaped the portfolio.</p>
            </div>
            <ExperienceTimeline compact />
          </section>

          <section className="scale-section scale-section--contact" aria-labelledby="home-contact-title">
            <div className="scale-section__header">
              <span className="section-label">Contact</span>
              <h2 id="home-contact-title" className="section-heading">
                {"Let's work together."}
              </h2>
              <p className="section-support">Reach out for finance technology, applied AI, embedded systems, or React engineering.</p>
              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Home
