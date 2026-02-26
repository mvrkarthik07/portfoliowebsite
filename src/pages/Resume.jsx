import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleResumeDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = '/Images/ResumeKarthik_V3.pdf'
    link.download = 'ResumeKarthik_V3.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <SEO 
        title="Resume"
        description="Resume of Karthik Manda - Computer Engineering student specializing in frontend development, UI/UX design, and visual design."
      />
      <div className="min-h-screen bg-primary-black">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h1 className="font-gothic text-4xl md:text-5xl lg:text-6xl">
                  Resume
                </h1>
                <motion.button
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base whitespace-nowrap"
                >
                  Download PDF
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border border-primary-white/15 bg-primary-white/5 p-4 md:p-6"
            >
              {isLoading && (
                <div className="flex items-center justify-center min-h-[600px]">
                  <div className="text-secondary-white font-clash">Loading resume...</div>
                </div>
              )}
              <iframe
                src="/Images/ResumeKarthik_V3.pdf"
                className="w-full h-[600px] md:h-[800px] lg:h-[1000px] border-0"
                title="Resume PDF"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
              />
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Resume

