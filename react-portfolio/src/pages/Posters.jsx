import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { posters } from '../data/posters'
import { Link, useNavigate } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import SEO from '../components/SEO'
import { navigateToSection } from '../utils/navigation'

const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState(null)
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <>
      <SEO 
        title="Posters"
        description="KXRTHXK.CREATIVES - A collection of digital art and poster designs by Karthik Manda. Streetwear aesthetics meet futuristic design."
      />
      <div className="min-h-screen bg-primary-black">
        {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-black border-b border-primary-white/10 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <nav className="flex gap-2 sm:gap-4 order-2 sm:order-1 w-full sm:w-auto justify-center sm:justify-start">
            <Link to="/" className="btn-secondary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">
              Home
            </Link>
            <button
              onClick={() => navigateToSection('projects', navigate)}
              className="btn-secondary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
            >
              Showcase
            </button>
          </nav>

          <div className="flex flex-col items-center gap-2 sm:gap-4 order-1 sm:order-2 flex-1">
            <h1 className="font-gothic text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wider text-center">
              KXRTHXK.CREATIVES
            </h1>
            <a
              href="https://www.instagram.com/kxrthxk.creatives/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Visit KXRTHXK.CREATIVES on Instagram"
            >
              <img
                src="/Images/SSIGNATURE.png"
                alt="KXRTHXK.CREATIVES Signature"
                className="h-10 sm:h-12 md:h-16 w-auto brightness-0 invert"
              />
            </a>
          </div>

          <div className="order-3 w-full sm:w-auto">
            <button
              onClick={() => navigateToSection('contact', navigate)}
              className="btn-secondary btn-no-sheen px-5 py-3 text-sm sm:text-base w-full sm:w-auto text-center"
              aria-label="Go to contact section"
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-40 sm:pt-44 md:pt-48 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 md:gap-8 [column-fill:_balance]"
          >
            {posters.map((poster, index) => {
              const key = `${poster.title || 'poster'}-${index}`

              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="group cursor-pointer break-inside-avoid mb-4 sm:mb-6 md:mb-8"
                  onClick={() => setSelectedPoster(index)}
                >
                  <div className="relative overflow-hidden border border-primary-white/15 bg-primary-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-primary-white/35 hover:bg-primary-white/10 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(255,255,255,0.2)] will-change-transform">
                    <LazyImage
                      src={poster.image}
                      alt={poster.title || 'Poster'}
                      className="w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03] will-change-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-black/90 via-primary-black/50 to-transparent p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <h3 className="font-gothic text-base sm:text-lg md:text-xl uppercase tracking-wider mb-1 sm:mb-2">
                        {poster.title || 'Poster'}
                      </h3>
                      {poster.description && (
                        <p className="font-clash text-xs sm:text-sm md:text-base text-secondary-white line-clamp-2 sm:line-clamp-3">
                          {poster.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 bg-primary-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl w-full relative mx-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-primary-white/30 hover:border-primary-white transition-colors text-xl sm:text-2xl z-10 bg-primary-black/50"
                aria-label="Close lightbox"
              >
                ×
              </button>
              <div className="w-full flex items-center justify-center bg-primary-black/50 p-4">
                <img
                  src={posters[selectedPoster].image}
                  alt={posters[selectedPoster].title}
                  className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                  style={{ maxHeight: '60vh', maxWidth: '100%' }}
                />
              </div>
              <div className="bg-primary-black/90 p-4 sm:p-6 border-t border-primary-white/10">
                <h3 className="font-gothic text-xl sm:text-2xl md:text-3xl uppercase tracking-wider mb-2 sm:mb-3">
                  {posters[selectedPoster].title}
                </h3>
                <p className="font-clash text-sm sm:text-base md:text-lg text-secondary-white">
                  {posters[selectedPoster].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-primary-white/10 py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-center">
        <p className="font-clash text-secondary-white/80 text-xs sm:text-sm md:text-base mb-2">
          &copy; 2025 KXRTHXK.CREATIVES. All Rights Reserved.
        </p>
        <p className="font-clash text-secondary-white/60 text-xs sm:text-sm">
          Streetwear Design • Futuristic Aesthetics • Digital Art
        </p>
      </footer>
    </div>
    </>
  )
}

export default Posters

