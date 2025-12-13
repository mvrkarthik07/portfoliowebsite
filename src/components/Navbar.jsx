import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home', type: 'route' },
    { path: '/#about', label: 'About Me', type: 'hash' },
    { path: '/#projects', label: 'My Showcase', type: 'hash' },
    { path: '/posters', label: 'Posters', type: 'route' },
    { path: '/Images/ResumeKarthik_V2.pdf', label: 'Resume', external: true },
    { path: '/#contact', label: 'Contact Me', type: 'hash' },
  ]

  const handleHomeClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
    setIsMenuOpen(false)
  }

  const handleHashClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = '/'
      setTimeout(() => {
        const element = document.getElementById(hash.substring(2))
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(hash.substring(2))
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        element.focus({ preventScroll: true })
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      } border-b border-primary-white/10`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-gothic text-xl md:text-2xl font-semibold text-primary-white hover:text-shadow-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-white/50 focus:ring-offset-2 focus:ring-offset-primary-black"
          aria-label="Karthik Manda - Home"
        >
          KARTHIK MANDA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                  aria-label={`${link.label} - Opens in new tab`}
                >
                  {link.label}
                </a>
              )
            }
            if (link.type === 'hash') {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleHashClick(e, link.path)}
                  className="btn-secondary focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              )
            }
            if (link.path === '/') {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={handleHomeClick}
                  className="btn-secondary focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                className="btn-secondary focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 border border-primary-white/30 hover:border-primary-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-white/50"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-primary-white block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-primary-white block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-primary-white block transition-all"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-black border-t border-primary-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                      aria-label={`${link.label} - Opens in new tab`}
                    >
                      {link.label}
                    </a>
                  )
                }
                if (link.type === 'hash') {
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      onClick={(e) => handleHashClick(e, link.path)}
                      className="btn-secondary text-center focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  )
                }
                if (link.path === '/') {
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      onClick={handleHomeClick}
                      className="btn-secondary text-center focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="btn-secondary text-center focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

