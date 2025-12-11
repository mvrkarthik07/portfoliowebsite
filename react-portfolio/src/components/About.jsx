import { motion } from 'framer-motion'
import { aboutText } from '../data/contact'
import LazyImage from './LazyImage'

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 w-full"
          >
            <p className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed whitespace-pre-line">
              {aboutText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <LazyImage
              src="/Images/PP.jpg"
              alt="Karthik Manda - Portrait photo"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto border-2 border-primary-white/15 hover:border-primary-white/40 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] will-change-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

