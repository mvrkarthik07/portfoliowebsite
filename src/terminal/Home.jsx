import { BUILD_DATE } from '../generated/buildInfo'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import Panel from './Panel'
import VolSurface from './VolSurface'
import { profile } from '../content/profile'
import { positions } from '../content/positions'
import { projects } from '../content/projects'
import { signals } from '../content/signals'
import { experience } from '../content/experience'
import activity from '../content/activity.json'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const copy = async (value, setCopied) => { try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { window.location.href = `mailto:${value}` } }

function DesPanel() {
  return <Panel number="1" id="des" mnemonic="DES" title="Profile" className="profile-panel"><VolSurface /><div className="hero-copy"><p className="prompt">~ $ whoami</p><h1>Karthik<br />Manda</h1><p className="thesis">{profile.thesis}</p><p className="current">{profile.status}</p><div className="hero-actions"><Link className="primary-action" to="/work">[F2] EXPLORE WORK</Link><Link className="secondary-action" to="/experience">[F3] EXPERIENCE</Link></div><Link className="home-archive-link" to="/archive">VISUAL ARCHIVE <span>Posters and design studies ↗</span></Link></div></Panel>
}
function PositionsPanel() {
  const [open, setOpen] = useState(-1)
  return <Panel number="2" id="positions" mnemonic="POS" title="Positions" meta={`AS OF ${BUILD_DATE}`}><div className="table-scroll"><table className="positions-table"><thead><tr><th>FIRM</th><th>ROLE</th><th>STATUS</th><th>SINCE</th></tr></thead><tbody>{positions.map((position, index) => <tr key={position.firm} className={open === index ? 'expanded' : ''}><td colSpan="4"><button id={`position-${index}`} type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{position.firm}</span><span>{position.role}</span><span className={position.status === 'LIVE' ? 'live' : ''}>{position.status}</span><span>{position.since}</span></button><AnimatePresence initial={false}>{open === index && <m.p initial={reduced() ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduced() ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.14 }}>{position.detail}</m.p>}</AnimatePresence></td></tr>)}</tbody></table></div><Link className="panel-more" to="/experience">All experience →</Link></Panel>
}
function WorkPanel() {
  return <Panel number="3" id="work" mnemonic="WORK" title="Selected work" meta={<Link className="panel-header-link" to="/work">ALL PROJECTS ↗</Link>}><div className="preview-list">{projects.slice(0, 3).map((project) => <article className="preview-row" key={project.slug}><div><span className="directory-code">{project.code}</span><span className="directory-domain">{project.domain.toUpperCase()}</span></div><h3>{project.name}</h3><p>{project.summary}</p><span className="preview-result">{project.result}</span>{project.caseStudy && <Link to={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>View project ↗</Link>}</article>)}</div><Link className="panel-more" to="/work">Explore all {projects.length} projects →</Link></Panel>
}
function ActivityChart() {
  if (!activity.length) return null
  const max = Math.max(...activity.map((point) => point.count), 1)
  const points = activity.map((point, index) => `${(index / (activity.length - 1)) * 100},${44 - point.count / max * 40}`).join(' ')
  return <div className="activity"><h3>Commits per week, last 26 weeks</h3><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-label="Weekly GitHub commit counts"><polyline points={points} fill="none" stroke="var(--up)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg><div><span>{activity[0].week}</span><span>MAX {max}</span><span>{activity.at(-1).week}</span></div><div className="activity-weeks">{activity.map(({ week, count }) => <span key={week} tabIndex="0" title={`${week}: ${count} commits`} aria-label={`${week}: ${count} commits`} />)}</div></div>
}
function SignalsPanel() { return <Panel number="4" id="signals" mnemonic="SIG" title="Signals"><div className="signal-grid">{signals.map(({ value, label }) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><ActivityChart /></Panel> }
function ExperiencePanel() {
  return <Panel number="5" id="exp" mnemonic="EXP" title="Experience" meta={<Link className="panel-header-link" to="/experience">ALL ROLES ↗</Link>}><div className="experience-preview">{experience.filter((item) => item.featured).map((item) => <Link to={`/experience/${item.slug}`} className="experience-preview-row" key={item.slug}><span className="experience-preview-status">{item.live ? 'CURRENT' : 'COMPLETED'}</span><strong>{item.role}</strong><span>{item.org}</span><span className="experience-preview-arrow">↗</span></Link>)}</div><Link className="panel-more" to="/experience">Professional and campus experience →</Link></Panel>
}
function MessagePanel() {
  const [copied, setCopied] = useState(false)
  return <Panel number="6" id="msg" mnemonic="MSG" title="Contact" meta={<Link className="panel-header-link" to="/contact">OPEN CONTACT ↗</Link>}><p className="contact-lead">Open to 2028 full-time roles in quant research, wealth technology and applied AI.</p><div className="channels"><button type="button" onClick={() => copy(profile.email, setCopied)}><span>{profile.email}</span><small>{copied ? 'COPIED' : 'COPY'}</small></button><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda on LinkedIn, opens in new tab"><span>LinkedIn</span><small>OPEN ↗</small></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda on GitHub, opens in new tab"><span>GitHub</span><small>OPEN ↗</small></a><a href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="Karthik Manda résumé PDF, opens in new tab"><span>Résumé</span><small>PDF ↗</small></a></div><p className="copy-status" aria-live="polite">{copied ? 'Copied' : ''}</p><Link className="panel-more" to="/contact">Send a message →</Link></Panel>
}
export default function Home() { return <div className="workspace"><DesPanel /><PositionsPanel /><WorkPanel /><SignalsPanel /><ExperiencePanel /><MessagePanel /></div> }
