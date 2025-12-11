import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-primary-white/10 border border-primary-white/30 text-primary-white flex items-center justify-center font-gothic text-lg sm:text-xl hover:bg-primary-white hover:text-primary-black transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-white/50 will-change-transform"
          aria-label="Scroll to top"
        >
          ^
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
