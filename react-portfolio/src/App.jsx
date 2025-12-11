import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import SEO from './components/SEO'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Posters = lazy(() => import('./pages/Posters'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary-black">
    <LoadingSpinner size="lg" />
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posters" element={<Posters />} />
              <Route path="/:projectId" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App

