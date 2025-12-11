import { useEffect, useRef } from 'react'

/**
 * Hook to manage focus for accessibility
 * Automatically focuses the main content when navigating
 */
export const useFocusManagement = (shouldFocus = false) => {
  const mainContentRef = useRef(null)

  useEffect(() => {
    if (shouldFocus && mainContentRef.current) {
      mainContentRef.current.focus()
    }
  }, [shouldFocus])

  return mainContentRef
}

