import { Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, Color } from 'three'

const smile = (x, z, t) => {
  const skew = 1 + Math.sin(t / 18 * Math.PI * 2) * 0.2
  const base = 0.12 + 0.20 * Math.exp(-z * 1.3) * (x < 0 ? x * x * 1.2 * skew : x * x * 0.55) + 0.05 * (1 - z)
  return base + 0.026 * Math.sin(t / 9 * Math.PI * 2 + x * 2) + 0.018 * Math.sin(t / 14 * Math.PI * 2 + z * 4)
}
export function mountSurface(host, onReady, onLost) {
  const canvas = document.createElement('canvas')
  let gl
  try { gl = canvas.getContext('webgl2', { alpha: true, antialias: false, powerPreference: 'low-power' }) } catch { return () => {} }
  if (!gl) return () => {}
  let renderer
  try { renderer = new WebGLRenderer({ canvas, context: gl, alpha: true, antialias: false }) } catch { return () => {} }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  const tokens = getComputedStyle(document.documentElement)
  const ink = tokens.getPropertyValue('--ink').trim()
  const accent = new Color(tokens.getPropertyValue('--surface-highlight').trim())
  const accentDim = new Color(tokens.getPropertyValue('--surface-line').trim())
  renderer.setClearColor(ink, 0)
  host.appendChild(canvas)
  const scene = new Scene()
  const camera = new PerspectiveCamera(35, 1, 0.1, 100)
  const coordinates = []
  const colors = []
  const addVertex = (x, z, color) => { coordinates.push(x, z); colors.push(color.r, color.g, color.b) }
  for (let i = 0; i < 56; i++) {
    const x = i / 55 * 4 - 2
    const opacity = i === 28 ? 1 : i % 7 === 0 ? 0.72 : 0.48
    const color = (i === 28 ? accent : accentDim).clone().multiplyScalar(opacity)
    for (let j = 0; j < 35; j++) { addVertex(x, j / 35, color); addVertex(x, (j + 1) / 35, color) }
  }
  for (let j = 0; j < 36; j++) {
    const z = j / 35
    const opacity = Math.min(0.95, 0.24 + (1 - z) * 0.53 + (j % 6 === 0 ? 0.18 : 0))
    const color = accentDim.clone().multiplyScalar(opacity)
    for (let i = 0; i < 55; i++) { addVertex(i / 55 * 4 - 2, z, color); addVertex((i + 1) / 55 * 4 - 2, z, color) }
  }
  const geometry = new BufferGeometry()
  const positions = new Float32Array(coordinates.length / 2 * 3)
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
  const material = new LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 1, depthWrite: false })
  scene.add(new LineSegments(geometry, material))
  const resize = () => {
    const width = host.clientWidth || window.innerWidth
    const height = host.clientHeight || 600
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  resize()
  const hero = host.closest('.terminal-panel')
  let visible = true, hidden = document.hidden, lost = false, running = false, raf = 0, last = 0, pointer = 0, angle = 0
  let fps = (navigator.hardwareConcurrency || 8) <= 4 ? 20 : 30
  const frameTimes = []
  const render = (time) => {
    const t = time / 1000
    const attribute = geometry.getAttribute('position')
    for (let i = 0; i < coordinates.length; i += 2) {
      const x = coordinates[i], z = coordinates[i + 1]
      attribute.setXYZ(i / 2, x, smile(x / 2, z, t) * 3, z * 3 - 1.5)
    }
    attribute.needsUpdate = true
    angle += (pointer - angle) * 0.05
    const azimuth = (-32 + Math.sin(t / 22 * Math.PI * 2) * 9 + angle) * Math.PI / 180
    camera.position.set(Math.sin(azimuth) * 8, 4.4, Math.cos(azimuth) * 8)
    camera.lookAt(0, 0.35, 0)
    renderer.render(scene, camera)
  }
  const tick = (time) => {
    if (!running) return
    if (time - last >= 1000 / fps) {
      const frameStart = performance.now()
      last = time
      render(time)
      frameTimes.push(performance.now() - frameStart)
      if (frameTimes.length > 60) frameTimes.shift()
      if (frameTimes.length === 60 && frameTimes.reduce((a, b) => a + b, 0) / 60 > 24) fps = 20
    }
    raf = requestAnimationFrame(tick)
  }
  const refresh = () => {
    const opacity = Math.max(0, 1 - window.scrollY / Math.max(1, hero.clientHeight * 0.7))
    host.style.opacity = String(opacity)
    const shouldRun = visible && !hidden && !lost && opacity > 0
    if (shouldRun && !running) { running = true; last = 0; raf = requestAnimationFrame(tick) }
    if (!shouldRun && running) { running = false; cancelAnimationFrame(raf) }
  }
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh() })
  observer.observe(hero)
  const visibility = () => { hidden = document.hidden; refresh() }
  const scroll = () => refresh()
  const move = (event) => { pointer = (event.clientX / window.innerWidth * 2 - 1) * 2 }
  const contextLost = (event) => { event.preventDefault(); lost = true; refresh(); onLost() }
  document.addEventListener('visibilitychange', visibility)
  window.addEventListener('scroll', scroll, { passive: true })
  if (matchMedia('(pointer:fine)').matches) window.addEventListener('pointermove', move, { passive: true })
  canvas.addEventListener('webglcontextlost', contextLost)
  window.addEventListener('resize', resize)
  onReady()
  refresh()
  return () => { running = false; cancelAnimationFrame(raf); observer.disconnect(); document.removeEventListener('visibilitychange', visibility); window.removeEventListener('scroll', scroll); window.removeEventListener('pointermove', move); window.removeEventListener('resize', resize); canvas.removeEventListener('webglcontextlost', contextLost); geometry.dispose(); material.dispose(); renderer.dispose(); renderer.forceContextLoss(); canvas.remove() }
}
