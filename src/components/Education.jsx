import { motion } from 'framer-motion'
import { education } from '../data/education'

const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="max-w-5xl mx-auto w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          Education
        </motion.h2>

        <div className="relative pl-6 sm:pl-8 md:pl-12">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-white/25 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-1rem] sm:left-[-1.25rem] md:left-[-1.5rem] top-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary-white rounded-full border-2 sm:border-4 border-primary-black shadow-[0_0_30px_rgba(255,255,255,0.6)]" />

              <div className="ml-6 sm:ml-8 md:ml-12">
                <h3 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  {edu.institution}
                </h3>
                <div className="space-y-2 font-clash text-sm sm:text-base md:text-lg text-secondary-white">
                  <p className="font-medium text-secondary-white/80">{edu.period}</p>
                  <p>{edu.degree}</p>
                  {edu.grade && (
                    <p className="font-medium text-secondary-white/90">Grade Attained: {edu.grade}</p>
                  )}
                  <div>
                    <p className="font-medium mb-2">Relevant Coursework:</p>
                    <p>{edu.coursework}</p>
                  </div>
                  {edu.activities && (
                    <div>
                      <p className="font-medium mb-2">Co-curricular Activities:</p>
                      <ul className="list-none space-y-1.5">
                        {edu.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="mr-2">→</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

