import { motion, useReducedMotion } from 'framer-motion'

const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: reduceMotion ? 0.01 : 0.16,
          ease: [0.4, 0, 1, 1],
        },
      }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.26,
        ease: [0.2, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
