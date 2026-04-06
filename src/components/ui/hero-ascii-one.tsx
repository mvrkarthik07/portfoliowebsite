import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    UnicornStudio?: { isInitialized?: boolean; init?: () => void }
  }
}

const UNICORN_CDN =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js'

function findUnicornScriptEl(): HTMLScriptElement | undefined {
  return Array.from(document.getElementsByTagName('script')).find(
    (el) => el.src === UNICORN_CDN || el.getAttribute('src') === UNICORN_CDN,
  )
}

function loadUnicornScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = findUnicornScriptEl()
    if (existing) {
      if (window.UnicornStudio?.init) {
        resolve()
        return
      }
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Unicorn Studio script failed')), {
        once: true,
      })
      return
    }
    const s = document.createElement('script')
    s.src = UNICORN_CDN
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Unicorn Studio script failed'))
    document.head.appendChild(s)
  })
}

function unicornReinit() {
  const us = window.UnicornStudio
  if (!us?.init) return
  try {
    us.isInitialized = false
    us.init()
    us.isInitialized = true
  } catch {
    /* library may throw if DOM not ready */
  }
}

/** Scoped to this hero so we do not touch other Unicorn embeds on the page */
const BRANDING_CSS = `
  .hero-ascii-one-embed-root [data-us-project] {
    position: relative !important;
    overflow: hidden !important;
  }
  .hero-ascii-one-embed-root [data-us-project] canvas {
    clip-path: inset(0 0 10% 0) !important;
  }
  .hero-ascii-one-embed-root [data-us-project] * {
    pointer-events: none !important;
  }
  .hero-ascii-one-embed-root [data-us-project] a[href*="unicorn"],
  .hero-ascii-one-embed-root [data-us-project] button[title*="unicorn"],
  .hero-ascii-one-embed-root [data-us-project] div[title*="Made with"],
  .hero-ascii-one-embed-root [data-us-project] .unicorn-brand,
  .hero-ascii-one-embed-root [data-us-project] [class*="brand"],
  .hero-ascii-one-embed-root [data-us-project] [class*="credit"],
  .hero-ascii-one-embed-root [data-us-project] [class*="watermark"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    position: absolute !important;
    left: -9999px !important;
    top: -9999px !important;
  }
`

const FOOTER_BAR_HEIGHTS = [8, 12, 6, 10, 7, 9, 11, 8]

export interface HeroAsciiOneProps {
  unicornProjectId?: string
  /** Hide duplicate top brand row; site Navbar is used instead */
  embedded?: boolean
  brandTitle?: string
  brandSubtitle?: string
  titleLine1?: string
  titleLine2?: string
  description?: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  /** Label next to ∞ under CTAs (desktop) */
  protocolLabel?: string
  /** Corner frames + technical footer bar */
  showDecorativeChrome?: boolean
  children?: ReactNode
  /** Mobile: stars only; desktop: full embed */
  asciiOnly?: boolean
}

