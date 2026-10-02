import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import archive from '../content/archive.json'

export function AboutPage() {
  const skills = [
    ['Quant research', 'Alpha factors', 'MADDPG', 'Pandas', 'Backtesting'],
    ['Applied AI', 'Python', 'Ollama', 'AST', 'FastAPI'],
    ['Product engineering', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    ['Embedded systems', 'C', 'C++', 'STM32', 'CAN bus'],
  ]
  return <div className="inner-page about-page"><section className="page-panel about-header"><div className="panel-header"><span className="panel-mnemonic">ABOUT</span><span>Profile</span></div><div className="about-header-body"><div><p className="prompt">~ $ cat profile</p><h1>Karthik Manda</h1><p className="thesis">{profile.thesis}</p>{profile.bio.map((paragraph) => <p className="prose" key={paragraph}>{paragraph}</p>)}</div><img src="/Images/PP.jpg" width="420" height="420" alt="Portrait of Karthik Manda" /></div></section><section className="page-panel"><div className="panel-header"><h2>Skills matrix</h2></div><div className="skills-matrix">{skills.map(([domain, ...items]) => <div key={domain}><h3>{domain}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section><section className="page-panel"><div className="panel-header"><h2>Education</h2></div><div className="education-row"><span>NTU</span><p>{profile.education}</p></div></section><Link className="archive-link" to="/archive">Visual work →</Link></div>
}
const sourceSet = (variants) => variants.map(({ src, width }) => `${src} ${width}w`).join(', ')
export function ArchivePage() {
  const [selected, setSelected] = useState(-1)
  const tileRefs = useRef([])
  const closeRef = useRef(null)
  const returnFocusRef = useRef(null)
  useEffect(() => {
    if (selected < 0) {
      if (returnFocusRef.current) { const target = returnFocusRef.current; returnFocusRef.current = null; requestAnimationFrame(() => target.focus()) }
      return
    }
    closeRef.current?.focus()
    const background = [document.querySelector('.chrome'), document.querySelector('.archive-page > .page-panel'), document.querySelector('.archive-grid'), document.querySelector('.statusbar')]
    background.forEach((element) => element?.setAttribute('inert', ''))
    const handler = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); returnFocusRef.current = tileRefs.current[selected]; setSelected(-1) }
      if (event.key === 'ArrowRight') setSelected((x) => (x + 1) % archive.length)
      if (event.key === 'ArrowLeft') setSelected((x) => (x - 1 + archive.length) % archive.length)
      if (event.key === 'Tab') { const buttons = [...document.querySelectorAll('.lightbox button')]; const index = buttons.indexOf(document.activeElement); if (event.shiftKey && index === 0) { event.preventDefault(); buttons.at(-1)?.focus() } if (!event.shiftKey && index === buttons.length - 1) { event.preventDefault(); buttons[0]?.focus() } }
    }
    document.addEventListener('keydown', handler)
    return () => { document.removeEventListener('keydown', handler); background.forEach((element) => element?.removeAttribute('inert')) }
  }, [selected])
  const close = () => { returnFocusRef.current = tileRefs.current[selected]; setSelected(-1) }
  return <div className="inner-page archive-page"><div className="page-panel"><div className="panel-header"><span className="panel-mnemonic">ARCH</span><span>Visual work</span></div><div className="archive-intro"><h1>Visual archive</h1><p>Poster and visual design studies.</p></div></div><div className="archive-grid">{archive.map((item, index) => <button className="archive-tile" type="button" key={item.title} ref={(node) => { tileRefs.current[index] = node }} onClick={() => setSelected(index)} aria-label={`View ${item.title}`}><picture><source type="image/avif" srcSet={sourceSet(item.variants.avif)} sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw" /><source type="image/webp" srcSet={sourceSet(item.variants.webp)} sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw" /><img src={item.variants.webp[0].src} width={item.variants.webp[0].width} height={item.variants.webp[0].height} alt="" loading={index < 2 ? 'eager' : 'lazy'} decoding="async" /></picture><span><strong>{item.title}</strong><small>Poster study</small></span></button>)}</div>{selected >= 0 && <div className="lightbox-backdrop" onMouseDown={close}><div className="lightbox" role="dialog" aria-modal="true" aria-label={`${archive[selected].title} poster preview`} onMouseDown={(e) => e.stopPropagation()}><button type="button" ref={closeRef} onClick={close} aria-label="Close poster preview">[ESC] CLOSE</button><picture><source type="image/avif" srcSet={sourceSet(archive[selected].variants.avif)} sizes="100vw" /><source type="image/webp" srcSet={sourceSet(archive[selected].variants.webp)} sizes="100vw" /><img src={archive[selected].variants.webp[2].src} width={archive[selected].variants.webp[2].width} height={archive[selected].variants.webp[2].height} alt={archive[selected].title} /></picture><p>{archive[selected].title}</p><div><button type="button" onClick={() => setSelected((selected - 1 + archive.length) % archive.length)} aria-label="Previous poster">← PREV</button><button type="button" onClick={() => setSelected((selected + 1) % archive.length)} aria-label="Next poster">NEXT →</button></div></div></div>}</div>
}
export function CaseStudyPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((entry) => entry.slug === slug && entry.caseStudy)
  useEffect(() => { const handler = (event) => { if (event.key === 'Escape' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) navigate('/work') }; document.addEventListener('keydown', handler); return () => document.removeEventListener('keydown', handler) }, [navigate])
  if (!project) return <NotFoundPage />
  const next = projects.slice(projects.indexOf(project) + 1).find((entry) => entry.caseStudy) || projects.find((entry) => entry.caseStudy)
  return <article className="inner-page case-page"><div className="page-panel"><div className="panel-header"><span className="panel-mnemonic">WORK ▸ {project.code}</span><span>{project.name}</span><Link to="/work" className="panel-back">[ESC] BACK</Link></div><div className="case-intro"><div><p className="prompt">~ $ open {project.code.toLowerCase()}</p><h1>{project.name}</h1><p className="thesis">{project.summary}</p></div><dl>{[['ROLE', project.role], ['PERIOD', project.period], ['STACK', project.stack], ['STATUS', project.result]].map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></div></div><div className="case-grid"><section className="page-panel"><div className="panel-header"><h2>Problem</h2></div><p>{project.problem}</p></section><section className="page-panel"><div className="panel-header"><h2>Approach</h2></div><p>{project.approach}</p></section></div><section className="page-panel"><div className="panel-header"><h2>Architecture</h2></div><div className="architecture" role="img" aria-label={`${project.name} architecture`}><span>INPUT</span><b>→</b><span>{project.stack.split(',')[0]}</span><b>→</b><span>OUTPUT</span></div><ol className="decision-list">{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol></section><section className="page-panel"><div className="panel-header"><h2>Results</h2></div><table className="fact-table"><tbody>{project.facts.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td className={label.toLowerCase().includes('drawdown') ? 'negative' : ''}>{value}</td></tr>)}</tbody></table><p className="result-note">{project.outcome}</p></section><section className="page-panel"><div className="panel-header"><h2>Trade-offs</h2></div><ul className="decision-list">{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul></section><section className="page-panel"><div className="panel-header"><h2>Links</h2></div><div className="case-links">{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">{project.name} source code ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">{project.name} live site ↗</a>}{project.package && <a href={project.package} target="_blank" rel="noopener noreferrer">{project.name} PyPI package ↗</a>}</div></section><nav className="case-next" aria-label="Case study navigation"><Link to="/work">← All work</Link><Link to={`/work/${next.slug}`}>Next: {next.name} →</Link></nav></article>
}
export function NotFoundPage() { return <div className="inner-page"><section className="page-panel not-found"><div className="panel-header"><span className="panel-mnemonic">ERROR</span><span>Route not found</span></div><div><h1>Route not found</h1><p>Try WORK, EXP, MSG, or HELP.</p><Link to="/">[F1] HOME</Link></div></section></div> }
