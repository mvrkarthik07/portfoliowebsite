import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import DotBox from '@/components/ui/dot-box'

const projectFromData = (id) => getProjectById(id) || {}

const withArrow = (label) => `${label} →`

const buildModalLink = () => ({ label: 'View Details', type: 'modal' })
const buildInternalLink = (label, href) => ({ label, href, type: 'internal' })
const buildExternalLink = (label, href) => ({ label, href, type: 'external' })
const buildDisabledLink = (label) => ({ label, type: 'disabled' })

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

const workSections = [
  {
    sectionTitle: 'Featured Engineering Projects',
    sectionSubtitle:
      'Systems that combine AI, software architecture, simulation, and quantitative reasoning.',
    layout: 'two-column',
    projects: [
      {
        id: 'multi-agent-rl-trading-system',
        category: 'AI / QUANT SYSTEM',
        title: 'Multi-Agent RL Trading System',
        description:
          'A PyTorch-based MADDPG trading system for coordinated portfolio decisions across 50+ assets.',
        secondaryDescription:
          'Built OHLCV feature pipelines, portfolio-level reward shaping, and benchmark evaluation against single-agent baselines.',
        tags: ['Python', 'PyTorch', 'MADDPG', 'Pandas', 'Quant Research'],
        links: [buildModalLink(), buildDisabledLink('GitHub')],
      },
      {
        id: 'coderecon',
        category: 'STATIC ANALYSIS / LOCAL LLM',
        title: 'CodeRecon',
        description:
          'A deterministic static analysis engine layered with local LLM inference for architecture review and refactor planning.',
        secondaryDescription:
          'Parses repositories with Python AST, maps structural anti-patterns, detects complexity hotspots, and generates zero-cloud refactor suggestions.',
        tags: ['Python', 'AST', 'Ollama', 'Llama', 'GitHub Actions'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.coderecon.githubLink),
          buildExternalLink('Demo', sourceProjects.coderecon.projectLink),
        ],
        details: sourceProjects.coderecon,
      },
      {
        id: 'archlab',
        category: 'SWIFT STUDENT CHALLENGE WINNER',
        title: 'ArchLab',
        description:
          'Apple Swift Student Challenge 2026 winning simulation engine for visualizing software architecture failures and optimization paths.',
        secondaryDescription:
          'Built with Swift 6 concurrency, real-time simulation logic, and production-grade UI/UX principles.',
        tags: ['Swift', 'Simulation', 'Systems Design', 'UI/UX'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.archlab.githubLink),
        ],
        details: sourceProjects.archlab,
      },
      {
        id: 'coverbuddy',
        category: 'AI WRITING TOOL',
        title: 'CoverBuddy',
        description:
          'A full-stack platform for generating tailored cover letters from resume evidence and job-role context.',
        secondaryDescription:
          'Combines resume parsing, evidence selection, AI-assisted drafting, editing, saving, and PDF export into a structured workflow.',
        tags: ['React', 'AI Workflow', 'Resume Parsing', 'PDF Export'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.coverbuddy.githubLink),
          buildExternalLink('Demo', sourceProjects.coverbuddy.projectLink),
        ],
        details: sourceProjects.coverbuddy,
      },
    ],
  },
  {
    sectionTitle: 'Embedded & Hardware Systems',
    sectionSubtitle:
      'Low-level projects across microcontrollers, control systems, digital logic, and embedded Linux.',
    layout: 'two-column',
    projects: [
      {
        id: 'stm32-gimbal-self-levelling-system',
        category: 'EMBEDDED CONTROL SYSTEM',
        title: 'STM32 Gimbal Self-Levelling System',
        description:
          'A bare-metal STM32 self-levelling gimbal using PID control and IMU sensor fusion.',
        secondaryDescription:
          'Configured TIM, RCC, and GPIO registers directly for PWM motor control, with FreeRTOS tasks for sensor polling, motor actuation, and telemetry.',
        tags: ['Bare-Metal C', 'STM32', 'FreeRTOS', 'I2C', 'PWM', 'PID'],
        links: [buildModalLink(), buildDisabledLink('GitHub')],
      },
      {
        id: 'embedded-linux-client-server-defuse-system',
        category: 'EMBEDDED LINUX',
        title: 'Embedded Linux Client-Server & Defuse System',
        description:
          'A Raspberry Pi hardware application using TCP sockets for real-time client-server sensor data streaming.',
        secondaryDescription:
          'Integrated GPIO input, buzzer/LED output, timer logic, countdown states, and pass/fail event handling.',
        tags: ['C', 'Raspberry Pi', 'TCP Sockets', 'GPIO', 'Timer Logic'],
        links: [buildModalLink(), buildDisabledLink('GitHub')],
      },
      {
        id: 'rslk-max-mobile-robot',
        category: 'ROBOTICS / MOTOR CONTROL',
        title: 'RSLK-MAX Mobile Robot',
        description:
          'An embedded C robot control project implementing line following and closed-loop DC motor control.',
        secondaryDescription:
          'Used sensor feedback, duty-cycle adjustment, and timer interrupts on MSP432 for real-time movement control.',
        tags: ['C', 'MSP432', 'DC Motors', 'Timer Interrupts'],
        links: [buildModalLink(), buildDisabledLink('GitHub')],
      },
      {
        id: '8-bit-alu-design',
        category: 'DIGITAL LOGIC',
        title: '8-bit ALU Design',
        description:
          'A Verilog-based arithmetic logic unit implementing adder and multiplier circuits.',
        secondaryDescription:
          'Verified behaviour through Vivado waveform simulation and assembly-level arithmetic testing.',
        tags: ['Verilog', 'Vivado', '8086 Assembly', 'Digital Logic'],
        links: [buildModalLink(), buildDisabledLink('GitHub')],
      },
    ],
  },
  {
    sectionTitle: 'Product & UX Work',
    sectionSubtitle:
      'Research-led product concepts, dashboards, audits, and interface systems.',
    layout: 'three-column',
    projects: [
      {
        id: 'studyhavn',
        category: 'PRODUCTIVITY / UX DESIGN',
        title: 'StudyHavn.',
        description:
          'A student productivity platform focused on helping users discover suitable study locations.',
        secondaryDescription:
          'Built user flows, wireframes, high-fidelity prototypes, and a reusable design system for consistent interaction patterns.',
        tags: ['Figma', 'User Research', 'Prototyping', 'Design System'],
        links: [buildInternalLink('View Case Study', '/work/studyhavn')],
        image: sourceProjects.studyhavn.image,
      },
      {
        id: 'citydrip',
        category: 'ECOMMERCE / STREETWEAR UX',
        title: 'CityDrip.',
        description:
          'An accessibility-conscious e-commerce concept rooted in streetwear culture.',
        secondaryDescription:
          'Designed product discovery, browsing, and checkout flows with WCAG-aligned interaction patterns.',
        tags: ['Figma', 'UI/UX Design', 'Ecommerce', 'Accessibility'],
        links: [buildInternalLink('View Case Study', '/work/citydrip')],
        image: sourceProjects.citydrip.image,
      },
      {
        id: 'scdf-dashboard',
        category: 'DASHBOARD / CIVIC TECH',
        title: 'SCDF Dashboard.',
        description:
          'An incident-support dashboard concept for hazardous chemical plume response and operational risk analysis.',
        secondaryDescription:
          'Designed information hierarchy and visual cues to improve readability for high-pressure decision-making contexts.',
        tags: ['Figma', 'Dashboard Design', 'Data Visualization', 'UX'],
        links: [buildInternalLink('View Case Study', '/work/scdf-dashboard')],
        image: sourceProjects.scdf.image,
      },
      {
        id: 'seniorconnect',
        category: 'ACCESSIBILITY / SOCIAL IMPACT',
        title: 'SeniorConnect™',
        description:
          'A mobile app concept helping socially isolated seniors discover and join Community Club events.',
        secondaryDescription:
          'Designed age-friendly flows with low cognitive load, large text, high contrast, and a points-based redemption system.',
        tags: ['Figma', 'Mobile App Design', 'Accessibility', 'Social UX'],
        links: [buildInternalLink('View Case Study', '/work/senior-community-app')],
        image: sourceProjects.seniorconnect.image,
      },
      {
        id: 'gobusiness',
        category: 'UX AUDIT / GOVTECH',
        title: 'GoBusiness.',
        description:
          'A heuristic evaluation and redesign of Singapore’s GoBusiness platform.',
        secondaryDescription:
          'Audited navigation, service discovery, and form-flow friction to improve clarity for business users.',
        tags: ['Figma', 'UX Audit', 'Heuristic Evaluation', 'GovTech'],
        links: [buildInternalLink('View Case Study', '/work/gobusiness-ux-audit')],
        image: sourceProjects.gobusiness.image,
      },
      {
        id: 'poster-visual-design-portfolio',
        category: 'VISUAL DESIGN',
        title: 'Poster & Visual Design Portfolio',
        description:
          'A collection of posters and visual assets for mock brands and real-world concepts.',
        secondaryDescription:
          'Applied typography, layout, and visual hierarchy principles across assets that reached 10k+ social media views.',
        tags: ['Photoshop', 'Canva', 'Figma', 'Visual Identity'],
        links: [buildInternalLink('View Gallery', '/posters')],
        image: '/Images/Posters/brands.png',
      },
    ],
  },
  {
    sectionTitle: 'Supporting Software Projects',
    sectionSubtitle:
      'Additional full-stack, frontend, productivity, and object-oriented software projects.',
    layout: 'two-column',
    projects: [
      {
        id: 'heliodesk',
        category: 'PRODUCTIVITY DASHBOARD',
        title: 'HelioDesk',
        description:
          'A cross-platform desktop productivity dashboard for consolidating personal tools, workflows, and shortcuts.',
        secondaryDescription:
          'Implemented Supabase-backed storage and production build workflows to reduce shortcut and document access friction.',
        tags: ['React', 'JavaScript', 'Supabase', 'PostgreSQL'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.heliodesk.githubLink),
          buildExternalLink('Demo', sourceProjects.heliodesk.projectLink),
        ],
        details: sourceProjects.heliodesk,
      },
      {
        id: 'parklah',
        category: 'LOCATION-BASED WEB APP',
        title: 'ParkLah!',
        description:
          'A full-stack parking finder that locates nearby carparks from user location or geolocation keywords.',
        secondaryDescription:
          'Integrated REST APIs to combine map-based search with live carpark datasets.',
        tags: ['React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.parklah.githubLink),
          buildExternalLink('Demo', sourceProjects.parklah.projectLink),
        ],
        details: sourceProjects.parklah,
      },
      {
        id: 'roleaudit',
        category: 'RESUME ANALYSIS TOOL',
        title: 'RoleAudit',
        description:
          'A resume analysis tool that evaluates candidate fit against job roles and highlights strengths, gaps, and improvement areas.',
        secondaryDescription:
          'Designed to help users understand role alignment through structured feedback and improvement signals.',
        tags: ['AI Workflow', 'Resume Analysis', 'Role Matching', 'Frontend'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.roleaudit.githubLink),
          buildExternalLink('Demo', sourceProjects.roleaudit.projectLink),
        ],
        details: sourceProjects.roleaudit,
      },
      {
        id: 'internship-placement-management-system',
        category: 'JAVA / OOP SYSTEM',
        title: 'Internship Placement Management System',
        description:
          'A Java CLI system for managing student internship workflows across student and company representative roles.',
        secondaryDescription:
          'Implemented core OOP methods while preserving encapsulation across layered class structures.',
        tags: ['Java', 'OOP', 'CLI', 'Team Project'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.internship.githubLink),
        ],
        details: sourceProjects.internship,
      },
      {
        id: 'portfolio',
        category: 'FRONTEND ENGINEERING',
        title: 'Portfolio.',
        description:
          'A responsive personal portfolio designed and engineered from scratch.',
        secondaryDescription:
          'Built with component architecture, animation, responsive layout, and the gap between design intent and implementation in mind.',
        tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
        links: [
          buildModalLink(),
          buildExternalLink('GitHub', sourceProjects.portfolio.githubLink),
          buildExternalLink('Demo', sourceProjects.portfolio.projectLink),
        ],
        details: sourceProjects.portfolio,
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const gridClasses = {
  'two-column': 'grid-cols-1 md:grid-cols-2',
  'three-column': 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
}

const WorkLink = ({ link, project, onOpenDetails }) => {
  const className =
    'inline-flex min-h-[44px] items-center text-sm text-secondary-white/75 transition-colors hover:text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-white/50 focus:ring-offset-2 focus:ring-offset-primary-black md:text-base'

  if (link.type === 'modal') {
    return (
      <button
        type="button"
        className={`${className} text-left`}
        onClick={() => onOpenDetails(project)}
      >
        {withArrow(link.label)}
      </button>
    )
  }

  if (link.type === 'internal') {
    return (
      <Link to={link.href} className={className}>
        {withArrow(link.label)}
      </Link>
    )
  }

  if (link.type === 'external' && link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {withArrow(link.label)}
      </a>
    )
  }

  return (
    <span className="inline-flex min-h-[44px] cursor-not-allowed items-center text-sm text-secondary-white/35 md:text-base">
      {withArrow(link.label)}
    </span>
  )
}

