/**
 * Utility function to navigate to a section on the home page
 * If already on home page, scrolls to the section
 * If on another page, navigates to home then scrolls to the section
 * 
 * @param {string} sectionId - The ID of the section to scroll to (without #)
 * @param {Function} navigate - React Router's navigate function (optional, not used but kept for API consistency)
 */
export const navigateToSection = (sectionId, navigate = null) => {
  const offset = 80 // Account for fixed navbar
  
  if (window.location.pathname === '/') {
    // Already on home page, just scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        element.focus({ preventScroll: true })
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 50)
  } else {
    // Not on home page, use window.location to navigate with hash
    // This ensures the hash is in the URL and the Home component's useEffect will handle scrolling
    window.location.href = `/#${sectionId}`
  }
}

