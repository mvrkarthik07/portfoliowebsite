import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById, getNextProject, getPreviousProject } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LazyImage from '../components/LazyImage'
import SEO from '../components/SEO'
import { navigateToSection } from '../utils/navigation'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(projectId)
  const nextProject = getNextProject(projectId)
  const prevProject = getPreviousProject(projectId)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <SEO 
        title={project.title}
        description={project.detailedDescription || project.description}
        image={project.image}
        url={`https://karthikmanda.netlify.app${project.link}`}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 sm:pt-24 md:pt-32 pb-16">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                onClick={() => navigateToSection('projects', navigate)}
                className="inline-flex items-center gap-2 text-sm sm:text-base text-secondary-white hover:text-primary-white transition-colors font-clash group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                <span>Back to Projects</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full mb-8 sm:mb-12"
          >
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full"
            />
          </motion.div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Title and View Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <h1 className="font-gothic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {project.title}
                </h1>
                {(project.figmaLink || project.projectLink) && (
                  <motion.a
                    href={project.figmaLink || project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base whitespace-nowrap"
                  >
                    {project.figmaLink ? 'View Prototype' : 'View Website'}
                  </motion.a>
                )}
              </div>

              {/* Project Type */}
              <h2 className="font-clash text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-secondary-white/80">
                Project Type: {project.type}
              </h2>

              {/* Description */}
              {project.detailedDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h3 className="font-clash text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Description</h3>
                  <p className="font-clash text-base sm:text-lg md:text-xl text-secondary-white leading-relaxed max-w-4xl">
                    {project.detailedDescription}
                  </p>
                </motion.div>
              )}

              {/* Resources Used */}
              {project.resources && project.resources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h3 className="font-clash text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Resources Used:</h3>
                  <ul className="list-disc list-inside space-y-2 font-clash text-base sm:text-lg text-secondary-white">
                    {project.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* App/Website Functions */}
              {project.functions && project.functions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h3 className="font-clash text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                    {project.type === 'Website' ? 'Website Functions:' : 'App Functions:'}
                  </h3>
                  <ol className="list-decimal list-inside space-y-4 sm:space-y-6">
                    {project.functions.map((func, index) => (
                      <li key={index} className="font-clash text-base sm:text-lg text-secondary-white">
                        <h4 className="font-clash font-semibold text-primary-white inline">{func.title}</h4>
                        <p className="mt-2 ml-0 sm:ml-4">{func.description}</p>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )}

              {/* Colors Used */}
              {project.colorsImage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h3 className="font-clash text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Colors Used:</h3>
                  <div className="flex justify-center sm:justify-start">
                    <LazyImage
                      src={project.colorsImage}
                      alt="Color palette"
                      className="w-full sm:w-3/4 md:w-2/3 max-w-2xl"
                    />
                  </div>
                </motion.div>
              )}

              {/* Typeface Used */}
              {project.typefaces && project.typefaces.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h3 className="font-clash text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Typeface Used:</h3>
                  <ul className="space-y-2 font-clash text-base sm:text-lg text-secondary-white">
                    {project.typefaces.map((typeface, index) => (
                      <li key={index}>
                        <h4 className="font-clash font-semibold text-primary-white">{typeface}</h4>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Screen Pictures */}
              {project.screenshots && project.screenshots.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 sm:mb-12"
                >
                  <h2 className="font-clash text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Screen Pictures</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col"
                      >
                        <h3 className="font-clash text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-primary-white">
                          {screenshot.title}
                        </h3>
                        <div className="relative overflow-hidden border border-primary-white/15 hover:border-primary-white/40 transition-all duration-500">
                          <LazyImage
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 will-change-transform"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12"
              >
                {(project.figmaLink || project.projectLink) && (
                  <motion.a
                    href={project.figmaLink || project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center"
                  >
                    {project.figmaLink ? 'View Full Prototype' : 'View Website'}
                  </motion.a>
                )}
                <motion.button
                  onClick={() => navigateToSection('contact', navigate)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
                {prevProject && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:flex-1"
                  >
                    <Link
                      to={prevProject.link}
                      className="btn-secondary w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      <span>←</span>
                      <span className="hidden sm:inline">Previous Project</span>
                      <span className="sm:hidden">Previous</span>
                    </Link>
                  </motion.div>
                )}
                
                <button
                  onClick={() => navigateToSection('projects', navigate)}
                  className="btn-primary w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base text-center"
                >
                  View All Projects
                </button>

                {nextProject && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:flex-1"
                  >
                    <Link
                      to={nextProject.link}
                      className="btn-secondary w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      <span className="hidden sm:inline">Next Project</span>
                      <span className="sm:hidden">Next</span>
                      <span>→</span>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Back to Showcase */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-white/10"
              >
                <button
                  onClick={() => navigateToSection('projects', navigate)}
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-secondary-white hover:text-primary-white transition-colors font-clash bg-transparent border-none cursor-pointer"
                >
                  ← Back to Showcase
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-secondary-white hover:text-primary-white transition-colors font-clash cursor-pointer bg-transparent border-none"
                  aria-label="Back to top"
                >
                  Back To Top ^
                </button>
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ProjectDetails
