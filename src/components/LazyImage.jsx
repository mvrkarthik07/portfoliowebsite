import { useState, useEffect, useRef } from 'react'

const LazyImage = ({ src, alt, className = '', priority = false, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const imgRef = useRef(null)

  useEffect(() => {
    if (priority) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    )

    const currentRef = imgRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [priority])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isLoading && shouldLoad && (
        <div className="skeleton absolute inset-0" aria-hidden />
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-surface-raised">
          <div className="text-center p-4">
            <p className="text-text-secondary text-sm">Image unavailable</p>
          </div>
        </div>
      ) : shouldLoad ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...props}
        />
      ) : (
        <div className="skeleton aspect-square w-full" />
      )}
    </div>
  )
}

export default LazyImage

