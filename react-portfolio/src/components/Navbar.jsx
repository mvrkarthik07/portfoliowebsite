import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/work', label: 'Work' },
  { path: '/experience', label: 'Experience' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/posters', label: 'Posters' },
  { path: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `nav-link${isActive ? ' nav-link--active' : ''}`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`}
    >
      <nav className="site-nav__inner" aria-label="Primary navigation">
        <Link to="/" className="site-nav__brand" aria-label="Karthik Manda home">
          <img src="/Images/logo.png" alt="" className="site-nav__logo" />
        </Link>

        <div className="site-nav__links">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.end} className={linkClass}>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="site-nav__menu-button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="site-nav__drawer">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.end} className={linkClass}>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
