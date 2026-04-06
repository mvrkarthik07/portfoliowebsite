import { cn } from '@/lib/utils'
import UnicornScene from 'unicornstudio-react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useEffect, useRef } from 'react'

const DEFAULT_PROJECT_ID = 'jYxrWzSRtsXNqZADHnVH'

const CREDIT_HIDE_CSS = `
  .rainbow-matrix-root a[href*="nocodeshader"],
  .rainbow-matrix-root a[href*="nocode"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    position: absolute !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
  }
`

function hideNocodeCreditOverlays(root: HTMLElement | null) {
  if (!root) return

  root.querySelectorAll('a[href*="nocode"]').forEach((node) => {
    const el = node as HTMLElement
    el.style.setProperty('display', 'none', 'important')

    const block = el.closest('div')
    if (block && root.contains(block) && block !== root) {
      const text = (block.textContent || '').toLowerCase()
      if (
        text.includes('nocodeshader') ||
        text.includes('hardik') ||
        text.includes('rainbow matrix') ||
        text.includes('shader animation')
      ) {
        (block as HTMLElement).style.setProperty('display', 'none', 'important')
      }
    }
  })

  root.querySelectorAll('div, span, p').forEach((node) => {
    const el = node as HTMLElement
    if (!el.textContent?.trim()) return
    const t = el.textContent.toLowerCase()
    if (
      (t.includes('rainbow matrix') && t.includes('hardik')) ||
      (t.includes('shader animation') && t.includes('hardik')) ||
      t.includes('www.nocodeshader.com')
    ) {
      if (el.children.length === 0 || t.length < 500) {
        el.style.setProperty('display', 'none', 'important')
      }
    }
  })
}

export interface RainbowMatrixShaderProps {
  /** Unicorn Studio project id */
  projectId?: string
  className?: string
}

/**
 * Full-viewport Unicorn Studio scene (rainbow matrix). Use fixed behind site content (`pointer-events-none` on wrapper).
 */
export function RainbowMatrixShader({
  projectId = DEFAULT_PROJECT_ID,
  className,
}: RainbowMatrixShaderProps) {
  const { width, height } = useWindowSize()
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-rainbow-matrix-credits', '1')
    style.textContent = CREDIT_HIDE_CSS
    document.head.appendChild(style)

    const tick = () => hideNocodeCreditOverlays(rootRef.current)
    tick()
    const interval = window.setInterval(tick, 250)

    return () => {
      window.clearInterval(interval)
      style.remove()
    }
  }, [])

  if (width < 1 || height < 1) {
    return null
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        'rainbow-matrix-root pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden',
        className,
      )}
      aria-hidden
    >
      <UnicornScene
        production
        projectId={projectId}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

/** @deprecated Use named export RainbowMatrixShader */
export const Component = RainbowMatrixShader

export default RainbowMatrixShader
