import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    // Three.js r89 UMD from CDN (no local `three` package)
    THREE?: unknown
  }
}

type ThreeLike = {
  Camera: new () => { position: { z: number } }
  Scene: new () => unknown
  PlaneBufferGeometry: new (w: number, h: number) => unknown
  Vector2: new () => { x: number; y: number }
  ShaderMaterial: new (args: { uniforms: unknown; vertexShader: string; fragmentShader: string }) => unknown
  Mesh: new (geometry: unknown, material: unknown) => { position?: { z: number } }
  WebGLRenderer: new (args: { alpha: boolean; antialias: boolean }) => {
    dispose: () => void
    domElement: HTMLCanvasElement
    setSize: (w: number, h: number) => void
    setPixelRatio: (n: number) => void
    render: (scene: unknown, camera: unknown) => void
  }
}

function isThreeLike(v: unknown): v is ThreeLike {
  if (!v || typeof v !== 'object') return false
  const o = v as Record<string, unknown>
  return (
    typeof o.Camera === 'function' &&
    typeof o.Scene === 'function' &&
    typeof o.PlaneBufferGeometry === 'function' &&
    typeof o.Vector2 === 'function' &&
    typeof o.ShaderMaterial === 'function' &&
    typeof o.Mesh === 'function' &&
    typeof o.WebGLRenderer === 'function'
  )
}

export type ShaderAnimationProps = {
  className?: string
}

const THREE_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js'

/**
 * Full-bleed Three.js r89 shader lines (loads THREE from CDN). Use behind loading UI (`pointer-events-none` on parent if needed).
 */
export function ShaderAnimation({ className }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<{
    camera: unknown
    scene: unknown
    renderer: {
      dispose: () => void
      domElement: HTMLCanvasElement
      setSize: (w: number, h: number) => void
      setPixelRatio: (n: number) => void
      render: (scene: unknown, camera: unknown) => void
    } | null
    uniforms: { time: { value: number }; resolution: { value: { x: number; y: number } } } | null
    animationId: number | null
    resizeHandler: (() => void) | null
  }>({
    camera: null,
    scene: null,
    renderer: null,
    uniforms: null,
    animationId: null,
    resizeHandler: null,
  })

  useEffect(() => {
    let cancelled = false
    const container = containerRef.current

    const dispose = () => {
      const s = sceneRef.current
      if (s.animationId != null) {
        cancelAnimationFrame(s.animationId)
        s.animationId = null
      }
      if (s.resizeHandler) {
        window.removeEventListener('resize', s.resizeHandler, false)
        s.resizeHandler = null
      }
      if (s.renderer) {
        try {
          s.renderer.dispose()
          const el = s.renderer.domElement
          if (el?.parentNode) el.parentNode.removeChild(el)
        } catch {
          /* ignore */
        }
        s.renderer = null
      }
      s.camera = null
      s.scene = null
      s.uniforms = null
      if (container) container.innerHTML = ''
    }

    const initThreeJS = () => {
      if (cancelled || !containerRef.current || !window.THREE) return
      if (!isThreeLike(window.THREE)) return

      const THREE = window.THREE
      const root = containerRef.current
      root.innerHTML = ''

      const camera = new THREE.Camera()
      camera.position.z = 1

      const scene = new THREE.Scene()
      const geometry = new THREE.PlaneBufferGeometry(2, 2)

      const uniforms = {
        time: { type: 'f' as const, value: 1.0 },
        resolution: { type: 'v2' as const, value: new THREE.Vector2() },
      }

      const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

      const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float random (in float x) {
          return fract(sin(x)*1e4);
      }
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                               vec2(12.9898,78.233)))*
              43758.5453123);
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));
          }
        }

        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
      }
    `

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      root.appendChild(renderer.domElement)

      const onWindowResize = () => {
        if (!containerRef.current || !sceneRef.current.renderer) return
        const rect = containerRef.current.getBoundingClientRect()
        const w = Math.max(1, rect.width)
        const h = Math.max(1, rect.height)
        renderer.setSize(w, h)
        uniforms.resolution.value.x = renderer.domElement.width
        uniforms.resolution.value.y = renderer.domElement.height
      }

      sceneRef.current = {
        camera,
        scene,
        renderer,
        uniforms,
        animationId: null,
        resizeHandler: onWindowResize,
      }

      onWindowResize()
      window.addEventListener('resize', onWindowResize, false)

      const animate = () => {
        if (cancelled || !sceneRef.current.renderer || !sceneRef.current.scene) return
        sceneRef.current.animationId = requestAnimationFrame(animate)
        uniforms.time.value += 0.05
        renderer.render(scene, camera)
      }

      animate()
    }

    const onScriptLoad = () => {
      if (!cancelled) initThreeJS()
    }

    if (window.THREE) {
      initThreeJS()
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${THREE_CDN}"]`)
      if (!script) {
        script = document.createElement('script')
        script.src = THREE_CDN
        script.async = true
        script.setAttribute('data-shader-lines-three', '1')
        document.head.appendChild(script)
      }
      script.addEventListener('load', onScriptLoad)
      return () => {
        cancelled = true
        script?.removeEventListener('load', onScriptLoad)
        dispose()
      }
    }

    return () => {
      cancelled = true
      dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 h-full min-h-full w-full overflow-hidden', className)}
      aria-hidden
    />
  )
}

export default ShaderAnimation
