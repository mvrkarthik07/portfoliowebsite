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
        <section className="page-hero">
          <h1>Experience</h1>
          <p>
            Professional work across alpha research, wealth-technology AI, NTU web development, and vehicle diagnostics.
          </p>
          <Link className="text-link" to="/resume">
            View resume details
          </Link>
        </section>
        <section className="section-band">
          <div className="section-header">
            <h2 className="section-heading">Professional Experience</h2>
          </div>
          <ExperienceTimeline />
        </section>
      </main>
      <Footer />
    </div>
  </>
)

export default Experience
