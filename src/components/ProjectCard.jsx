import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        to={project.link}
        className="block group focus:outline-none focus:ring-2 focus:ring-primary-white/50 focus:ring-offset-2 focus:ring-offset-primary-black"
        aria-label={`View ${project.title} project - ${project.type}`}
      >
        <div className="card overflow-hidden">
          <div className="relative overflow-hidden">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08] will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
          </div>
          <div className="p-4 md:p-6 bg-primary-black/85 border-t border-primary-white/10">
            <span className="block text-xs md:text-sm uppercase tracking-wider text-secondary-white/70 mb-2">
              {project.type}
            </span>
            <h3 className="font-gothic text-xl md:text-2xl font-semibold">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard

