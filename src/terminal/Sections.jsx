import { Link, useParams, useSearchParams } from 'react-router-dom'
import { projects } from '../content/projects'
import { experience } from '../content/experience'
import { NotFoundPage } from './Pages'

const filters = ['all', 'quant', 'ai', 'systems', 'web']

export function WorkPage() {
  const [params, setParams] = useSearchParams()
  const filter = filters.includes(params.get('f')) ? params.get('f') : 'all'
  const visible = projects.filter((project) => filter === 'all' || project.domain === filter)
  const chooseFilter = (value) => setParams(value === 'all' ? {} : { f: value }, { replace: true })
  return <div className="inner-page directory-page">
    <header className="directory-intro"><p className="prompt">~ $ ls work/</p><h1>Work</h1><p>Systems, AI, quant research and web products. Browse the case studies and source code.</p></header>
    <div className="directory-toolbar"><span>{visible.length} PROJECTS</span><div className="directory-filters" aria-label="Project filters">{filters.map((value) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => chooseFilter(value)}>{value.toUpperCase()}</button>)}</div></div>
    <div className="directory-list">{visible.map((project) => <article className="directory-item" key={project.slug}>
      <div className="directory-item-top"><span className="directory-code">{project.code}</span><span className="directory-domain">{project.domain.toUpperCase()}</span><span className={project.result === 'LIVE' || project.result === 'PUBLISHED ON PYPI' ? 'directory-status positive' : 'directory-status'}>{project.result}</span></div>
      <div className="directory-item-body"><div><h2>{project.name}</h2><p>{project.summary}</p></div><div className="directory-item-actions">{project.caseStudy && <Link to={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>View project ↗</Link>}{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code, opens in new tab`}>Source ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live site, opens in new tab`}>Live ↗</a>}{project.package && <a href={project.package} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} PyPI package, opens in new tab`}>PyPI ↗</a>}</div></div>
      <div className="directory-stack">{project.stack}</div>
    </article>)}</div>
  </div>
}

export function ExperiencePage() {
  return <div className="inner-page directory-page"><header className="directory-intro"><p className="prompt">~ $ ls experience/</p><h1>Experience</h1><p>Professional work and campus leadership, with a page for each role.</p></header>
    {['Professional', 'Campus leadership'].map((category) => <section className="experience-group" key={category} aria-label={category}><div className="directory-toolbar"><h2>{category}</h2><span>{experience.filter((item) => item.category === category).length} ROLES</span></div><div className="directory-list">{experience.filter((item) => item.category === category).map((item) => <article className="directory-item experience-item" key={item.slug}><div className="directory-item-top">{item.period && <span className="directory-code">{item.period}</span>}<span className={item.live ? 'directory-status positive' : 'directory-status'}>{item.live ? 'CURRENT' : 'COMPLETED'}</span></div><div className="directory-item-body"><div><h3>{item.role}</h3><p className="experience-org">{item.org}</p><p>{item.summary}</p></div><div className="directory-item-actions"><Link to={`/experience/${item.slug}`} aria-label={`Read about ${item.role} at ${item.org}`}>View role ↗</Link></div></div></article>)}</div></section>)}
  </div>
}

export function ExperienceDetailPage() {
  const { slug } = useParams()
  const item = experience.find((entry) => entry.slug === slug)
  if (!item) return <NotFoundPage />
  return <article className="inner-page detail-page"><Link className="directory-back" to="/experience">← All experience</Link><header className="detail-intro"><p className="prompt">~ $ open experience/{item.slug}</p><span className="directory-code">{item.category}</span><h1>{item.role}</h1><p className="detail-org">{item.org}</p><p className="detail-summary">{item.summary}</p><div className="detail-meta"><span className={item.live ? 'positive' : ''}>{item.live ? 'CURRENT' : 'COMPLETED'}</span>{item.period && <span>{item.period}</span>}</div></header><section className="detail-section"><h2>What I do</h2><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></section><nav className="detail-next"><Link to="/experience">← Experience</Link><Link to="/work">Explore work →</Link></nav></article>
}
