import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import BoxLoader from '@/components/ui/box-loader'
import { ShaderAnimation } from '@/components/ui/shader-lines'
import SEO from './components/SEO'
import InteractiveNeuralVortexBackground from '@/components/ui/interactive-neural-vortex-background'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const Posters = lazy(() => import('./pages/Posters'))
const About = lazy(() => import('./pages/About'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary-black">
    <div className="pointer-events-none absolute inset-0 z-0 min-h-screen">
      <ShaderAnimation />
    </div>
    <div className="relative z-10 flex flex-col items-center bg-primary-black/55 px-6 py-16">
      <BoxLoader label="Portfolio Loading" />
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <div className="relative isolate min-h-screen">
          <InteractiveNeuralVortexBackground />
          <div className="relative z-10 min-h-screen bg-primary-black/72">
            <Router>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/:projectId" element={<ProjectDetails />} />
                  <Route path="/posters" element={<Posters />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Router>
          </div>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App

