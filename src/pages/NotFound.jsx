import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you’re looking for doesn’t exist."
      />
      <div className="page-shell">
        <div className="page-main text-center">
          <h1 className="section-heading">
            Page Not Found
          </h1>
          <p className="section-description mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-secondary text-center">
              Go Home
            </Link>
            <Link to="/work" className="btn-secondary text-center">
              View Work
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound

