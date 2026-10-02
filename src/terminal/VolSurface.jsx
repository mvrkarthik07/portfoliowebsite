import { useEffect, useRef, useState } from 'react'
export default function VolSurface() {
  const host = useRef(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData) return
    let disposed = false
    let cleanup
    let delay
    let idle
    let observer
    const start = () => {
      import('./volRenderer').then(({ mountSurface }) => {
        if (disposed || !host.current) return
        cleanup = mountSurface(host.current, () => setActive(true), () => setActive(false))
      }).catch(() => setActive(false))
    }
    const scheduleIdle = () => {
      if (disposed || idle) return
      idle = window.requestIdleCallback ? window.requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 1500)
    }
    const afterLcp = () => { clearTimeout(delay); delay = setTimeout(scheduleIdle, 3500) }
    try {
      observer = new PerformanceObserver((list) => { if (list.getEntries().length) afterLcp() })
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
      if (performance.getEntriesByType('largest-contentful-paint').length) afterLcp()
    } catch { delay = setTimeout(scheduleIdle, 1500) }
    const fallback = setTimeout(scheduleIdle, 6500)
    return () => { disposed = true; clearTimeout(delay); clearTimeout(fallback); observer?.disconnect(); if (window.cancelIdleCallback) window.cancelIdleCallback(idle); else clearTimeout(idle); cleanup?.() }
  }, [])
  return <div className="surface-layer" aria-hidden="true"><img className={`surface-static ${active ? 'hidden' : ''}`} src="/surface.svg" width="1200" height="700" alt="" /><div className="surface-canvas" ref={host} /></div>
}
