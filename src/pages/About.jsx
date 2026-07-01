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
        <section className="scale-section about-intro" aria-labelledby="about-title">
          <div className="scale-section__header">
            <span className="section-label">Bio</span>
            <h1 id="about-title" className="section-heading">
              Karthik builds applied systems.
            </h1>
            <p className="section-support">
              Computer Engineering at NTU connects quant research, embedded systems, full-stack engineering, and applied ML.
            </p>
            <Link className="text-link" to="/experience">
              Read Experience
            </Link>
          </div>
          <div className="about-photo surface-card">
            <LazyImage src="/Images/PP.jpg" alt="Portrait of Karthik Manda" priority />
          </div>
        </section>

        <section className="scale-section" aria-labelledby="skills-title">
          <div className="scale-section__header">
            <span className="section-label">Skills</span>
            <h2 id="skills-title" className="section-heading">
              Technical pillars drive delivery.
            </h2>
            <p className="section-description">
              STM32, React, FastAPI, PyTorch, and WorldQuant research form the working stack.
            </p>
          </div>
          <SkillsMatrix />
        </section>

        <section className="scale-section" aria-labelledby="about-recognition-title">
          <div className="scale-section__header">
            <span className="section-label">Recognition</span>
            <h2 id="about-recognition-title" className="section-heading">
              Proof travels with the work.
            </h2>
            <p className="section-description">Recognition spans Apple, HTX, and WorldQuant-adjacent engineering outcomes.</p>
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
