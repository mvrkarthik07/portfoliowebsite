const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center" role="status" aria-label="Loading">
      <div className="loading-spinner" aria-hidden />
      <span className="sr-only">Loading content...</span>
    </div>
  )
}

export default LoadingSpinner

