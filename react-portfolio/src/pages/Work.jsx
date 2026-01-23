import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getProductProjects, getTechnicalProjects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'

const Work = () => {
  const productProjects = getProductProjects()
  const technicalProjects = getTechnicalProjects()
  const [selectedTechnical, setSelectedTechnical] = useState(null)
  const modalRef = useRef(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedTechnical) {
        setSelectedTechnical(null)
      }
    }

    if (selectedTechnical) {
      document.addEventListener('keydown', handleEscape)
      // Focus trap: focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus()
      }
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedTechnical])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <>
      <SEO 
        title="Work"
        description="Product & UX projects and technical engineering work by Karthik Manda. Design thinking and engineering depth."
      />
      <div className="min-h-screen bg-primary-black">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <h1 className="font-gothic text-4xl md:text-5xl lg:text-6xl mb-4">
                Work
              </h1>
              <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white max-w-3xl">
                Product & UX projects and technical engineering work. Design thinking and engineering depth.
              </p>
            </motion.div>

            {/* SECTION 1: Product & UX Projects */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-20 md:mb-24"
            >
              <h2 className="font-gothic text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12">
                Product & UX Work
              </h2>
              
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                {productProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                    className="group"
                  >
                    <Link
                      to={`/work/${project.id}`}
                      className="block h-full"
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
                        <div className="p-4 sm:p-5 md:p-6">
                          <h3 className="font-gothic text-lg sm:text-xl md:text-2xl mb-2 break-words">
                            {project.title}
                          </h3>
                          <p className="font-clash text-xs sm:text-sm md:text-base text-secondary-white mb-3 sm:mb-4 line-clamp-2 break-words">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="font-clash text-xs sm:text-xs md:text-sm text-secondary-white/80 px-2 sm:px-3 py-1 border border-primary-white/20">
                              {project.category}
                            </span>
                            {project.tags && project.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="font-clash text-xs sm:text-xs md:text-sm text-secondary-white/60 px-2 sm:px-3 py-1 border border-primary-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="font-clash text-xs sm:text-sm text-primary-white/80">
                            View Case Study →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* SECTION 2: Technical Projects */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border-t border-primary-white/10 pt-12 md:pt-16"
            >
              <h2 className="font-gothic text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-12 text-secondary-white/90">
                Technical Projects
              </h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-start"
              >
                {technicalProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="neon-border bg-primary-white/3 hover:bg-primary-white/5 transition-all duration-300 futuristic-glow h-fit self-start cursor-pointer focus-within:ring-2 focus-within:ring-primary-white/50"
                    onClick={() => setSelectedTechnical(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedTechnical(project)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${project.title}`}
                  >
                    <div className="p-4 sm:p-5 md:p-6 w-full">
                      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <h3 className="font-gothic text-base sm:text-lg md:text-xl break-words flex-1">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="font-clash text-xs sm:text-sm md:text-base text-secondary-white mb-3 sm:mb-4 break-words">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className="font-clash text-xs sm:text-sm text-secondary-white/70">
                          View Details →
                        </span>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-clash text-xs sm:text-sm text-secondary-white/70 hover:text-primary-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub →
                          </a>
                        )}
                        {project.projectLink && (
                          <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-clash text-xs sm:text-sm text-secondary-white/70 hover:text-primary-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </main>
        <Footer />
      </div>

      {/* Technical Project Modal Overlay */}
      <AnimatePresence>
        {selectedTechnical && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary-black/90 backdrop-blur-sm z-50"
              onClick={() => setSelectedTechnical(null)}
              aria-hidden="true"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-12 z-50 overflow-y-auto"
              onClick={() => setSelectedTechnical(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="min-h-full flex items-center justify-center p-2 sm:p-4">
                <div 
                  ref={modalRef}
                  tabIndex={-1}
                  className="w-full max-w-6xl neon-border bg-primary-black p-4 sm:p-6 md:p-8 lg:p-10 futuristic-glow relative outline-none my-4 sm:my-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedTechnical(null)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 font-clash text-xl sm:text-2xl md:text-3xl text-secondary-white/70 hover:text-primary-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary-white/50 rounded w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    ×
                  </button>

                  {/* Modal Content */}
                  <div className="space-y-4 sm:space-y-6 md:space-y-8 pr-6 sm:pr-8 md:pr-12">
                    <div>
                      <h2 id="modal-title" className="font-gothic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 break-words">
                        {selectedTechnical.title}
                      </h2>
                      <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white/80 break-words">
                        {selectedTechnical.type}
                      </p>
                    </div>

                    {/* Overview - Custom section for ParkLah! */}
                    {selectedTechnical.overview && (
                      <div>
                        <h3 className="font-gothic text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Overview</h3>
                        <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white leading-relaxed break-words">
                          {selectedTechnical.overview}
                        </p>
                      </div>
                    )}

                    {/* Core Functionality - Custom section for ParkLah! */}
                    {selectedTechnical.coreFunctionality && Array.isArray(selectedTechnical.coreFunctionality) && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Core Functionality</h3>
                        <ul className="list-none space-y-3">
                          {selectedTechnical.coreFunctionality.map((item, index) => (
                            <li key={index} className="font-clash text-base md:text-lg text-secondary-white flex items-start">
                              <span className="mr-3 text-secondary-white/40">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technical Architecture - Custom section for ParkLah! */}
                    {selectedTechnical.technicalArchitecture && typeof selectedTechnical.technicalArchitecture === 'object' && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Technical Architecture</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-clash text-base font-semibold text-primary-white mb-2">Frontend:</h4>
                            <p className="font-clash text-base md:text-lg text-secondary-white">{selectedTechnical.technicalArchitecture.frontend}</p>
                          </div>
                          <div>
                            <h4 className="font-clash text-base font-semibold text-primary-white mb-2">Backend:</h4>
                            <p className="font-clash text-base md:text-lg text-secondary-white">{selectedTechnical.technicalArchitecture.backend}</p>
                          </div>
                          <div>
                            <h4 className="font-clash text-base font-semibold text-primary-white mb-2">Deployment:</h4>
                            <p className="font-clash text-base md:text-lg text-secondary-white">{selectedTechnical.technicalArchitecture.deployment}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Data & Integrations - Custom section for ParkLah! */}
                    {selectedTechnical.dataIntegrations && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Data & Integrations</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed">
                          {selectedTechnical.dataIntegrations}
                        </p>
                      </div>
                    )}

                    {/* Security & Authentication - Custom section for ParkLah! */}
                    {selectedTechnical.securityAuthentication && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Security & Authentication</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed">
                          {selectedTechnical.securityAuthentication}
                        </p>
                      </div>
                    )}

                    {/* Key Technical Challenges - Custom section for ParkLah! */}
                    {selectedTechnical.keyTechnicalChallenges && Array.isArray(selectedTechnical.keyTechnicalChallenges) && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Key Technical Challenges</h3>
                        <ul className="list-none space-y-3">
                          {selectedTechnical.keyTechnicalChallenges.map((challenge, index) => (
                            <li key={index} className="font-clash text-base md:text-lg text-secondary-white flex items-start">
                              <span className="mr-3 text-secondary-white/40">—</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Learnings - Custom section for ParkLah! */}
                    {selectedTechnical.learnings && Array.isArray(selectedTechnical.learnings) && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Learnings</h3>
                        <ul className="list-none space-y-3">
                          {selectedTechnical.learnings.map((learning, index) => (
                            <li key={index} className="font-clash text-base md:text-lg text-secondary-white flex items-start">
                              <span className="mr-3 text-secondary-white/40">—</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* My Contribution - Custom section for CLI Java system */}
                    {selectedTechnical.myContribution && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">My Contribution</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed">
                          {selectedTechnical.myContribution}
                        </p>
                      </div>
                    )}

                    {/* System Structure - Custom section for CLI Java system */}
                    {selectedTechnical.systemStructure && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">System Structure</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed">
                          {selectedTechnical.systemStructure}
                        </p>
                      </div>
                    )}

                    {/* Technical Focus - Custom section for CLI Java system */}
                    {selectedTechnical.technicalFocus && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Technical Focus</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white leading-relaxed">
                          {selectedTechnical.technicalFocus}
                        </p>
                      </div>
                    )}

                    {/* Technical Challenge - Fallback for other technical projects */}
                    {!selectedTechnical.overview && !selectedTechnical.myContribution && selectedTechnical.technicalChallenge && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Technical Challenge</h3>
                        <p className="font-clash text-base md:text-lg text-secondary-white">
                          {selectedTechnical.technicalChallenge}
                        </p>
                      </div>
                    )}
                    
                    {selectedTechnical.technologies && selectedTechnical.technologies.length > 0 && (
                      <div>
                        <h3 className="font-gothic text-xl md:text-2xl mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTechnical.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="font-clash text-sm md:text-base px-3 py-1 border border-primary-white/20 text-secondary-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-primary-white/10">
                      {selectedTechnical.githubLink && (
                        <a
                          href={selectedTechnical.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-4 sm:px-6 py-3 text-sm md:text-base text-center"
                        >
                          GitHub →
                        </a>
                      )}
                      {selectedTechnical.projectLink && (
                        <a
                          href={selectedTechnical.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary px-4 sm:px-6 py-3 text-sm md:text-base text-center"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Work
