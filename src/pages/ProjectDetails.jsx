import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById, getNextProject, getPreviousProject } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LazyImage from '../components/LazyImage'
import SEO from '../components/SEO'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(projectId)
  const nextProject = getNextProject(projectId)
  const prevProject = getPreviousProject(projectId)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  // Redirect technical projects back to work page (they use inline expansion)
  if (project.projectType === 'technical') {
    return <Navigate to="/work" replace />
  }

  // Map existing data to new structure
  const overview = project.detailedDescription || project.description
  const problem = project.problemStatement || project.description
  const myRole = project.role || project.category || 'UI/UX + Frontend'
  const process = {
    research: project.resources || [],
    wireframes: project.screenshots?.filter(s => s.title.toLowerCase().includes('wireframe') || s.title.toLowerCase().includes('sketch')) || [],
    iterations: project.functions || []
  }
  const solution = {
    screens: project.screenshots || [],
    features: project.functions || [],
    description: project.detailedDescription || project.description
  }

  return (
    <>
      <SEO 
        title={project.title}
        description={project.detailedDescription || project.description}
        image={project.image}
        url={`https://karthikmanda.netlify.app/work/${project.id}`}
      />
      <div className="min-h-screen bg-primary-black">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm md:text-base text-secondary-white hover:text-primary-white transition-colors font-clash group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                <span>Back to Work</span>
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full"
              />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h1 className="font-gothic text-4xl md:text-5xl lg:text-6xl mb-4">
                {project.title}
              </h1>
              <p className="font-clash text-lg md:text-xl text-secondary-white/80">
                {project.type}
              </p>
            </motion.div>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <h2 className="font-gothic text-2xl md:text-3xl mb-6">Overview</h2>
              <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                {overview}
              </p>
            </motion.section>

            {/* Key Challenge - Custom section for SeniorConnect */}
            {project.keyChallenge && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Key Challenge</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.keyChallenge}
                </p>
              </motion.section>
            )}

            {/* Problem */}
            {!project.keyChallenge && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Problem</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {problem}
                </p>
              </motion.section>
            )}

            {/* Problem - Show after Key Challenge for SeniorConnect */}
            {project.keyChallenge && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Problem</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {problem}
                </p>
              </motion.section>
            )}

            {/* Problem - Show after Key Challenge for SeniorConnect */}
            {project.keyChallenge && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Problem</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {problem}
                </p>
              </motion.section>
            )}

            {/* My Role */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: project.keyChallenge ? 0.25 : 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <h2 className="font-gothic text-2xl md:text-3xl mb-6">My Role</h2>
              <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                {myRole}
              </p>
            </motion.section>

            {/* System & Simulation Logic - Custom section for SCDF */}
            {project.systemLogic && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">System & Simulation Logic</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.systemLogic}
                </p>
              </motion.section>
            )}

            {/* Process - Only show if no custom sections */}
            {!project.systemLogic && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Process</h2>
              
              {process.research.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-clash text-xl md:text-2xl mb-4 text-primary-white">Research & Tools</h3>
                  <ul className="list-disc list-inside space-y-2 font-clash text-base md:text-lg text-secondary-white">
                    {process.research.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {process.iterations.length > 0 && (
                <div>
                  <h3 className="font-clash text-xl md:text-2xl mb-4 text-primary-white">Key Features & Decisions</h3>
                  <ol className="list-decimal list-inside space-y-4">
                    {process.iterations.map((item, index) => (
                      <li key={index} className="font-clash text-base md:text-lg text-secondary-white">
                        <span className="font-semibold text-primary-white">{item.title}</span>
                        <span className="ml-2">{item.description}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              </motion.section>
            )}

            {/* Dashboard Features - Custom section for SCDF */}
            {project.dashboardFeatures && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: project.systemLogic ? 0.3 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Dashboard Features</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl mb-6">
                  {project.dashboardFeatures}
                </p>
                {solution.features.length > 0 && (
                  <div className="space-y-4">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="border-l-2 border-primary-white/20 pl-4">
                        <h4 className="font-clash text-lg md:text-xl mb-2 text-primary-white">{feature.title}</h4>
                        <p className="font-clash text-base md:text-lg text-secondary-white">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {/* NParks Integration Concept - Custom section for SCDF */}
            {project.nparksIntegration && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: project.systemLogic ? 0.35 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">NParks Integration Concept</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.nparksIntegration}
                </p>
              </motion.section>
            )}

            {/* Core Features - Custom section for SeniorConnect */}
            {project.keyChallenge && !project.dashboardFeatures && solution.features.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Core Features</h2>
                <div className="space-y-4">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="border-l-2 border-primary-white/20 pl-4">
                      <h4 className="font-clash text-lg md:text-xl mb-2 text-primary-white">{feature.title}</h4>
                      <p className="font-clash text-base md:text-lg text-secondary-white">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Design Rationale - Custom section for SeniorConnect */}
            {project.designRationale && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: project.keyChallenge ? 0.35 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Design Rationale</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.designRationale}
                </p>
              </motion.section>
            )}

            {/* Feasibility & Public-Sector Alignment - Custom section for SeniorConnect */}
            {project.feasibilityAlignment && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: project.keyChallenge ? 0.4 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Feasibility & Public-Sector Alignment</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.feasibilityAlignment}
                </p>
              </motion.section>
            )}

            {/* Solution - Only show if no custom sections */}
            {!project.systemLogic && !project.keyChallenge && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Solution</h2>
              
              {solution.screens.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-clash text-xl md:text-2xl mb-6 text-primary-white">Final Screens</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solution.screens.map((screenshot, index) => {
                      // Determine frame type based on project type and screenshot title
                      const projectTypeLower = project.type?.toLowerCase() || ''
                      const projectTitleLower = project.title?.toLowerCase() || ''
                      const screenshotTitleLower = screenshot.title?.toLowerCase() || ''
                      
                      const isMobileApp = projectTypeLower.includes('app') || 
                                         projectTitleLower.includes('nparks') ||
                                         screenshotTitleLower.includes('mobile') ||
                                         screenshotTitleLower.includes('phone') ||
                                         screenshotTitleLower.includes('iphone')
                      
                      const isDashboard = projectTypeLower.includes('dashboard') ||
                                         projectTitleLower.includes('dashboard') ||
                                         screenshotTitleLower.includes('dashboard')
                      
                      const frameClass = isMobileApp ? 'iphone-frame' : isDashboard ? 'rectangle-frame' : ''
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="flex flex-col"
                        >
                          <h4 className="font-clash text-base md:text-lg mb-3 text-primary-white">
                            {screenshot.title}
                          </h4>
                          <div className={`relative transition-all duration-500 ${frameClass || 'overflow-hidden border border-primary-white/15 hover:border-primary-white/40'}`}>
                            <LazyImage
                              src={screenshot.image}
                              alt={screenshot.title}
                              className="w-full transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )}

              {project.colorsImage && (
                <div className="mb-8">
                  <h3 className="font-clash text-xl md:text-2xl mb-4 text-primary-white">Design System</h3>
                  <div className="flex justify-center">
                    <LazyImage
                      src={project.colorsImage}
                      alt="Color palette"
                      className="w-full max-w-2xl"
                    />
                  </div>
                </div>
              )}
              </motion.section>
            )}

            {/* Prototype & Visuals - Custom section for SCDF and SeniorConnect */}
            {(project.systemLogic || project.keyChallenge) && solution.screens.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: project.systemLogic ? 0.4 : project.keyChallenge ? 0.4 : 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="mb-16"
              >
                <h2 className="font-gothic text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Prototype & Visuals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {solution.screens.map((screenshot, index) => {
                    const projectTypeLower = project.type?.toLowerCase() || ''
                    const projectTitleLower = project.title?.toLowerCase() || ''
                    const screenshotTitleLower = screenshot.title?.toLowerCase() || ''
                    
                    const isMobileApp = projectTypeLower.includes('app') || 
                                       projectTitleLower.includes('nparks') ||
                                       screenshotTitleLower.includes('mobile') ||
                                       screenshotTitleLower.includes('phone') ||
                                       screenshotTitleLower.includes('iphone')
                    
                    const isDashboard = projectTypeLower.includes('dashboard') ||
                                       projectTitleLower.includes('dashboard') ||
                                       screenshotTitleLower.includes('dashboard')
                    
                    const frameClass = isMobileApp ? 'iphone-frame' : isDashboard ? 'rectangle-frame' : ''
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex flex-col"
                      >
                        <h4 className="font-clash text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-primary-white break-words">
                          {screenshot.title}
                        </h4>
                        <div className={`relative transition-all duration-500 ${frameClass || 'overflow-hidden border border-primary-white/15 hover:border-primary-white/40'}`}>
                          <LazyImage
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.section>
            )}

            {/* Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: project.systemLogic ? 0.45 : project.keyChallenge ? 0.45 : 0.35, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="mb-16"
            >
              <h2 className="font-gothic text-2xl md:text-3xl mb-6">Learnings</h2>
              {project.learnings && Array.isArray(project.learnings) ? (
                <ul className="list-none space-y-4 font-clash text-base md:text-lg lg:text-xl text-secondary-white max-w-4xl">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-4 text-secondary-white/40">—</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  This project demonstrated the importance of user research and iterative design. The solution addresses core user needs through intuitive navigation and clear information architecture.
                </p>
              )}
            </motion.section>

            {/* Status & Scope - Custom section for SCDF and SeniorConnect */}
            {project.statusScope && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: project.systemLogic ? 0.5 : project.keyChallenge ? 0.5 : 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="mb-16"
              >
                <h2 className="font-gothic text-2xl md:text-3xl mb-6">Status & Scope</h2>
                <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed max-w-4xl">
                  {project.statusScope}
                </p>
              </motion.section>
            )}

            {/* Links */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <h2 className="font-gothic text-2xl md:text-3xl mb-6">Links</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {project.figmaLink && (
                  <motion.a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
                  >
                    View Figma Prototype
                  </motion.a>
                )}
                {project.projectLink && (
                  <motion.a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
                  >
                    View Live Demo
                  </motion.a>
                )}
              </div>
            </motion.section>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-white/10"
            >
              {prevProject && (
                <Link
                  to={`/work/${prevProject.id}`}
                  className="btn-secondary px-4 md:px-6 py-3 md:py-4 text-sm md:text-base flex items-center gap-2"
                >
                  <span>←</span>
                  <span>Previous</span>
                </Link>
              )}
              <Link
                to="/work"
                className="btn-primary px-4 md:px-6 py-3 md:py-4 text-sm md:text-base"
              >
                View All Work
              </Link>
              {nextProject && (
                <Link
                  to={`/work/${nextProject.id}`}
                  className="btn-secondary px-4 md:px-6 py-3 md:py-4 text-sm md:text-base flex items-center gap-2"
                >
                  <span>Next</span>
                  <span>→</span>
                </Link>
              )}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ProjectDetails
