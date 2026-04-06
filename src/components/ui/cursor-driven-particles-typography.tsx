import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface CursorDrivenParticleTypographyProps {
  className?: string
  text: string
  fontSize?: number
  fontFamily?: string
  particleSize?: number
  /** Logical pixel step when scanning the glyph mask; smaller = denser particles (try 2–4). */
  particleDensity?: number
  dispersionStrength?: number
  returnSpeed?: number
  color?: string
  /** Draw text in uppercase (particle mask matches). */
  uppercase?: boolean
  textAlign?: CanvasTextAlign
}

class Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  size: number
  color: string
  dispersion: number
  returnSpd: number

  constructor(
    x: number,
    y: number,
    size: number,
    color: string,
    dispersion: number,
    returnSpd: number,
  ) {
    this.x = x + (Math.random() - 0.5) * 10
    this.y = y + (Math.random() - 0.5) * 10
    this.originX = x
    this.originY = y
    this.vx = (Math.random() - 0.5) * 5
    this.vy = (Math.random() - 0.5) * 5
    this.size = size
    this.color = color
    this.dispersion = dispersion
    this.returnSpd = returnSpd
  }

  update(mouseX: number, mouseY: number) {
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const interactionRadius = 120

    if (
      distance > 0.001 &&
      distance < interactionRadius &&
      mouseX !== -1000 &&
      mouseY !== -1000
    ) {
      const forceDirectionX = dx / distance
      const forceDirectionY = dy / distance
      const force = (interactionRadius - distance) / interactionRadius

      const repulsionX = forceDirectionX * force * this.dispersion
      const repulsionY = forceDirectionY * force * this.dispersion

      this.vx -= repulsionX
      this.vy -= repulsionY
    }

    this.vx += (this.originX - this.x) * this.returnSpd
    this.vy += (this.originY - this.y) * this.returnSpd

    this.vx *= 0.85
    this.vy *= 0.85

    const distToOrigin = Math.sqrt(
      Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2),
    )

    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2
      this.vy += (Math.random() - 0.5) * 0.2
    }

    this.x += this.vx
    this.y += this.vy
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export function CursorDrivenParticleTypography({
  className,
  text,
  fontSize = 120,
  fontFamily = "Inter, sans-serif",
  particleSize = 1.5,
  particleDensity = 3,
  dispersionStrength = 15,
  returnSpeed = 0.08,
  color,
  uppercase = true,
  textAlign = "center",
}: CursorDrivenParticleTypographyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId = 0
    let particles: Particle[] = []

    let mouseX = -1000
    let mouseY = -1000

    let containerWidth = 0
    let containerHeight = 0

    const init = () => {
      const container = containerRef.current
      if (!container) return

      containerWidth = container.clientWidth
      containerHeight = container.clientHeight

      const dpr = window.devicePixelRatio || 1
      canvas.width = containerWidth * dpr
      canvas.height = containerHeight * dpr
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const computedStyle = window.getComputedStyle(container)
      const textColor = color || computedStyle.color || "#000000"

      ctx.clearRect(0, 0, containerWidth, containerHeight)

      const rawLines = text.split(/\n/).map((l) => l.trim()).filter(Boolean)
      if (rawLines.length === 0) return

      const lines = uppercase ? rawLines.map((l) => l.toUpperCase()) : rawLines

      const padX = Math.max(10, Math.min(28, containerWidth * 0.045))
      const padY = Math.max(8, Math.min(20, containerHeight * 0.035))
      const maxTextW = Math.max(40, containerWidth - padX * 2)
      const maxTextH = Math.max(40, containerHeight - padY * 2)

      ctx.textAlign = textAlign
      ctx.textBaseline = "middle"

      let effectiveFontSize = Math.min(fontSize, containerWidth * 0.13)
      const lineGap = 1.22

      const blockFits = (size: number) => {
        ctx.font = `bold ${size}px ${fontFamily}`
        const lh = size * lineGap
        const widest = Math.max(...lines.map((line) => ctx.measureText(line).width), 0)
        const totalH = lines.length * lh
        return widest <= maxTextW && totalH <= maxTextH
      }

      while (effectiveFontSize > 8 && !blockFits(effectiveFontSize)) {
        effectiveFontSize *= 0.96
      }

      for (let g = 0; g < 48 && blockFits(effectiveFontSize * 1.025); g++) {
        effectiveFontSize *= 1.025
      }

      ctx.fillStyle = textColor
      ctx.font = `bold ${effectiveFontSize}px ${fontFamily}`

      const lineHeight = effectiveFontSize * lineGap
      const blockHalf = ((lines.length - 1) * lineHeight) / 2
      const midY = containerHeight / 2

      const anchorX =
        textAlign === "left"
          ? padX
          : textAlign === "right"
            ? containerWidth - padX
            : containerWidth / 2

      lines.forEach((line, i) => {
        ctx.fillText(line, anchorX, midY - blockHalf + i * lineHeight)
      })

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height)

      particles = []

      const step = Math.max(1, Math.round(Math.max(0.5, particleDensity) * dpr))

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4
          const alpha = textCoordinates.data[index + 3] || 0

          if (alpha > 128) {
            particles.push(
              new Particle(
                x / dpr,
                y / dpr,
                particleSize,
                textColor,
                dispersionStrength,
                returnSpeed,
              ),
            )
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight)

      particles.forEach((particle) => {
        particle.update(mouseX, mouseY)
        particle.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      init()
    }

    const timeoutId = window.setTimeout(() => {
      init()
      animate()
    }, 100)

    const resizeObserver = new ResizeObserver(handleResize)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.clearTimeout(timeoutId)
      resizeObserver.disconnect()
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [
    text,
    fontSize,
    fontFamily,
    particleSize,
    particleDensity,
    dispersionStrength,
    returnSpeed,
    color,
    uppercase,
    textAlign,
  ])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full min-h-[280px] w-full max-w-full touch-none items-center justify-center overflow-hidden sm:min-h-[320px]",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={(uppercase ? text.toUpperCase() : text).replace(/\n/g, " ")}
        className="block h-full w-full"
      />
    </div>
  )
}
