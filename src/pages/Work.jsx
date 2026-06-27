import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'

const projectFromData = (id) => getProjectById(id) || {}

const sourceProjects = {
  studyhavn: projectFromData('studyhavn'),
  coverbuddy: projectFromData('coverbuddy'),
  citydrip: projectFromData('citydrip'),
  portfolio: projectFromData('portfolio'),
  parklah: projectFromData('fullstack-app'),
  internship: projectFromData('java-cli-system'),
  roleaudit: projectFromData('roleaudit'),
  heliodesk: projectFromData('heliodesk'),
  coderecon: projectFromData('coderecon'),
  scdf: projectFromData('scdf-dashboard'),
  seniorconnect: projectFromData('senior-community-app'),
  archlab: projectFromData('archlab'),
  gobusiness: projectFromData('gobusiness-ux-audit'),
}

const link = (label, href, type = href ? 'external' : 'disabled') => ({ label, href, type })

const workSections = [
  {
    id: 'featured',
    index: '01',
    title: 'Featured Engineering Projects',
    description:
      'Engineering builds using PyTorch MADDPG, Python AST analysis, Swift 6, FastAPI, STM32, and Raspberry Pi.',
    layout: 'featured',
    projects: [
      {
        id: 'multi-agent-rl-trading-system',
        category: 'AI / QUANT SYSTEM',
        title: 'Multi-Agent RL Trading System',
        description: 'A PyTorch MADDPG trading system for coordinated portfolio decisions across 50+ assets.',
        secondaryDescription: 'Built OHLCV feature pipelines, portfolio-level reward shaping, and benchmark evaluation against single-agent baselines.',
        tags: ['Python', 'PyTorch', 'MADDPG', 'Pandas', 'Quant Research'],
        links: [link('Details', null, 'modal')],
      },
      {
        id: 'coderecon',
        category: 'STATIC ANALYSIS / LOCAL LLM',
        title: 'CodeRecon',
        description: 'A deterministic static analysis engine layered with local LLM inference for architecture review and refactor planning.',
        secondaryDescription: 'Parses repositories with Python AST, maps structural anti-patterns, detects complexity hotspots, and generates zero-cloud refactor suggestions.',
        tags: ['Python', 'AST', 'Ollama', 'Llama', 'GitHub Actions'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.coderecon.githubLink), link('Demo', sourceProjects.coderecon.projectLink)],
        details: sourceProjects.coderecon,
      },
      {
        id: 'archlab',
        category: 'SWIFT STUDENT CHALLENGE WINNER',
        title: 'ArchLab',
        description: 'Apple Swift Student Challenge 2026 winning simulation engine for visualizing software architecture failures and optimization paths.',
        secondaryDescription: 'Built with Swift 6 concurrency, real-time simulation logic, and production-grade UI/UX principles.',
        tags: ['Swift', 'Simulation', 'Systems Design', 'UI/UX'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.archlab.githubLink)],
        details: sourceProjects.archlab,
      },
      {
        id: 'coverbuddy',
        category: 'AI WRITING TOOL',
        title: 'CoverBuddy',
        description: 'A full-stack platform for generating tailored cover letters from resume evidence and job-role context.',
        secondaryDescription: 'Combines resume parsing, evidence selection, AI-assisted drafting, editing, saving, and PDF export into a structured workflow.',
        tags: ['React', 'AI Workflow', 'Resume Parsing', 'PDF Export'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.coverbuddy.githubLink), link('Demo', sourceProjects.coverbuddy.projectLink)],
        details: sourceProjects.coverbuddy,
      },
      {
        id: 'stm32-gimbal-self-levelling-system',
        category: 'EMBEDDED CONTROL SYSTEM',
        title: 'STM32 Gimbal Self-Levelling System',
        description: 'A bare-metal STM32 self-levelling gimbal using PID control and IMU sensor fusion.',
        secondaryDescription: 'Configured TIM, RCC, and GPIO registers directly for PWM motor control, with FreeRTOS tasks for sensor polling, motor actuation, and telemetry.',
        tags: ['Bare-Metal C', 'STM32', 'FreeRTOS', 'I2C', 'PWM', 'PID'],
        links: [link('Details', null, 'modal')],
      },
      {
        id: 'embedded-linux-client-server-defuse-system',
        category: 'EMBEDDED LINUX',
        title: 'Embedded Linux Client-Server & Defuse System',
        description: 'A Raspberry Pi hardware application using TCP sockets for real-time client-server sensor data streaming.',
        secondaryDescription: 'Integrated GPIO input, buzzer/LED output, timer logic, countdown states, and pass/fail event handling.',
        tags: ['C', 'Raspberry Pi', 'TCP Sockets', 'GPIO'],
        links: [link('Details', null, 'modal')],
      },
    ],
  },
  {
    id: 'design',
    index: '02',
    title: 'UI/UX & Product Design',
    description:
      'Product design work built in Figma across study-space discovery, SCDF response dashboards, WCAG flows, and GoBusiness audits.',
    layout: 'design',
    projects: [
      {
        id: 'studyhavn',
        category: 'PRODUCTIVITY / UX DESIGN',
        title: 'StudyHavn.',
        description: 'A Figma app prototype for finding NTU-style study rooms through search, filters, maps, and posting flows.',
        secondaryDescription: 'Built Balsamiq wireframes, seven hi-fi screens, and tag-based filters for noise level and amenities.',
        tags: ['Figma', 'User Research', 'Prototyping'],
        links: [link('View Case Study', '/work/studyhavn', 'internal')],
        image: sourceProjects.studyhavn.image,
      },
      {
        id: 'citydrip',
        category: 'ECOMMERCE / STREETWEAR UX',
        title: 'CityDrip.',
        description: 'A Figma e-commerce concept for streetwear discovery with product search, filters, DripMap, and DripGuru flows.',
        secondaryDescription: 'Designed browsing and product-location screens using WCAG-aligned interaction patterns and direct e-commerce links.',
        tags: ['Figma', 'UI/UX Design', 'Ecommerce'],
        links: [link('View Case Study', '/work/citydrip', 'internal')],
        image: sourceProjects.citydrip.image,
      },
      {
        id: 'scdf-dashboard',
        category: 'DASHBOARD / CIVIC TECH',
        title: 'SCDF Dashboard.',
        description: 'A Figma dashboard prototype for Singapore gas-leak scenarios with plume maps, heatmaps, and safe-zone capacity views.',
        secondaryDescription: 'Structured timeline controls, risk-zone summaries, and NParks evacuation guidance for responder workflows.',
        tags: ['Figma', 'Dashboard Design', 'Data Visualization'],
        links: [link('View Case Study', '/work/scdf-dashboard', 'internal')],
        image: sourceProjects.scdf.image,
      },
      {
        id: 'seniorconnect',
        category: 'ACCESSIBILITY / SOCIAL IMPACT',
        title: 'SeniorConnect',
        description: 'A Figma mobile concept for Singapore seniors to discover Community Club events and informal gatherings.',
        secondaryDescription: 'Designed event registration, NTUC FairPrice or ActiveSG voucher redemption, and peer chat flows.',
        tags: ['Figma', 'Mobile App', 'Accessibility'],
        links: [link('View Case Study', '/work/senior-community-app', 'internal')],
        image: sourceProjects.seniorconnect.image,
      },
      {
        id: 'gobusiness',
        category: 'UX AUDIT / GOVTECH',
        title: 'GoBusiness.',
        description: 'A heuristic evaluation of Singapore’s GoBusiness portal using Nielsen’s 10 usability heuristics.',
        secondaryDescription: 'Documented 7 findings across navigation, accessibility, information architecture, and dashboard interaction.',
        tags: ['Figma', 'UX Audit', 'GovTech'],
        links: [link('View Case Study', '/work/gobusiness-ux-audit', 'internal')],
        image: sourceProjects.gobusiness.image,
      },
      {
        id: 'poster-visual-design-portfolio',
        category: 'VISUAL DESIGN',
        title: 'Poster & Visual Design',
        description: 'A poster collection built with Photoshop, Canva, and Figma for music, cities, fashion, cars, and sports.',
        secondaryDescription: 'Applied typography, layout grids, and image treatment across more than 30 creative assets.',
        tags: ['Photoshop', 'Canva', 'Figma'],
        links: [link('View Gallery', '/posters', 'internal')],
        image: '/Images/Posters/brands.png',
      },
    ],
  },
  {
    id: 'other',
    index: '03',
    title: 'Other / Experiments',
    description:
      'Additional builds cover Supabase dashboards, data.gov.sg parking search, resume scoring, and this React portfolio.',
    layout: 'compact',
    projects: [
      {
        id: 'heliodesk',
        category: 'PRODUCTIVITY DASHBOARD',
        title: 'HelioDesk',
        description: 'A React and Tauri productivity dashboard for tasks, notes, shortcuts, and calendar navigation.',
        secondaryDescription: 'Implemented Supabase-backed Google OAuth, PostgreSQL storage, and Netlify production builds.',
        tags: ['React', 'Supabase', 'PostgreSQL'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.heliodesk.githubLink), link('Demo', sourceProjects.heliodesk.projectLink)],
        details: sourceProjects.heliodesk,
      },
      {
        id: 'parklah',
        category: 'LOCATION WEB APP',
        title: 'ParkLah!',
        description: 'A React and TypeScript parking finder for nearby Singapore carparks from browser location or keyword search.',
        secondaryDescription: 'Integrated REST APIs, data.gov.sg carpark datasets, PostgreSQL, and Google Maps deep links.',
        tags: ['React', 'TypeScript', 'PostgreSQL'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.parklah.githubLink), link('Demo', sourceProjects.parklah.projectLink)],
        details: sourceProjects.parklah,
      },
      {
        id: 'roleaudit',
        category: 'RESUME ANALYSIS TOOL',
        title: 'RoleAudit',
        description: 'A React resume analysis tool that maps candidate evidence against role categories and scoring rules.',
        secondaryDescription: 'Designed rule-based scoring, gap detection, strengths, weaknesses, and role-alignment feedback.',
        tags: ['AI Workflow', 'Resume Analysis', 'Frontend'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.roleaudit.githubLink), link('Demo', sourceProjects.roleaudit.projectLink)],
        details: sourceProjects.roleaudit,
      },
      {
        id: 'portfolio',
        category: 'FRONTEND ENGINEERING',
        title: 'Portfolio.',
        description: 'A React, Vite, TailwindCSS, and Framer Motion portfolio for projects, posters, resume, and contact workflows.',
        secondaryDescription: 'Built routed pages, responsive card grids, PDF resume viewing, and AA-checked design tokens.',
        tags: ['React', 'Vite', 'TailwindCSS'],
        links: [link('Details', null, 'modal'), link('GitHub', sourceProjects.portfolio.githubLink), link('Demo', sourceProjects.portfolio.projectLink)],
        details: sourceProjects.portfolio,
      },
    ],
  },
]

