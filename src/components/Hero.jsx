import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Welcome to my digital space — where code meets creativity, design meets innovation, and streetwear aesthetics collide with futuristic tech."
  
  useEffect(() => {
    let index = 0
    const typeWriter = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
        setTimeout(typeWriter, 50)
      }
    }
    
    const timer = setTimeout(typeWriter, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="section-container min-h-[100svh]">
      <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <h1 className="font-gothic text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-wider leading-tight text-shadow-glow px-4">
            KARTHIK MANDA
          </h1>
          <h2 className="font-clash text-base sm:text-xl md:text-2xl lg:text-3xl text-secondary-white tracking-wider px-4 leading-tight">
            CODER • DESIGNER • ENGINEER
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto px-4"
        >
          <p className="font-clash text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-white leading-relaxed">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12"
        >
          <a
            href="#about"
            className="btn-primary inline-block shadow-[0_12px_35px_rgba(255,255,255,0.22)]"
          >
            Explore My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col items-center gap-2 text-secondary-white/70"
        >
          <span className="font-clash text-sm tracking-wide">Scroll to explore</span>
          <span className="animate-bounce text-2xl">↓</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

