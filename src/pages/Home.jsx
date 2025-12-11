import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Contact from '../components/Contact'
import LoadingSpinner from '../components/LoadingSpinner'

const Home = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const id = href.substring(1)
          const element = document.getElementById(id)
          if (element) {
            const offset = 80 // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            element.focus({ preventScroll: true }) // Focus for accessibility
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Handle hash navigation when page loads with a hash
    const handleHashNavigation = () => {
      // Wait for intro animation to complete
      const timer = setTimeout(() => {
        const hash = window.location.hash
        if (hash && hash !== '#') {
          const id = hash.substring(1)
          const element = document.getElementById(id)
          if (element) {
            const offset = 80 // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            element.focus({ preventScroll: true })
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }
      }, 2500) // Wait for intro to finish
      return () => clearTimeout(timer)
    }

    handleHashNavigation()
  }, [])

  return (
    <>
      <SEO 
        title="Home"
        description="Portfolio showcasing web development, UI/UX design, and creative digital art. Streetwear aesthetics meet futuristic tech."
      />
      <a
        href="#main-content"
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <div className="min-h-screen">
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-primary-black px-6 text-center"
              initial={{ opacity: 1, filter: 'blur(2px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(6px)' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-gothic text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] text-center"
              >
                KARTHIK MANDA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-3 font-clash text-sm sm:text-base text-secondary-white/80 tracking-wider"
              >
                Loading portfolio…
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6"
              >
                <LoadingSpinner size="lg" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Home

