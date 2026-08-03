import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { workShowcaseProjects } from '../data/workShowcase'

const WorkLink = ({ item, project, onOpenDetails }) => {
  if (item.type === 'modal') {
    return (
      <button type="button" className="project-scroll__link" onClick={() => onOpenDetails(project)}>
        {item.label}
      </button>
    )
  }

  if (item.type === 'internal') {
    return (
      <Link className="project-scroll__link" to={item.href}>
        {item.label}
      </Link>
    )
  }

  if (item.href) {
    return (
      <a className="project-scroll__link" href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    )
  }

  return <span className="project-scroll__link project-scroll__link--disabled">{item.label}</span>
}

const ProjectPanel = ({ project, onOpenDetails }) => (
  <article className="project-panel" aria-live="polite">
    <div className="project-panel__category">{project.category}</div>
    <h3>{project.title}</h3>
    <div className="project-panel__description">{project.description}</div>
    <div className="tag-row">
      {project.tags.map((tag) => (
        <span className="tag-chip" key={`${project.id}-${tag}`}>
          {tag}
        </span>
      ))}
    </div>
    <div className="project-panel__links" aria-label={`${project.title} links`}>
      {project.links.map((item) => (
        <WorkLink key={`${project.id}-${item.label}`} item={item} project={project} onOpenDetails={onOpenDetails} />
      ))}
    </div>
  </article>
)

const ProjectDetailsModal = ({ project, onClose, modalRef }) => {
  if (!project) return null

  const details = project.details || {}
  const sections = [
    { title: 'Overview', body: details.overview || details.detailedDescription || project.secondaryDescription || project.description },
    { title: 'Technical Challenge', body: details.technicalChallenge },
    { title: 'My Contribution', body: details.myContribution },
    { title: 'System Structure', body: details.systemStructure },
    { title: 'Technical Focus', body: details.technicalFocus },
  ].filter((section) => section.body)

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal-shell"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={onClose}
      >
        <div className="surface-card modal-card" ref={modalRef} tabIndex={-1} onClick={(event) => event.stopPropagation()}>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close project details">
            x
          </button>
          <div className="project-panel__category">{project.category}</div>
          <h2 id="project-modal-title">{project.title}</h2>
          <div className="modal-card__lede">{project.secondaryDescription || project.description}</div>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag-chip" key={`${project.id}-modal-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="modal-card__sections">
            {sections.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <div>{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const ProjectScrollDriver = ({ projects = workShowcaseProjects }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const itemRefs = useRef([])
  const modalRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (!mediaQuery.matches) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const nextIndex = Number(visible.target.dataset.projectIndex)
          setActiveIndex(nextIndex)
        }
      },
      {
        root: null,
        rootMargin: '-28% 0px -36% 0px',
        threshold: [0.24, 0.48, 0.72],
      }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [projects])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const setActiveProject = (nextIndex) => {
    const boundedIndex = (nextIndex + projects.length) % projects.length
    setActiveIndex(boundedIndex)
    itemRefs.current[boundedIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      setActiveProject(activeIndex + 1)
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      setActiveProject(activeIndex - 1)
    }
  }

  const activeProject = projects[activeIndex]

  return (
    <>
      <div className="project-scroll" tabIndex={0} onKeyDown={handleKeyDown} aria-label="Project scroll driver">
        <div className="project-scroll__rail" aria-label="Projects">
          <div className="project-scroll__label">Work</div>
          <div className="project-scroll__items">
            {projects.map((project, index) => (
              <article
                key={project.id}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                className={`project-scroll__item${index === activeIndex ? ' is-active' : ''}`}
                data-project-index={index}
              >
                <button type="button" onClick={() => setActiveProject(index)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {project.title}
                </button>
                <div className="project-scroll__mobile-panel">
                  <ProjectPanel project={project} onOpenDetails={setSelectedProject} />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="project-scroll__stage">
          <div className="project-scroll__sticky">
            <ProjectPanel key={activeProject.id} project={activeProject} onOpenDetails={setSelectedProject} />
          </div>
        </div>
      </div>
      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} modalRef={modalRef} />
    </>
  )
}

export default ProjectScrollDriver
