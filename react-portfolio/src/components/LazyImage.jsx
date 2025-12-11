import { useState } from 'react'
import { motion } from 'framer-motion'

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-accent-gray animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-primary-white/20 border-t-primary-white rounded-full animate-spin" />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 bg-accent-gray flex items-center justify-center">
          <div className="text-center p-4">
            <p className="text-secondary-white/50 text-sm">Image unavailable</p>
          </div>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}

export default LazyImage

