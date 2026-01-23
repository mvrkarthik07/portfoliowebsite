import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { navigateToSection } from '../utils/navigation'

const Projects = () => {
  const projects = getFeaturedProjects()
  const navigate = useNavigate()

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          My Showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white text-center max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed px-4"
        >
          Welcome to my showcase — a curated collection of projects that blend streetwear aesthetics with cutting-edge design. Each piece reflects my focus on clean, futuristic aesthetics, responsive design, and thoughtful user experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 md:mt-16"
        >
          <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-center">
            Explore Projects
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full sm:w-auto"
              >
                <Link
                  to={project.link}
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base block text-center"
                >
                  {project.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 md:mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white/80">
            <span className="font-gothic tracking-widest text-primary-white">KXRTHXK.CREATIVES</span> — the visual playground where I craft culture-inspired posters, high-contrast layouts, and loud design statements. Browse the gallery or hit me up for custom drops. Visit my Instagram page for more.
          </p>
          <a href="https://www.instagram.com/kxrthxk.creatives/" className="btn-secondary px-5 py-3 text-sm sm:text-base">
            Visit Instagram Page
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-12 font-clash text-secondary-white/70 italic"
        >
          More Projects Coming Soon...
        </motion.p>
      </div>
    </section>
  )
}

export default Projects