export function HeroAsciiOne({
  unicornProjectId = 'OMzqyUv6M3kSnv0JeAtC',
  embedded = true,
  brandTitle = 'UIMIX',
  brandSubtitle = 'EST. 2025',
  titleLine1 = 'ENDLESS PURSUIT',
  titleLine2 = '',
  description =
    'Like Sisyphus, we push forward — not despite the struggle, but because of it. Every iteration, every pixel, every line of code is our boulder.',
  primaryCta = { label: 'BEGIN THE CLIMB', to: '/work' },
  secondaryCta = { label: 'EMBRACE THE JOURNEY', to: '/posters' },
  protocolLabel = 'SISYPHUS.PROTOCOL',
  showDecorativeChrome = true,
  children,
  asciiOnly = false,
}: HeroAsciiOneProps) {
  const embedRootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-hero-ascii-one', '1')
    style.textContent = BRANDING_CSS
    document.head.appendChild(style)

    let cancelled = false

    const hideBranding = () => {
      const root = embedRootRef.current
      if (!root) return
      const projectDiv = root.querySelector('[data-us-project]')
      if (!projectDiv) return
      projectDiv.querySelectorAll('*').forEach((el) => {
        const text = (el.textContent || '').toLowerCase()
        const title = (el.getAttribute('title') || '').toLowerCase()
        const href = (el.getAttribute('href') || '').toLowerCase()
        if (
          text.includes('made with') ||
          text.includes('unicorn') ||
          title.includes('made with') ||
          title.includes('unicorn') ||
          href.includes('unicorn.studio')
        ) {
          try {
            el.remove()
          } catch {
            const h = el as HTMLElement
            h.style.display = 'none'
            h.style.visibility = 'hidden'
            h.style.opacity = '0'
          }
        }
      })
    }

    const tick = () => {
      if (cancelled) return
      unicornReinit()
      hideBranding()
    }

    const retryIds: number[] = []
    void (async () => {
      try {
        await loadUnicornScript()
        if (cancelled) return
        requestAnimationFrame(() => {
          requestAnimationFrame(tick)
        })
        const retryMs = [50, 200, 500, 1200, 2000, 5000, 10000]
        retryMs.forEach((ms) => {
          retryIds.push(
            window.setTimeout(() => {
              if (!cancelled) tick()
            }, ms),
          )
        })
      } catch {
        /* ignore */
      }
    })()

    hideBranding()
    const interval = window.setInterval(hideBranding, 50)
    const t1 = window.setTimeout(hideBranding, 500)
    const t2 = window.setTimeout(hideBranding, 1000)
    const t3 = window.setTimeout(hideBranding, 2000)

    return () => {
      cancelled = true
      retryIds.forEach((id) => window.clearTimeout(id))
      window.clearInterval(interval)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      style.remove()
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false
      }
    }
  }, [unicornProjectId])

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-transparent">
      <div
        ref={embedRootRef}
        className={cn(
          'hero-ascii-one-embed-root absolute inset-0 h-full min-h-[100svh] w-full',
          asciiOnly ? 'z-[1] block' : 'hidden lg:block',
        )}
        aria-hidden
      >
        <div
          data-us-project={unicornProjectId}
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {!embedded && (
        <div className="absolute left-0 right-0 top-0 z-20 border-b border-white/20">
          <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="-skew-x-12 transform font-mono text-xl font-bold italic tracking-widest text-white lg:text-2xl">
                {brandTitle}
              </div>
              <div className="h-3 w-px bg-white/40 lg:h-4" />
              <span className="font-mono text-[8px] text-white/60 lg:text-[10px]">{brandSubtitle}</span>
            </div>
            <div className="hidden items-center gap-3 font-mono text-[10px] text-white/60 lg:flex">
              <span>LAT: 1.3521°</span>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <span>LONG: 103.8198°</span>
            </div>
          </div>
        </div>
      )}

      {showDecorativeChrome && (
        <>
          <div className="absolute left-0 top-0 z-20 h-8 w-8 border-l-2 border-t-2 border-white/30 lg:h-12 lg:w-12" />
          <div className="absolute right-0 top-0 z-20 h-8 w-8 border-r-2 border-t-2 border-white/30 lg:h-12 lg:w-12" />
          <div className="absolute bottom-[5vh] left-0 z-20 h-8 w-8 border-b-2 border-l-2 border-white/30 lg:h-12 lg:w-12" />
          <div className="absolute bottom-[5vh] right-0 z-20 h-8 w-8 border-b-2 border-r-2 border-white/30 lg:h-12 lg:w-12" />
        </>
      )}

      {!asciiOnly && (
        <div
          className={cn(
            'relative z-10 flex min-h-screen items-center justify-end',
            embedded ? 'pt-24 md:pt-28' : 'pt-16 lg:pt-0',
          )}
          style={{ marginTop: embedded ? undefined : '5vh' }}
        >
          <div className="min-w-0 w-full px-6 lg:w-1/2 lg:px-16 lg:pr-[10%]">
            <div className="relative max-w-lg min-w-0 lg:ml-auto">
              <div className="mb-3 flex items-center gap-2 opacity-60">
                <div className="h-px w-8 bg-white" />
                <span className="font-mono text-[10px] tracking-wider text-white">∞</span>
                <div className="h-px flex-1 bg-white" />
              </div>

              <div className="relative">
                <div className="hero-ascii-dither absolute -right-3 top-0 bottom-0 hidden w-1 opacity-40 lg:block" />
                <h1
                  className="max-w-full break-words mb-3 font-mono text-2xl font-bold leading-tight tracking-wider text-white whitespace-normal lg:mb-4 lg:-ml-[5%] lg:text-5xl"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {titleLine1}
                  {titleLine2 ? (
                    <span className="mt-1 block text-white opacity-90 lg:mt-2">{titleLine2}</span>
                  ) : null}
                </h1>
              </div>

              <div className="mb-3 hidden gap-1 opacity-40 lg:flex">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="h-0.5 w-0.5 rounded-full bg-white" />
                ))}
              </div>

              <div className="relative">
                <p className="max-w-full break-words mb-5 font-mono text-xs leading-relaxed text-gray-300 opacity-80 lg:mb-6 lg:text-base">
                  {description}
                </p>
                <div
                  className="absolute -left-4 top-1/2 hidden h-3 w-3 border border-white opacity-30 lg:block"
                  style={{ transform: 'translateY(-50%)' }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-1 w-1 bg-white"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                <Link
                  to={primaryCta.to}
                  className="group relative border border-white bg-transparent px-5 py-2 font-mono text-xs text-white transition-all duration-200 hover:bg-white hover:text-black lg:px-6 lg:py-2.5 lg:text-sm"
                >
                  <span className="absolute -left-1 -top-1 hidden h-2 w-2 border-l border-t border-white opacity-0 transition-opacity group-hover:opacity-100 lg:block" />
                  <span className="absolute -bottom-1 -right-1 hidden h-2 w-2 border-b border-r border-white opacity-0 transition-opacity group-hover:opacity-100 lg:block" />
                  {primaryCta.label}
                </Link>
                <Link
                  to={secondaryCta.to}
                  className="relative border border-white bg-transparent px-5 py-2 font-mono text-xs text-white transition-all duration-200 hover:bg-white hover:text-black lg:px-6 lg:py-2.5 lg:text-sm"
                  style={{ borderWidth: '1px' }}
                >
                  {secondaryCta.label}
                </Link>
              </div>

              {children}

              <div className="mt-6 hidden items-center gap-2 opacity-40 lg:flex">
                <span className="font-mono text-[9px] text-white">∞</span>
                <div className="h-px flex-1 bg-white" />
                <span className="font-mono text-[9px] text-white">{protocolLabel}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDecorativeChrome && (
        <div
          className="absolute left-0 right-0 z-20 border-t border-white/20 bg-black/40 backdrop-blur-sm"
          style={{ bottom: '5vh' }}
        >
          <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8 lg:py-3">
            <div className="flex items-center gap-3 font-mono text-[8px] text-white/50 lg:gap-6 lg:text-[9px]">
              <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
              <span className="lg:hidden">SYS.ACT</span>
              <div className="hidden gap-1 lg:flex">
                {FOOTER_BAR_HEIGHTS.map((h, i) => (
                  <div key={i} className="w-1 bg-white/30" style={{ height: `${h}px` }} />
                ))}
              </div>
              <span>V1.0.0</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[8px] text-white/50 lg:gap-4 lg:text-[9px]">
              <span className="hidden lg:inline">◐ RENDERING</span>
              <div className="flex gap-1">
                <div className="h-1 w-1 animate-pulse rounded-full bg-white/60" />
                <div
                  className="h-1 w-1 animate-pulse rounded-full bg-white/40"
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className="h-1 w-1 animate-pulse rounded-full bg-white/20"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
              <span className="hidden lg:inline">FRAME: ∞</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroAsciiOne
