import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { build } from 'esbuild'
import sharp from 'sharp'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import { createServer } from 'vite'
const root = path.resolve('dist')
const template = await readFile(path.join(root, 'index.html'), 'utf8')
const stylesheet = template.match(/<link rel="stylesheet" crossorigin href="(\/assets\/[^\"]+\.css)">/)
if (!stylesheet) throw new Error('Vite stylesheet link missing from HTML template')
const homeCss = await readFile(path.join(root, stylesheet[1].slice(1)), 'utf8')
async function fromTS(file) {
  const result = await build({ entryPoints: [file], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript,${encodeURIComponent(result.outputFiles[0].text)}`)
}
const { projects } = await fromTS('src/content/projects.ts')
const { profile } = await fromTS('src/content/profile.ts')
const SITE_URL = 'https://mvrkarthik.netlify.app'
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
const { Site } = await vite.ssrLoadModule('/src/App.jsx')
const homeMarkup = renderToString(React.createElement(MotionConfig, { reducedMotion: 'user' }, React.createElement(LazyMotion, { features: domAnimation }, React.createElement(StaticRouter, { location: '/' }, React.createElement(Site)))))
await vite.close()
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char])
const projectRoutes = projects.filter(({ caseStudy }) => caseStudy).map((project) => ({ path: `/work/${project.slug}`, title: project.name, description: project.summary, text: `<article><h1>${escape(project.name)}</h1><p>${escape(project.summary)}</p><h2>Problem</h2><p>${escape(project.problem)}</p><h2>Approach</h2><p>${escape(project.approach)}</p><h2>Results</h2><p>${escape(project.outcome)}</p><h2>Trade-offs</h2><ul>${project.limitations.map((value) => `<li>${escape(value)}</li>`).join('')}</ul></article>` }))
const routes = [
  { path: '/', title: 'Home', description: profile.thesis, text: `<h1>${escape(profile.name)}</h1><p>${escape(profile.thesis)}</p><p>${escape(profile.status)}</p><a href="/#work">Work</a><a href="mailto:${escape(profile.email)}">Email</a>` },
  { path: '/about', title: 'About', description: profile.bio[0], text: `<h1>${escape(profile.name)}</h1>${profile.bio.map((p) => `<p>${escape(p)}</p>`).join('')}` },
  { path: '/archive', title: 'Visual archive', description: 'Poster and visual design studies by Karthik Manda.', text: `<h1>Visual archive</h1><p>Poster and visual design studies.</p>` },
  ...projectRoutes,
]
await mkdir(path.join(root, 'og'), { recursive: true })
function ogSvg(title, result) {
  const lines = Array.from({ length: 12 }, (_, j) => {
    const points = Array.from({ length: 16 }, (_, i) => {
      const x = 660 + i * 33 + j * 10
      const y = 370 - j * 14 - Math.sin(i / 2.8) * (18 + j * 1.5)
      return `${x},${Math.round(y)}`
    }).join(' ')
    return `<polyline points="${points}" fill="none" stroke="#B8730F" stroke-opacity="${(0.12 + j * 0.03).toFixed(2)}"/>`
  }).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#000000"/><rect x="28" y="28" width="1144" height="574" fill="none" stroke="#5C6570"/><rect x="28" y="28" width="1144" height="44" fill="#0F2A5C"/><text x="52" y="57" fill="#FFA31A" font-family="monospace" font-size="20">KM ▸ ${escape(title.toUpperCase())}</text>${lines}<text x="54" y="290" fill="#F2F2F2" font-family="monospace" font-size="56" font-weight="600">${escape(title)}</text><text x="54" y="352" fill="#FFA31A" font-family="monospace" font-size="22">${escape(result)}</text><text x="54" y="555" fill="#9AA3AD" font-family="monospace" font-size="18">mvrkarthik.netlify.app</text></svg>`
}
for (const route of routes) {
  const project = projects.find(({ slug }) => route.path === `/work/${slug}`)
  const ogName = project?.slug || 'home'
  await sharp(Buffer.from(ogSvg(route.title === 'Home' ? profile.name : route.title, project?.result || 'COMPUTER ENGINEERING · QUANT · APPLIED AI'))).png().toFile(path.join(root, 'og', `${ogName}.png`))
  const url = `${SITE_URL}${route.path}`
  const fullTitle = `${route.title} — ${profile.name}`
  const image = `${SITE_URL}/og/${ogName}.png`
  const jsonLd = route.path === '/' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, alumniOf: 'Nanyang Technological University', sameAs: [profile.github, profile.linkedin] })}</script>` : ''
  const meta = `<meta name="description" content="${escape(route.description)}"/><link rel="canonical" href="${url}"/><meta property="og:type" content="${project ? 'article' : 'website'}"/><meta property="og:title" content="${escape(fullTitle)}"/><meta property="og:description" content="${escape(route.description)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${image}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(fullTitle)}"/><meta name="twitter:description" content="${escape(route.description)}"/><meta name="twitter:image" content="${image}"/>${jsonLd}`
  const rootMarkup = route.path === '/' ? `<div id="root" data-ssr="true">${homeMarkup}</div>` : `<div id="root">${route.text}</div>`
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(fullTitle)}</title>${meta}`).replace('<div id="root"></div>', rootMarkup)
  if (route.path === '/') html = html.replace(stylesheet[0], `<style>${homeCss}</style>`)
  const destination = route.path === '/' ? path.join(root, 'index.html') : path.join(root, route.path, 'index.html')
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, html)
}
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`)
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${SITE_URL}${route.path}</loc></url>`).join('')}</urlset>`)
console.log(`Pre-rendered ${routes.length} routes and OG images`)
