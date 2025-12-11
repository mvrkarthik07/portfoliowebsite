import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-primary-white/10 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 text-center"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-clash text-secondary-white/80 text-xs sm:text-sm md:text-base mb-2">
          &copy; 2025 Karthik Manda. All Rights Reserved.
        </p>
        <p className="font-clash text-secondary-white/60 text-xs sm:text-sm">
          This website was built using React, Vite, TailwindCSS, and Framer Motion - designed and coded by myself from scratch.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

