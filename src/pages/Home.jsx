import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import BoxLoader from '@/components/ui/box-loader'
import { ShaderAnimation } from '@/components/ui/shader-lines'
import { getFeaturedProjects } from '../data/projects'
import LazyImage from '../components/LazyImage'
import TextMarquee from '@/components/ui/text-marque'
import { CursorDrivenParticleTypography } from '@/components/ui/cursor-driven-particles-typography'
import DotBox from '@/components/ui/dot-box'

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
        description="Karthik Manda — Computer Engineering undergraduate and Apple Student Swift Challenge 2026 Winner, working across UI/UX design, frontend engineering, and visual systems."
      />
      <a
        href="#main-content"
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <div className="min-h-screen overflow-x-hidden">
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              className="fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
              initial={{ opacity: 1, filter: 'blur(2px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(6px)' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="pointer-events-none absolute inset-0 z-0">
                <ShaderAnimation />
              </div>
              <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center bg-primary-black/55 py-12">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-gothic text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] text-center"
              >
                KARTHIK MANDA
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-8"
              >
                <BoxLoader label="Portfolio Loading" />
              </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {/* Marquee band above hero */}
          <section
            className="relative z-20 border-b border-t border-primary-white/10 bg-transparent pb-1.5 pt-24 md:pb-2 md:pt-28"
            aria-label="Highlights"
          >
            <div className="pointer-events-none flex flex-col gap-2 md:gap-3" aria-hidden>
              <TextMarquee
                delay={500}
                baseVelocity={-0.75}
                scrollDependent
                className="text-[4vw] font-bold uppercase leading-tight tracking-wide text-white sm:text-[3.5vw] md:text-2xl lg:text-3xl xl:text-4xl md:tracking-wider"
              >
                ✦ APPLE STUDENT SWIFT CHALLENGE 2026 WINNER ✦ UI/UX DESIGN ✦ SOFTWARE ENGINEERING ✦ SYSTEMS THINKING ✦ APPLE STUDENT SWIFT CHALLENGE 2026 WINNER ✦ AI ENGINEERING ✦ EMBEDDED SYSTEMS ✦ SYSTEMS THINKING ✦
              </TextMarquee>
              <TextMarquee
                delay={500}
                baseVelocity={-1}
                scrollDependent
                className="text-[4vw] font-bold uppercase leading-tight tracking-wide text-white sm:text-[3.5vw] md:text-2xl lg:text-3xl xl:text-4xl md:tracking-wider"
              >
                ✦ PRODUCT DESIGN ✦ SOFTWARE DEVELOPMENT ✦ AVAILABLE FOR PROJECTS ✦ ✦ PRODUCT DESIGN ✦ SOFTWARE DEVELOPMENT ✦ AVAILABLE FOR PROJECTS ✦
              </TextMarquee>
            </div>
          </section>

          <section
            id="hero"
            className="section-container relative isolate z-10 min-h-[calc(100svh-9rem)] overflow-hidden !items-center !justify-center !py-8 sm:!py-12 md:!py-16 !px-3 sm:!px-4 md:!px-5 lg:!px-4 xl:!px-5 2xl:!px-6 supports-[height:100dvh]:min-h-[calc(100dvh-9rem)]"
          >
            <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center justify-center gap-6 text-center sm:gap-10 md:max-w-6xl md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="pointer-events-auto h-[min(30svh,260px)] w-full max-w-[100%] text-primary-white sm:h-[min(34svh,360px)] md:h-[min(32svh,400px)] md:max-w-5xl lg:h-[min(30svh,440px)]"
              >
                <CursorDrivenParticleTypography
                  text={
                    'I turn complex problems\ninto seamless\nexperiences.'
                  }
                  fontSize={88}
                  fontFamily='"Special Gothic Expanded One", sans-serif'
                  particleSize={1}
                  particleDensity={2}
                  dispersionStrength={19}
                  returnSpeed={0.085}
                  color="rgba(255, 255, 255, 0.94)"
                  textAlign="center"
                  uppercase
                  className="min-h-0 h-full w-full"
                />
              </motion.div>

              <div className="pointer-events-auto flex w-full min-w-0 max-w-2xl flex-col items-center gap-5 px-1 sm:gap-8 sm:px-0">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="font-clash text-base leading-relaxed text-secondary-white/90 sm:text-xl md:text-2xl"
                >
                  Building at the intersection of design, software, and systems. Computer Engineering
                  undergraduate. Apple Student Swift Challenge 2026 Winner. Open to internships, freelance,
                  and collaboration.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.22,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4"
                >
                  <Link
                    to="/work"
                    className="btn-primary inline-block min-h-[44px] w-full px-8 py-3 text-center sm:w-auto"
                  >
                    VIEW WORK
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-secondary inline-block min-h-[44px] w-full px-8 py-3 text-center sm:w-auto"
                  >
                    GET IN TOUCH
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center gap-2 text-white/60"
                >
                  <span className="font-clash text-sm tracking-wide">Scroll to explore</span>
                  <span className="animate-bounce text-2xl">↓</span>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section className="section-container">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-12 text-center font-gothic text-3xl md:text-4xl lg:text-5xl"
              >
                Selected Projects
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
                        <DotBox className="h-full overflow-hidden">
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
                        </DotBox>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="section-container">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-12 text-center font-gothic text-3xl md:text-4xl lg:text-5xl"
              >
                Services
              </motion.h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
                {[
                  {
                    title: 'Product & UX Design',
                    description: 'From research and user flows to design systems and prototypes — structured around real user problems and measurable outcomes.'
                  },
                  {
                    title: 'Software Engineering',
                    description: 'Building robust, scalable software across C, C++, and modern web stacks. From low-level logic to application-level architecture — written to perform and built to last.'
                  },
                  {
                    title: 'Hardware & Systems',
                    description: 'Working across the full stack — from hardware-level programming and embedded systems to system design, bridging the gap between silicon and software.'
                  },
                  {
                    title: 'AI & LLM Integration',
                    description: 'Implementing and integrating large language models into real products. Focused on practical AI applications — from prompt engineering to building LLM-powered features that actually ship.'
                  },
                  {
                    title: 'Systems & Technical Thinking',
                    description: 'Scoping complex requirements, identifying trade-offs, and architecting solutions that are built to scale from day one.'
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
                    className="h-full"
                  >
                    <DotBox className="h-full p-6">
                      <h3 className="mb-3 font-gothic text-xl md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="font-clash text-base leading-relaxed text-secondary-white md:text-lg">
                        {item.description}
                      </p>
                    </DotBox>
                  </motion.div>
                ))}
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
                  {"Let's build something together."}
                </h2>
                <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Whether you have a defined brief or just an idea at the back of your mind — bring it. Open to internships, freelance projects, and long-term collaborations.
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
                    GET IN TOUCH
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
