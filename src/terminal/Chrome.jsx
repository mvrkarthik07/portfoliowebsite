import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { mnemonics } from '../content/mnemonics'
import { projects } from '../content/projects'
import { ticker } from '../content/ticker'
import { profile } from '../content/profile'

const keys = [
  ['F1', 'HOME', '/'], ['F2', 'WORK', '/work'], ['F3', 'EXP', '/experience'],
  ['F4', 'ABOUT', '/about'], ['F5', 'CONTACT', '/contact'], ['F6', 'CV', '/resume.pdf'],
]
const commands = [...mnemonics, ...projects.map((project) => ({ command: project.code, aliases: [project.name.toUpperCase()], description: `Open ${project.name}`, shortcut: '' }))]
const isTyping = (target) => target instanceof HTMLElement && (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)
const focusPanel = (id, smooth = true) => {
  const panel = document.getElementById(id)
  if (!panel) return
  panel.scrollIntoView({ behavior: smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant', block: 'start' })
  const heading = panel.querySelector('h2')
  heading?.focus({ preventScroll: true })
  panel.classList.remove('panel-flash')
  void panel.offsetWidth
  panel.classList.add('panel-flash')
}

export default function Chrome({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname.replace(/\/+$/, '') || '/'
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const [error, setError] = useState('')
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(true)
  const [shortcuts, setShortcuts] = useState(() => typeof window === 'undefined' || localStorage.getItem('shortcuts') !== 'off')
  const inputRef = useRef(null)
  const commandBarRef = useRef(null)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const filtered = query.trim() && query.trim() !== '?' ? commands.filter(({ command, aliases, description }) => [command, ...aliases, description].some((x) => x.toLowerCase().includes(query.trim().toLowerCase()))).slice(0, 8) : commands.slice(0, 8)

  useEffect(() => {
    const handler = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])
  useEffect(() => { localStorage.setItem('shortcuts', shortcuts ? 'on' : 'off') }, [shortcuts])
  useEffect(() => {
    if (!open) return
    const dismiss = (event) => { if (!commandBarRef.current?.contains(event.target)) { setOpen(false); setQuery(''); setError(''); inputRef.current?.blur() } }
    const escape = (event) => { if (event.key === 'Escape' && document.activeElement !== inputRef.current) { setOpen(false); setQuery(''); setError('') } }
    document.addEventListener('pointerdown', dismiss, true)
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', dismiss, true); document.removeEventListener('keydown', escape) }
  }, [open])
  useEffect(() => { setOpen(false); inputRef.current?.blur(); window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const first = menuRef.current?.querySelector('a')
    first?.focus()
    const keyHandler = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false); menuButtonRef.current?.focus() }
      if (event.key === 'Tab') {
        const items = [...menuRef.current.querySelectorAll('a, button')]
        if (!items.length) return
        const index = items.indexOf(document.activeElement)
        if (event.shiftKey && index === 0) { event.preventDefault(); items.at(-1).focus() }
        if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); items[0].focus() }
      }
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [menuOpen, setMenuOpen])
  useEffect(() => {
    const found = ['/', '/about', '/archive', '/work', '/experience', '/contact'].includes(pathname) || projects.some((project) => project.caseStudy && pathname === `/work/${project.slug}`) || /^\/experience\/[^/]+$/.test(pathname)
    if (!found) { setQuery(pathname); setError(`Route "${pathname}" not found. Try WORK, EXP, MSG, or HELP.`) }
  }, [pathname])
  useEffect(() => {
    if (!location.hash || pathname !== '/') return
    const id = location.hash.slice(1)
    const timer = setTimeout(() => focusPanel(id, false), 50)
    return () => clearTimeout(timer)
  }, [pathname, location.hash])

  const goPanel = useCallback((id) => {
    setOpen(false); setMenuOpen(false)
    if (pathname !== '/') navigate(`/#${id}`)
    else { navigate(`/#${id}`); setTimeout(() => focusPanel(id), 0) }
  }, [pathname, navigate, setMenuOpen])
  const execute = (raw) => {
    const value = raw.trim().toUpperCase()
    if (!value) return
    setError(''); setOpen(false); setQuery('')
    const item = commands.find(({ command, aliases }) => command === value || aliases.includes(value))
    if (!item) { setError(`Unknown command "${value}". Try HELP.`); return }
    const cmd = item.command
    if (cmd === 'WORK') navigate('/work')
    else if (cmd === 'EXP') navigate('/experience')
    else if (cmd === 'MSG') navigate('/contact')
    else if (cmd === 'CV') window.open(profile.resume, '_blank', 'noopener,noreferrer')
    else if (cmd === 'ABOUT') navigate('/about')
    else if (cmd === 'ARCH') navigate('/archive')
    else if (cmd === 'BRAIN') { goPanel('positions'); setTimeout(() => document.getElementById('position-1')?.click(), 100) }
    else if (cmd === 'HELP') { setQuery('HELP'); setOpen(true) }
    else { const project = projects.find(({ code }) => code === cmd); if (project?.caseStudy) navigate(`/work/${project.slug}`); else navigate('/work') }
  }
  useEffect(() => {
    const handler = (event) => {
      if (event.metaKey || event.ctrlKey) {
        if (event.key.toLowerCase() === 'k' && (!isTyping(event.target) || event.target === inputRef.current)) { event.preventDefault(); setOpen(true); inputRef.current?.focus() }
        return
      }
      if (event.altKey || event.shiftKey || isTyping(event.target) || menuOpen || !shortcuts) return
      if (event.key === '/') { event.preventDefault(); setOpen(true); inputRef.current?.focus() }
      if (/^[1-6]$/.test(event.key)) {
        event.preventDefault()
        if (event.key === '6') navigate('/contact')
        else if (pathname !== '/') { if (event.key === '1') navigate('/') }
        else goPanel(['des', 'positions', 'work', 'signals', 'exp'][Number(event.key) - 1])
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [pathname, menuOpen, shortcuts, navigate, goPanel])
  const onInputKey = (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); setSelected((n) => Math.min(n + 1, filtered.length - 1)) }
    if (event.key === 'ArrowUp') { event.preventDefault(); setSelected((n) => Math.max(n - 1, 0)) }
    if (event.key === 'Enter') { event.preventDefault(); execute(filtered[selected]?.command && open && query !== 'HELP' ? filtered[selected].command : query) }
    if (event.key === 'Escape') { if (query || open) { setQuery(''); setOpen(false); setError('') } else inputRef.current?.blur() }
  }
  const navLink = ([fkey, label, href]) => href.endsWith('.pdf') ? <a key={fkey} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} PDF, opens in new tab`}><span className="keycap">{fkey}</span><span>{label}</span></a> : <Link key={fkey} to={href} onClick={() => { setMenuOpen(false); setOpen(false) }} className={pathname === href || (href !== '/' && !href.includes('#') && pathname.startsWith(`${href}/`)) ? 'active' : ''}><span className="keycap">{fkey}</span><span>{label}</span></Link>
  return <header className="chrome">
    <div className="commandbar" ref={commandBarRef}>
      <Link className="brand" to="/" aria-label="Karthik Manda home">KM ▸</Link>
      <div className={`command-field ${open ? 'is-open' : ''}`}>
        <input ref={inputRef} role="combobox" aria-label="Command" aria-autocomplete="list" aria-expanded={open} aria-controls="command-list" aria-activedescendant={open && filtered[selected] ? `command-${selected}` : undefined} placeholder="type a command: WORK, CV, MSG…" value={query} onChange={(e) => { setQuery(e.target.value); setSelected(0); setError(''); setOpen(true) }} onFocus={() => setOpen(true)} onKeyDown={onInputKey} />
        <button className="mobile-command" type="button" aria-expanded={open} aria-controls="command-list" onClick={() => { if (open) { setOpen(false); setQuery(''); setError(''); inputRef.current?.blur() } else { setOpen(true); inputRef.current?.focus() } }} aria-label={open ? 'Close command palette' : 'Open command palette'}>{open ? '×' : '⌘'}</button>
        {open && <div className="command-dropdown" id="command-list" role="listbox" aria-label="Commands">
          {query === 'HELP' && <button className="shortcut-toggle" type="button" onClick={() => setShortcuts((x) => !x)}>Keyboard shortcuts: {shortcuts ? 'on' : 'off'}</button>}
          {filtered.map((item, index) => <button type="button" id={`command-${index}`} role="option" aria-selected={index === selected} className={index === selected ? 'selected' : ''} key={item.command} onMouseDown={(e) => e.preventDefault()} onClick={() => execute(item.command)}><strong>{item.command}</strong><span>{item.description}</span><small>{item.shortcut}</small></button>)}
        </div>}
      </div>
      <button className="run-key" type="button" onClick={() => execute(query)}>RUN</button>
      <span className="command-hint">⌘K</span>
    </div>
    {error && <div className="command-error" role="status">{error}</div>}
    <nav className="function-nav" aria-label="Main navigation">
      <div className="desktop-keys">{keys.map(navLink)}</div>
      <button className={`menu-key ${menuOpen ? 'active' : ''}`} ref={menuButtonRef} type="button" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((x) => !x)}><span className="keycap">{menuOpen ? '×' : '≡'}</span>{menuOpen ? 'CLOSE' : 'MENU'}</button>
      <span className="availability"><i />{profile.availability}</span>
    </nav>
    <div className="ticker" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className={`ticker-track ${paused || !visible ? 'paused' : ''}`} aria-hidden="true">{[0, 1].map((copy) => <div className="ticker-set" key={copy}>{ticker.map((item) => <span key={item}><b>{item.split(' ')[0]}</b> {item.slice(item.indexOf(' ') + 1)}</span>)}</div>)}</div>
      <button type="button" className="ticker-toggle" aria-label={paused ? 'Play ticker' : 'Pause ticker'} onClick={() => setPaused((x) => !x)}>{paused ? '▶' : '‖'}</button>
    </div>
    {menuOpen && <div id="mobile-navigation" className="mobile-navigation" ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigation"><nav aria-label="Mobile navigation">{keys.map(navLink)}</nav><p><i />{profile.availability}</p></div>}
  </header>
}
