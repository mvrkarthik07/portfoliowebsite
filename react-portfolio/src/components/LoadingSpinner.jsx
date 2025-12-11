const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <>
      <style>{`
        @keyframes spin-loading {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner-element {
          animation: spin-loading 1s linear infinite !important;
          transform-origin: center !important;
        }
      `}</style>
      <div className="flex items-center justify-center" role="status" aria-label="Loading">
        <div
          className={`${sizeClasses[size]} border-2 border-primary-white/20 border-t-primary-white rounded-full spinner-element`}
        />
        <span className="sr-only">Loading content...</span>
      </div>
    </>
  )
}

export default LoadingSpinner

