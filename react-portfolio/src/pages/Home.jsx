import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import LoadingSpinner from '../components/LoadingSpinner'
import { getFeaturedProjects } from '../data/projects'
import LazyImage from '../components/LazyImage'

const Home = () => {
  const [showIntro, setShowIntro] = useState(true)
  // Show featured projects (both product and technical)
  const featuredProjects = getFeaturedProjects().slice(0, 3) // Show up to 3 featured projects

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SEO 
        title="Home"
        description="Karthik Manda - I design and build usable digital products. Computer Engineering undergraduate working across frontend development, UI/UX, and visual design."
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
          {/* Hero Section */}
          <section className="section-container min-h-[100svh] flex items-center relative overflow-hidden">
            {/* Subtle animated background grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }} />
            </div>
            
            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="font-gothic text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-shadow-glow"
              >
                I design and build clear, usable digital products.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="font-clash text-base md:text-lg lg:text-xl text-secondary-white mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Computer Engineering undergraduate working across frontend development, UI/UX, and visual design—turning vague ideas into structured interfaces and systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/work"
                  className="btn-primary px-8 py-4 text-base md:text-lg"
                >
                  View Work
                </Link>
                <Link
                  to="/posters"
                  className="btn-secondary px-8 py-4 text-base md:text-lg"
                >
                  View Posters
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Featured Work */}
          <section className="section-container">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-gothic text-3xl md:text-4xl lg:text-5xl mb-12"
              >
                Featured Work
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {featuredProjects.map((project, index) => {
                  const isProduct = project.projectType === 'product'
                  const linkTo = isProduct ? `/work/${project.id}` : '/work'
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                      className="group"
                    >
                      <Link
                        to={linkTo}
                        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary-white/50 focus:ring-offset-2 focus:ring-offset-primary-black"
                        aria-label={`View ${project.title} - ${project.type}`}
                      >
                        <div className="h-full neon-border bg-primary-white/5 hover:bg-primary-white/10 transition-all duration-500 overflow-hidden futuristic-glow">
                          {project.image ? (
                            <div className="relative aspect-video overflow-hidden">
                              <LazyImage
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          ) : (
                            <div className="relative aspect-video bg-primary-white/5 flex items-center justify-center">
                              <div className="text-center px-4">
                                <div className="font-gothic text-2xl md:text-3xl mb-2 text-primary-white/50">
                                  {project.title.charAt(0)}
                                </div>
                                <p className="font-clash text-xs md:text-sm text-secondary-white/50">
                                  {project.type}
                                </p>
                              </div>
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="font-gothic text-xl md:text-2xl mb-2">
                              {project.title}
                            </h3>
                            <p className="font-clash text-sm md:text-base text-secondary-white mb-4 line-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <span className="font-clash text-xs md:text-sm text-secondary-white/80 px-3 py-1 border border-primary-white/20">
                                {project.category}
                              </span>
                              {project.tags && project.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="font-clash text-xs md:text-sm text-secondary-white/60 px-3 py-1 border border-primary-white/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="font-clash text-sm text-primary-white/80">
                              {isProduct ? 'View Case Study →' : 'View Details →'}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* What I Do */}
          <section className="section-container">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-gothic text-3xl md:text-4xl lg:text-5xl mb-12"
              >
                What I Do
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {[
                  {
                    title: 'Product & UX Design',
                    description: 'Research-driven flows, usability decisions, and design systems that solve real user problems.'
                  },
                  {
                    title: 'Frontend Engineering',
                    description: 'Translating designs into responsive, maintainable interfaces with clean structure and performance in mind.'
                  },
                  {
                    title: 'Visual Design',
                    description: 'Posters, typography, and visual exploration focused on clarity, hierarchy, and style.'
                  },
                  {
                    title: 'Systems & Technical Thinking',
                    description: 'Breaking complex requirements into structured components, making informed trade-offs, and building solutions that scale.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="neon-border p-6 rounded-sm futuristic-glow"
                  >
                    <h3 className="font-gothic text-xl md:text-2xl mb-4 relative z-10">
                      {item.title}
                    </h3>
                    <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed relative z-10">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Focus */}
          <section className="section-container -mt-32 md:-mt-40">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-gothic text-3xl md:text-4xl lg:text-5xl mb-3"
              >
                Technical Focus
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-clash text-sm md:text-base text-secondary-white/60 mb-10 max-w-[600px] mx-auto"
              >
                Core areas where I focus my technical decision-making.
              </motion.p>

              <div className="max-w-[600px] mx-auto">
                <ul className="space-y-5 font-clash text-base md:text-lg text-secondary-white">
                  {[
                    'Frontend architecture and component structure',
                    'State management and data flow',
                    'Performance, accessibility, and responsiveness',
                    'Bridging design intent with implementation constraints'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="flex items-start"
                    >
                      <span className="mr-4 text-secondary-white/40">—</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Me Section */}
          <section className="section-container -mt-32 sm:-mt-40 md:-mt-56">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="font-gothic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                  Let's Work Together
                </h2>
                <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Have a project in mind? I'd love to hear from you.
                </p>
                <Link
                  to="/contact"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
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
