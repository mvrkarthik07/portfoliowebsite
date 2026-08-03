import { useEffect, useState } from 'react'

const BrandedLoader = ({ label = 'Loading', fullscreen = false }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 300)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={fullscreen ? 'brand-loader brand-loader--fullscreen' : 'brand-loader'}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="brand-loader__track">
        <span />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default BrandedLoader
