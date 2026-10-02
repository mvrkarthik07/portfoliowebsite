import { writeFile } from 'node:fs/promises'
const smile = (x, z) => 0.12 + 0.20 * Math.exp(-z * 1.3) * (x < 0 ? x * x * 1.2 : x * x * 0.55) + 0.05 * (1 - z)
const project = (x, z) => {
  const h = smile(x, z)
  return [Math.round(490 + x * 360 + z * 355), Math.round(565 - z * 250 - h * 430)]
}
const path = (points) => points.map(([x,y], i) => i ? `l${x-points[i-1][0]},${y-points[i-1][1]}` : `M${x},${y}`).join('')
const lines = []
for (let i = 0; i < 56; i++) {
  const x = (i / 55) * 2 - 1
  const pts = Array.from({ length: 36 }, (_, j) => project(x, j / 35))
  const opacity = i === 28 ? 0.9 : i % 7 === 0 ? 0.58 : 0.3
  lines.push(`<path d="${path(pts)}" stroke="${i === 28 ? '#E94332' : '#B52B1E'}" stroke-opacity="${opacity}"/>`)
}
for (let j = 0; j < 36; j++) {
  const z = j / 35
  const pts = Array.from({ length: 56 }, (_, i) => project((i / 55) * 2 - 1, z))
  const opacity = Math.min(0.82, 0.15 + (1 - z) * 0.48 + (j % 6 === 0 ? 0.18 : 0))
  lines.push(`<path d="${path(pts)}" stroke="#B52B1E" stroke-opacity="${opacity.toFixed(2)}"/>`)
}
await writeFile(new URL('../public/surface.svg', import.meta.url), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700" fill="none" stroke-width="1">${lines.join('')}</svg>`)
