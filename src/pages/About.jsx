import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import SkillsMatrix from '../components/SkillsMatrix'
import { recognitions } from '../data/experience'

const About = () => (
  <>
    <SEO
      title="About"
      description="About Karthik Manda - Computer Engineering undergraduate at NTU working across software, AI, embedded systems, quant research, and design."
    />
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="about-intro">
          <div className="page-hero">
            <h1>Karthik Manda</h1>
            <p>
              Computer Engineering undergraduate at NTU working across quant research,
              embedded systems, full-stack engineering, and applied ML.
            </p>
            <p>
              Project work spans React dashboards, STM32 control, WCAG 2.1 AA web
              delivery, and WorldQuant BRAIN alpha research.
            </p>
            <Link className="text-link" to="/experience">
              Read professional experience
            </Link>
          </div>
          <div className="about-photo surface-card">
            <LazyImage src="/Images/PP.jpg" alt="Portrait of Karthik Manda" priority />
          </div>
        </section>

        <section className="section-band">
          <div className="section-header">
            <h2 className="section-heading">Four Technical Pillars</h2>
            <p className="section-description">
              Four pillars combine STM32 and CAN bus work with React, FastAPI, PyTorch, and WorldQuant BRAIN research.
            </p>
          </div>
          <SkillsMatrix />
        </section>

        <section className="section-band">
          <div className="section-header">
            <h2 className="section-heading">Recognition</h2>
          </div>
          <div className="recognition-row">
            {recognitions.map((recognition) => (
              <div className="recognition-badge" key={recognition}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 3 15 9l6 1-4.5 4.5 1 6L12 17.5 6.5 20.5l1-6L3 10l6-1z" />
                </svg>
                <span>{recognition}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
)

export default About
