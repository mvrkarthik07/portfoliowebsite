import { motion } from 'framer-motion'
import { technicalSkills, softSkills } from '../data/skills'
import LazyImage from './LazyImage'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="skills" className="section-container">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          Skills
        </motion.h2>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h3 className="section-subheading">Technical Skills</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] p-4 sm:p-6 group cursor-pointer"
                aria-label={skill.name}
              >
                {skill.icon ? (
                  <>
                    <LazyImage
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 md:w-16 md:h-16 mb-3 brightness-0 invert transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-125 group-hover:rotate-6 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] will-change-transform"
                    />
                    <figcaption className="font-clash text-sm md:text-base font-medium">
                      {skill.name}
                    </figcaption>
                  </>
                ) : (
                  <span className="font-clash text-sm md:text-base font-medium text-center">
                    {skill.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 md:mt-20"
        >
          <h3 className="section-subheading">Soft Skills</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center"
              >
                <span className="font-clash text-base md:text-lg font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 font-clash text-secondary-white/70 italic"
          >
            And Many More to Come...
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