const WorkLink = ({ item, project, onOpenDetails }) => {
  if (item.type === 'modal') {
    return (
      <button type="button" className="text-link" onClick={() => onOpenDetails(project)}>
        {item.label}
      </button>
    )
  }

  if (item.type === 'internal') {
    return (
      <Link className="text-link" to={item.href}>
        {item.label}
      </Link>
    )
  }

  if (item.href) {
    return (
      <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    )
  }

  return <span className="work-link-disabled">{item.label}</span>
}

const WorkCard = ({ project, layout, index, onOpenDetails }) => (
  <article
    className={`surface-card work-card work-card--${layout}`}
  >
    {project.image && (
      <LazyImage src={project.image} alt={`${project.title} thumbnail`} className="work-card__image" />
    )}
    <div className="work-card__body">
      <div className="work-card__index">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="work-card__category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="work-card__secondary">{project.secondaryDescription}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span className="tag-chip" key={`${project.id}-${tag}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="work-card__links">
        {project.links.map((item) => (
          <WorkLink key={`${project.id}-${item.label}`} item={item} project={project} onOpenDetails={onOpenDetails} />
        ))}
      </div>
    </div>
  </article>
)

const ProjectDetailsModal = ({ project, onClose, modalRef }) => {
  if (!project) return null

  const details = project.details || {}
  const sections = [
    { title: 'Overview', body: details.overview || details.detailedDescription || project.description },
    { title: 'Technical Challenge', body: details.technicalChallenge },
    { title: 'My Contribution', body: details.myContribution },
    { title: 'System Structure', body: details.systemStructure },
    { title: 'Technical Focus', body: details.technicalFocus },
  ].filter((section) => section.body)

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={onClose}
      />
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
          <p className="work-card__category">{project.category}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="modal-card__lede">{project.secondaryDescription || project.description}</p>
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
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef(null)

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

  return (
    <>
      <SEO
        title="Work"
        description="Selected engineering, AI, embedded, UI/UX, product design, and experiment projects by Karthik Manda."
      />
      <div className="page-shell">
        <Navbar />
        <main className="page-main">
          <section className="page-hero">
            <h1>Work</h1>
            <p>
              Work spans PyTorch quant research, Python local-LLM tooling, STM32 embedded control, and Figma product prototypes.
            </p>
          </section>

          <div className="work-sections">
            {workSections.map((section) => (
              <section className={`work-section work-section--${section.layout}`} key={section.id}>
                <div className="section-index-header">
                  <div>
                    <span className="section-index-label">{section.index}</span>
                    <h2 className="section-heading">{section.index} — {section.title}</h2>
                    <p className="section-description">{section.description}</p>
                  </div>
                </div>
                <div className={`work-grid work-grid--${section.layout}`}>
                  {section.projects.map((project, index) => (
                    <WorkCard key={project.id} project={project} layout={section.layout} index={index} onOpenDetails={setSelectedProject} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </div>
      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} modalRef={modalRef} />
    </>
  )
}

export default Work
