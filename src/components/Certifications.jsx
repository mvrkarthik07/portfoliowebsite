import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'

const Certifications = () => {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="certifications" className="section-container">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                {cert.title}
              </h3>
              <p className="font-clash text-sm sm:text-base text-secondary-white/80 mb-2">
                <strong>Issued By:</strong> {cert.issuer}
              </p>
              <p className="font-clash text-sm sm:text-base text-secondary-white/80 mb-3 sm:mb-4">
                <strong>Date Issued:</strong> {cert.date}
              </p>
              <p className="font-clash text-sm md:text-base text-secondary-white mb-4 leading-relaxed">
                {cert.description}
              </p>
                <div className="mb-4">
                <p className="font-clash text-sm sm:text-base mb-2"><strong>Skills Obtained:</strong></p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 border border-primary-white/25 bg-primary-white/3 text-xs sm:text-sm font-clash transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-primary-white hover:text-primary-black hover:border-primary-white hover:-translate-y-1 hover:scale-105 will-change-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center text-center"
              >
                Show Credential
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

