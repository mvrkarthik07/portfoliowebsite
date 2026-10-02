import { BUILD_DATE } from '../generated/buildInfo'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import Panel from './Panel'
import VolSurface from './VolSurface'
import ContactForm from '../components/ContactForm'
import { profile } from '../content/profile'
import { positions } from '../content/positions'
import { projects } from '../content/projects'
import { signals } from '../content/signals'
import { experience } from '../content/experience'
import activity from '../content/activity.json'

const filters = ['all', 'quant', 'ai', 'systems', 'web']
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const copy = async (value, setCopied) => { try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { window.location.href = `mailto:${value}` } }

function DesPanel() {
  return <Panel number="1" id="des" mnemonic="DES" title="Profile" className="profile-panel"><VolSurface /><div className="hero-copy"><p className="prompt">~ $ whoami</p><h1>Karthik<br />Manda</h1><p className="thesis">{profile.thesis}</p><p className="current">{profile.status}</p><div className="hero-actions"><a className="primary-action" href="#work">[F2] SEE THE WORK</a><a className="secondary-action" href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="Résumé PDF, opens in new tab">[F6] RÉSUMÉ PDF</a></div></div><div className="axis-label strike" aria-hidden="true">STRIKE</div><div className="axis-label maturity" aria-hidden="true">MATURITY</div><div className="axis-label implied" aria-hidden="true">IMPLIED VOL</div></Panel>
}
function PositionsPanel() {
  const [open, setOpen] = useState(-1)
  return <Panel number="2" id="positions" mnemonic="POS" title="Positions" meta={`AS OF ${BUILD_DATE}`}><div className="table-scroll"><table className="positions-table"><thead><tr><th>FIRM</th><th>ROLE</th><th>STATUS</th><th>SINCE</th></tr></thead><tbody>{positions.map((position, index) => <tr key={position.firm} className={open === index ? 'expanded' : ''}><td colSpan="4"><button id={`position-${index}`} type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{position.firm}</span><span>{position.role}</span><span className={position.status === 'LIVE' ? 'live' : ''}>{position.status}</span><span>{position.since}</span></button><AnimatePresence initial={false}>{open === index && <m.p initial={reduced() ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduced() ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.14 }}>{position.detail}</m.p>}</AnimatePresence></td></tr>)}</tbody></table></div></Panel>
}
function WorkPanel() {
  const [params, setParams] = useSearchParams()
  const filter = filters.includes(params.get('f')) ? params.get('f') : 'all'
  const [open, setOpen] = useState(null)
  const [sort, setSort] = useState('featured')
  const visible = projects.filter((project) => filter === 'all' || project.domain === filter).sort((a, b) => sort === 'project' ? a.name.localeCompare(b.name) : sort === 'domain' ? a.domain.localeCompare(b.domain) : 0)
  const setFilter = (value) => { const next = new URLSearchParams(params); if (value === 'all') next.delete('f'); else next.set('f', value); setParams(next, { replace: true }); setOpen(null) }
  const meta = <div className="filter-row" aria-label="Project filters">{filters.map((value) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value.toUpperCase()}</button>)}</div>
  return <Panel number="3" id="work" mnemonic="WORK" title="Work" meta={meta}>
    <div className="work-table-wrap"><table className="work-table"><thead><tr><th aria-sort={sort === 'project' ? 'ascending' : 'none'}><button type="button" onClick={() => setSort(sort === 'project' ? 'featured' : 'project')}>PROJECT</button></th><th aria-sort={sort === 'domain' ? 'ascending' : 'none'}><button type="button" onClick={() => setSort(sort === 'domain' ? 'featured' : 'domain')}>DOMAIN</button></th><th>STACK</th><th>RESULT</th><th>LINKS</th></tr></thead><tbody>{visible.map((project) => <tr key={project.slug} className={open === project.slug ? 'expanded' : ''}><td colSpan="5"><div className="work-row"><button className="work-name" type="button" aria-label={`${project.name} — details`} aria-expanded={open === project.slug} onClick={() => setOpen(open === project.slug ? null : project.slug)}><span className="chevron">›</span><strong>{project.name}</strong></button><span className="domain">{project.domain.toUpperCase()}</span><span className="stack">{project.stack}</span><span className="result">{project.result}</span><span className="row-links">{project.caseStudy && <Link to={`/work/${project.slug}`} aria-label={`${project.name} — case study`}>CASE</Link>}{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — source code`}>SRC</a>}{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — live site`}>LIVE</a>}{project.package && <a href={project.package} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — PyPI package`}>PYPI</a>}</span></div><AnimatePresence initial={false}>{open === project.slug && <m.div className="work-expanded" initial={reduced() ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduced() ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.14 }}><div>{[['PROBLEM', project.problem], ['APPROACH', project.approach], ['RESULT', project.outcome]].map(([label, value]) => <p key={label}><small>{label}</small>{value}</p>)}</div>{project.caseStudy && <Link to={`/work/${project.slug}`}>Open {project.name} case study ↗</Link>}</m.div>}</AnimatePresence></td></tr>)}</tbody></table>{visible.length === 0 && <div className="empty-state">No projects tagged {filter.toUpperCase()} yet. <button onClick={() => setFilter('all')}>SHOW ALL</button></div>}</div>
  </Panel>
}
function ActivityChart() {
  if (!activity.length) return null
  const max = Math.max(...activity.map((point) => point.count), 1)
  const points = activity.map((point, index) => `${(index / (activity.length - 1)) * 100},${44 - point.count / max * 40}`).join(' ')
  return <div className="activity"><h3>Commits per week, last 26 weeks</h3><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-label="Weekly GitHub commit counts"><polyline points={points} fill="none" stroke="var(--amber)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg><div><span>{activity[0].week}</span><span>MAX {max}</span><span>{activity.at(-1).week}</span></div><div className="activity-weeks">{activity.map(({ week, count }) => <span key={week} tabIndex="0" title={`${week}: ${count} commits`} aria-label={`${week}: ${count} commits`} />)}</div></div>
}
function SignalsPanel() { return <Panel number="4" id="signals" mnemonic="SIG" title="Signals"><div className="signal-grid">{signals.map(({ value, label }) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><ActivityChart /></Panel> }
function ExperiencePanel() { return <Panel number="5" id="exp" mnemonic="EXP" title="Experience"><div className="experience-ledger">{experience.map(({ period, role, org, live, bullets }) => <article key={org}><time>{period}</time><div><h3>{role} {live && <small className="live">LIVE</small>}</h3><p className="org">{org}</p><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></Panel> }
function MessagePanel() {
  const [copied, setCopied] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  return <Panel number="6" id="msg" mnemonic="MSG" title="Contact"><p className="contact-lead">Hiring for quant research, wealth-tech or applied AI in 2027? Email is fastest.</p><div className="channels"><button type="button" onClick={() => copy(profile.email, setCopied)}><span>{profile.email}</span><small>{copied ? 'COPIED' : 'COPY'}</small></button><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda on LinkedIn, opens in new tab"><span>LinkedIn</span><small>OPEN ↗</small></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda on GitHub, opens in new tab"><span>GitHub</span><small>OPEN ↗</small></a><a href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda résumé PDF, opens in new tab"><span>Résumé</span><small>PDF ↗</small></a></div><p className="copy-status" aria-live="polite">{copied ? 'Copied' : ''}</p><button className="form-toggle" type="button" aria-expanded={formOpen} onClick={() => setFormOpen((x) => !x)}>{formOpen ? 'Close message form' : 'Send a message'}</button>{formOpen && <div className="inline-form"><ContactForm /></div>}</Panel>
}
export default function Home() {
  useEffect(() => { document.title = 'Home — Karthik Manda' }, [])
  return <div className="workspace"><DesPanel /><PositionsPanel /><WorkPanel /><SignalsPanel /><ExperiencePanel /><MessagePanel /></div>
}
