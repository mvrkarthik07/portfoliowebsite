import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import { getFeaturedProjects } from '../data/projects'

const capabilities = [
  {
    title: 'AI/ML Systems',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M12 3v18M4 8h16M4 16h16M7 5l10 14M17 5 7 19" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack Engineering',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 6h16v12H4zM8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    title: 'Quant Research',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 18 9 9l4 5 4-8 3 12M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M5 5h14v14H5zM9 5v14M5 10h14" />
      </svg>
    ),
  },
]

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3)

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
          <section className="home-hero">
            <div className="home-hero__grid">
              <div className="home-hero__content">
                <h1 className="hero-title">Turning complex signals into engineered advantage.</h1>
                <p className="home-hero__scope">Quantitative research, embedded systems, and applied ML.</p>
              </div>
              <div className="home-hero__aside">
                <p className="home-hero__status">
                  WorldQuant BRAIN — Research Consultant (Gold Tier) · Incoming BNP Paribas Technology &amp; AI Intern,
                  Jul-Dec 2026.
                </p>
                <div className="home-hero__actions">
                  <Link to="/work" className="btn-primary">
                    View Work
                  </Link>
                  <Link to="/contact" className="text-link">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-hero__proof" aria-label="Portfolio evidence">
              <div className="home-hero__proof-card">
                <span>Recognition</span>
                <strong>Apple Swift Student Challenge 2026, Global Top 300</strong>
              </div>
              <Link className="home-hero__proof-card home-hero__proof-card--link" to="/experience">
                <span>Experience</span>
                <strong>Trace the work behind the finance, AI, and embedded systems claims</strong>
              </Link>
            </div>
          </section>

          <section className="section-band">
            <div className="section-index-header">
              <div>
                <span className="section-index-label">03</span>
                <h2 className="section-heading">Featured Projects</h2>
                <p className="section-description">
                  Three featured builds cover PyTorch MADDPG trading, local LLM code review, and Swift 6 architecture simulation.
                </p>
              </div>
            </div>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="surface-card project-summary-card"
                >
                  {project.image && (
                    <LazyImage src={project.image} alt={`${project.title} project thumbnail`} className="project-summary-card__image" />
                  )}
                  {!project.image && (
                    <div className="project-summary-card__image project-summary-card__image-placeholder" aria-hidden="true">
                      <span>{project.title}</span>
                    </div>
                  )}
                  <div className="project-summary-card__body">
                    <div className="project-summary-card__index">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="project-summary-card__meta">
                      <span className="tag-chip">{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link className="text-link" to={project.projectType === 'product' ? `/work/${project.id}` : '/work'}>
                      {project.projectType === 'product' ? 'View case study' : 'View project details'} -&gt;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-band capability-band" aria-labelledby="capabilities-heading">
            <div className="section-index-header">
              <div>
                <span className="section-index-label">04</span>
                <h2 id="capabilities-heading" className="section-heading">
                  Capabilities
                </h2>
              <p className="section-description">
                  Four capability areas map to WorldQuant BRAIN research, NTU web development, STM32 control, and React systems.
              </p>
              </div>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <div className="capability-item" key={item.title}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-strip">
            <div>
              <h2>Contact</h2>
              <p>Contact for finance technology, applied AI, embedded systems, or React full-stack engineering roles.</p>
            </div>
            <Link to="/contact" className="text-link">
              Start a Conversation
            </Link>
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Home
