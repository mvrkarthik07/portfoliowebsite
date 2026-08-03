import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import ProjectScrollDriver from '../components/ProjectScrollDriver'

const Work = () => (
  <>
    <SEO
      title="Work"
      description="Selected engineering, AI, embedded, UI/UX, product design, and experiment projects by Karthik Manda."
    />
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="scale-section scale-section--work-page" aria-labelledby="work-title">
          <div className="scale-section__header">
            <span className="section-label">Work</span>
            <h1 id="work-title" className="section-heading">
              Systems built and shipped.
            </h1>
            <p className="section-support">Quantitative research, embedded engineering, and applied ML.</p>
          </div>
          <ProjectScrollDriver />
        </section>
      </main>
      <Footer />
    </div>
  </>
)

export default Work
