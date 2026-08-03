import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import ExperienceTimeline from '../components/ExperienceTimeline'

const Experience = () => (
  <>
    <SEO
      title="Experience"
      description="Professional experience across quant research, AI and technology, and embedded vehicle diagnostics."
    />
    <div className="page-shell">
        <Navbar />
        <main className="page-main">
        <section className="scale-section" aria-labelledby="experience-title">
          <div className="scale-section__header">
            <span className="section-label">Experience</span>
            <h1 id="experience-title" className="section-heading">
              Where the work happened.
            </h1>
            <p className="section-support">
              Alpha research, wealth-technology AI, NTU web development, and vehicle diagnostics shaped the work.
            </p>
            <Link className="text-link" to="/resume">
              View Resume
            </Link>
          </div>
          <ExperienceTimeline />
        </section>
      </main>
      <Footer />
    </div>
  </>
)

export default Experience
