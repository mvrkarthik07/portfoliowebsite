import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import BrandedLoader from './components/BrandedLoader'
import PageTransition from './components/PageTransition'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const Posters = lazy(() => import('./pages/Posters'))
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageLoader = () => <BrandedLoader label="Portfolio loading" fullscreen />

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectId" element={<ProjectDetails />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <MotionConfig reducedMotion="user">
          <SEO />
          <div className="relative isolate min-h-screen bg-primary-black">
            <div className="relative z-10 min-h-screen">
              <Router>
                <AnimatedRoutes />
              </Router>
            </div>
          </div>
        </MotionConfig>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App