const WorkProjectCard = ({ project, onOpenDetails }) => (
  <motion.article
    variants={itemVariants}
    whileHover={{
      y: -6,
      transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
    }}
    className="group min-w-0"
  >
    <DotBox className="flex h-full min-w-0 flex-col overflow-hidden bg-primary-black/70">
      {project.image && (
        <div className="relative aspect-video overflow-hidden border-b border-primary-white/10 bg-primary-white/5">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex h-full min-w-0 flex-col p-5 sm:p-6">
        <p className="mb-3 font-clash text-xs uppercase tracking-wider text-secondary-white/60">
          {project.category}
        </p>
        <h3 className="mb-3 min-w-0 break-words font-gothic text-xl leading-tight text-primary-white sm:text-2xl md:text-[1.65rem]">
          {project.title}
        </h3>
        <p className="mb-3 min-w-0 break-words font-clash text-sm leading-relaxed text-secondary-white/90 md:text-base">
          {project.description}
        </p>
        <p className="mb-5 min-w-0 break-words font-clash text-sm leading-relaxed text-secondary-white/65 md:text-base">
          {project.secondaryDescription}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="border border-primary-white/15 px-3 py-1 font-clash text-xs text-secondary-white/75 md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1">
          {project.links.map((link) => (
            <WorkLink
              key={`${project.id}-${link.label}`}
              link={link}
              project={project}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>
    </DotBox>
  </motion.article>
)

const ProjectDetailsModal = ({ project, onClose, modalRef }) => {
  if (!project) {
    return null
  }

  const details = project.details || {}
  const detailSections = [
    { title: 'Overview', body: details.overview || details.detailedDescription },
    { title: 'Technical Challenge', body: details.technicalChallenge },
    { title: 'My Contribution', body: details.myContribution },
    { title: 'System Structure', body: details.systemStructure },
    { title: 'Technical Focus', body: details.technicalFocus },
  ].filter((section) => section.body)

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-primary-black/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-3 z-50 overflow-y-auto sm:inset-6 lg:inset-12"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-project-modal-title"
          >
            <div className="flex min-h-full items-center justify-center p-1 sm:p-4">
              <div
                ref={modalRef}
                tabIndex={-1}
                className="neon-border relative my-6 w-full max-w-5xl bg-primary-black p-5 outline-none sm:p-7 md:p-9"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center font-clash text-2xl text-secondary-white/70 transition-colors hover:text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-white/50"
                  aria-label="Close project details"
                >
                  x
                </button>

                <div className="min-w-0 pr-8">
                  <p className="mb-3 font-clash text-xs uppercase tracking-wider text-secondary-white/60">
                    {project.category}
                  </p>
                  <h2
                    id="work-project-modal-title"
                    className="mb-4 min-w-0 break-words font-gothic text-3xl leading-tight sm:text-4xl md:text-5xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mb-4 max-w-4xl font-clash text-base leading-relaxed text-secondary-white md:text-lg">
                    {project.description}
                  </p>
                  <p className="mb-7 max-w-4xl font-clash text-base leading-relaxed text-secondary-white/70 md:text-lg">
                    {project.secondaryDescription}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-modal-${tag}`}
                        className="border border-primary-white/15 px-3 py-1 font-clash text-sm text-secondary-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {detailSections.length > 0 && (
                    <div className="space-y-6 border-t border-primary-white/10 pt-7">
                      {detailSections.map((section) => (
                        <section key={section.title}>
                          <h3 className="mb-2 font-gothic text-xl md:text-2xl">
                            {section.title}
                          </h3>
                          <p className="font-clash text-base leading-relaxed text-secondary-white/80 md:text-lg">
                            {section.body}
                          </p>
                        </section>
                      ))}
                    </div>
                  )}

                  {details.learnings && (
                    <section className="mt-7 border-t border-primary-white/10 pt-7">
                      <h3 className="mb-3 font-gothic text-xl md:text-2xl">Learnings</h3>
                      <ul className="space-y-3">
                        {details.learnings.map((learning) => (
                          <li
                            key={learning}
                            className="flex gap-3 font-clash text-base leading-relaxed text-secondary-white/80 md:text-lg"
                          >
                            <span className="text-secondary-white/35">-</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
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
        description="Selected product, software, AI, embedded, and design projects built across engineering depth and user-centered execution."
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-14 md:mb-16"
            >
              <h1 className="mb-4 font-gothic text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Work
              </h1>
              <p className="max-w-4xl font-clash text-base leading-relaxed text-secondary-white md:text-lg lg:text-xl">
                Selected product, software, AI, embedded, and design projects built across engineering depth and user-centered execution.
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-20">
              {workSections.map((section, sectionIndex) => (
                <motion.section
                  key={section.sectionTitle}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * sectionIndex,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={sectionIndex === 0 ? '' : 'border-t border-primary-white/10 pt-12 md:pt-16'}
                >
                  <div className="mb-7 max-w-4xl md:mb-9">
                    <h2 className="mb-3 break-words font-gothic text-2xl leading-tight sm:text-3xl md:text-4xl">
                      {section.sectionTitle}
                    </h2>
                    <p className="font-clash text-sm leading-relaxed text-secondary-white/75 md:text-base lg:text-lg">
                      {section.sectionSubtitle}
                    </p>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`grid ${gridClasses[section.layout]} gap-5 md:gap-6 lg:gap-8`}
                  >
                    {section.projects.map((project) => (
                      <WorkProjectCard
                        key={project.id}
                        project={project}
                        onOpenDetails={setSelectedProject}
                      />
                    ))}
                  </motion.div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        modalRef={modalRef}
      />
    </>
  )
}

export default Work
