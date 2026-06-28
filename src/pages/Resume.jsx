import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import BrandedLoader from '../components/BrandedLoader'
import ExperienceTimeline from '../components/ExperienceTimeline'
import SkillsMatrix from '../components/SkillsMatrix'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)
  const resumeUrl = '/resume/ResumeKarthik_Latest.pdf'

  const handleResumeDownload = (event) => {
    event.preventDefault()
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'ResumeKarthik_Latest.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <SEO
        title="Resume"
        description="Structured resume for Karthik Manda with experience, skills, and downloadable PDF."
      />
      <div className="page-shell">
        <Navbar />
        <main className="page-main">
          <section className="page-hero">
            <h1>Resume</h1>
            <p>
              Structured experience and skills are listed here, with the PDF available for download.
            </p>
            <button type="button" className="btn-secondary" onClick={handleResumeDownload}>
              Download Full Resume
            </button>
          </section>

          <section className="section-band">
            <div className="section-header">
              <h2 className="section-heading">Professional Timeline</h2>
            </div>
            <ExperienceTimeline />
          </section>

          <section className="section-band">
            <div className="section-header">
              <h2 className="section-heading">Technical Matrix</h2>
            </div>
            <SkillsMatrix />
          </section>

          <section className="section-band resume-pdf-section">
            <div className="section-header">
              <h2 className="section-heading">Resume PDF</h2>
              <p className="section-description">
                Use this for applications, forwarding, or offline review.
              </p>
            </div>
            <div className="resume-pdf-actions">
              <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <span>Open Resume in New Tab</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <button type="button" className="btn-secondary" onClick={handleResumeDownload}>
                Download PDF
              </button>
            </div>
            <div className="resume-pdf-frame surface-card">
              {isLoading && <BrandedLoader label="Resume PDF loading" />}
              <iframe
                src={`${resumeUrl}#view=FitH`}
                title="Karthik Manda resume PDF"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Resume
