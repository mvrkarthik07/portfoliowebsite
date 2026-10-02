import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../content/projects'
import { profile } from '../content/profile'
export const SITE_URL = 'https://mvrkarthik.netlify.app'
function setMeta(selector, attrs, value) {
  let element = document.head.querySelector(selector)
  if (!element) { element = document.createElement(attrs.href ? 'link' : 'meta'); for (const [key, item] of Object.entries(attrs)) element.setAttribute(key, item); document.head.appendChild(element) }
  element.setAttribute(attrs.href ? 'href' : 'content', value)
}
export default function Meta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const project = projects.find(({ slug }) => pathname === `/work/${slug}`)
    const page = pathname === '/' ? 'Home' : pathname === '/about' ? 'About' : pathname === '/archive' ? 'Visual archive' : project?.name || 'Route not found'
    const description = project?.summary || (pathname === '/about' ? profile.bio[0] : pathname === '/archive' ? 'Poster and visual design studies by Karthik Manda.' : profile.thesis)
    const title = `${page} — ${profile.name}`
    const url = new URL(pathname, SITE_URL).href
    const image = `${SITE_URL}/og/${project?.slug || 'home'}.png`
    document.title = title
    setMeta('meta[name="description"]', { name: 'description' }, description)
    setMeta('link[rel="canonical"]', { rel: 'canonical', href: '' }, url)
    for (const [name, value] of Object.entries({ 'og:type': project ? 'article' : 'website', 'og:title': title, 'og:description': description, 'og:url': url, 'og:image': image })) setMeta(`meta[property="${name}"]`, { property: name }, value)
    for (const [name, value] of Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': title, 'twitter:description': description, 'twitter:image': image })) setMeta(`meta[name="${name}"]`, { name }, value)
    let json = document.head.querySelector('script[type="application/ld+json"]')
    if (pathname === '/') {
      if (!json) { json = document.createElement('script'); json.type = 'application/ld+json'; document.head.appendChild(json) }
      json.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, alumniOf: 'Nanyang Technological University', sameAs: [profile.github, profile.linkedin] })
    } else json?.remove()
  }, [pathname])
  return null
}
