import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import Chrome from './terminal/Chrome'
import StatusBar from './terminal/StatusBar'
import Meta from './terminal/Meta'
import Home from './terminal/Home'
const AboutPage = lazy(() => import('./terminal/Pages').then((module) => ({ default: module.AboutPage })))
const ArchivePage = lazy(() => import('./terminal/Pages').then((module) => ({ default: module.ArchivePage })))
const CaseStudyPage = lazy(() => import('./terminal/Pages').then((module) => ({ default: module.CaseStudyPage })))
const NotFoundPage = lazy(() => import('./terminal/Pages').then((module) => ({ default: module.NotFoundPage })))
const WorkPage = lazy(() => import('./terminal/Sections').then((module) => ({ default: module.WorkPage })))
const ExperiencePage = lazy(() => import('./terminal/Sections').then((module) => ({ default: module.ExperiencePage })))
const ExperienceDetailPage = lazy(() => import('./terminal/Sections').then((module) => ({ default: module.ExperienceDetailPage })))
const ContactPage = lazy(() => import('./terminal/ContactPage'))
export function Site() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mainRef = useRef(null)
  const footerRef = useRef(null)
  useEffect(() => {
    for (const ref of [mainRef, footerRef]) { if (menuOpen) ref.current?.setAttribute('inert', ''); else ref.current?.removeAttribute('inert') }
  }, [menuOpen])
  return <><a className="skip-link" href="#main">Skip to main content</a><Meta /><Chrome menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main id="main" ref={mainRef}><Suspense fallback={<div className="route-loading">Loading…</div>}><Routes><Route path="/" element={<Home />} /><Route path="/work" element={<WorkPage />} /><Route path="/work/:slug" element={<CaseStudyPage />} /><Route path="/experience" element={<ExperiencePage />} /><Route path="/experience/:slug" element={<ExperienceDetailPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/archive" element={<ArchivePage />} /><Route path="*" element={<NotFoundPage />} /></Routes></Suspense></main><div ref={footerRef}><StatusBar /></div></>
}
export default function App() { return <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}><BrowserRouter><Site /></BrowserRouter></LazyMotion></MotionConfig> }
