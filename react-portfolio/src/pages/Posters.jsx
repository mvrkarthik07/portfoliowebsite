import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { posters } from '../data/posters'
import LazyImage from '../components/LazyImage'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
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
        title="KXRTHXK.CREATIVES"
        description="KXRTHXK.CREATIVES - A collection of digital art and poster designs by Karthik Manda. Streetwear aesthetics meet futuristic design. Follow @kxrthxk.creatives on Instagram."
      />
      <div className="min-h-screen bg-primary-black">
        {/* Brand Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-50 bg-primary-black/95 backdrop-blur-sm border-b border-primary-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">
              {/* Logo and Brand Name */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                <Link
                  to="/"
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
                >
                  <img
                    src="/Images/SSIGNATURE.png"
                    alt="KXRTHXK.CREATIVES Logo"
                    className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <h1 className="font-gothic text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider truncate">
                      KXRTHXK.CREATIVES
                    </h1>
                    <p className="font-clash text-xs sm:text-sm text-secondary-white/70 hidden sm:block">
                      Digital Art • Streetwear Design
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation and Instagram */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto justify-end">
                {/* Navigation Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    to="/"
                    className="btn-secondary text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 whitespace-nowrap"
                  >
                    Home
                  </Link>
                  <Link
                    to="/work"
                    className="btn-secondary text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 whitespace-nowrap"
                  >
                    Work
                  </Link>
                </div>
                
                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/kxrthxk.creatives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-primary-white/30 hover:border-primary-white bg-primary-white/5 hover:bg-primary-white/10 transition-all duration-300 group whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-white flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-clash text-xs sm:text-sm md:text-base text-primary-white group-hover:text-shadow-glow hidden sm:inline">
                    @kxrthxk.creatives
                  </span>
                  <span className="font-clash text-xs sm:text-sm md:text-base text-primary-white group-hover:text-shadow-glow sm:hidden">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 md:px-8">
          {/* Brand Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-7xl mx-auto mb-12 md:mb-16 text-center"
          >
            <h2 className="font-gothic text-2xl md:text-3xl lg:text-4xl mb-4 tracking-wider">
              VISUAL CREATIVES
            </h2>
            <p className="font-clash text-base md:text-lg lg:text-xl text-secondary-white max-w-3xl mx-auto leading-relaxed">
              Streetwear aesthetics meet futuristic design. A collection of digital art, posters, and creative exploration.
            </p>
          </motion.div>

          {/* Gallery */}
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
                        priority={index < 8}
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

        {/* Brand Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border-t border-primary-white/10 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/Images/SSIGNATURE.png"
                  alt="KXRTHXK.CREATIVES"
                  className="h-6 sm:h-8 md:h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                <div>
                  <p className="font-gothic text-xs sm:text-sm md:text-base tracking-wider">
                    KXRTHXK.CREATIVES
                  </p>
                  <p className="font-clash text-xs sm:text-sm text-secondary-white/70">
                    &copy; 2025 All Rights Reserved
                  </p>
                </div>
              </div>
              
              <a
                href="https://www.instagram.com/kxrthxk.creatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 border border-primary-white/30 hover:border-primary-white bg-primary-white/5 hover:bg-primary-white/10 transition-all duration-300 whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary-white flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-clash text-xs sm:text-sm md:text-base text-primary-white">
                  <span className="hidden sm:inline">Follow </span>@kxrthxk.creatives
                </span>
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  )
}

export default Posters
