import { getProjectById } from './projects'

const projectFromData = (id) => getProjectById(id) || {}

const sourceProjects = {
  coverbuddy: projectFromData('coverbuddy'),
  coderecon: projectFromData('coderecon'),
  archlab: projectFromData('archlab'),
  roleaudit: projectFromData('roleaudit'),
}

export const projectLink = (label, href, type = href ? 'external' : 'disabled') => ({ label, href, type })

export const workShowcaseProjects = [
  {
    id: 'multi-agent-rl-trading-system',
    category: 'AI / QUANT SYSTEM',
    title: 'Multi-Agent RL Trading System',
    description: 'A PyTorch MADDPG trading system coordinates portfolio decisions across more than 50 assets.',
    secondaryDescription: 'Built OHLCV feature pipelines, portfolio-level reward shaping, and benchmark evaluation against single-agent baselines.',
    tags: ['Python', 'PyTorch', 'MADDPG', 'Pandas', 'Quant Research'],
    links: [projectLink('Details', null, 'modal')],
  },
  {
    id: 'coderecon',
    category: 'STATIC ANALYSIS / LOCAL LLM',
    title: 'CodeRecon',
    description: 'A deterministic static analysis engine turns repository structure into local-LLM refactor plans.',
    secondaryDescription: 'Parses repositories with Python AST, maps structural anti-patterns, detects complexity hotspots, and generates zero-cloud suggestions.',
    tags: ['Python', 'AST', 'Ollama', 'Llama', 'GitHub Actions'],
    links: [
      projectLink('Details', null, 'modal'),
      projectLink('GitHub', sourceProjects.coderecon.githubLink),
      projectLink('Demo', sourceProjects.coderecon.projectLink),
    ],
    details: sourceProjects.coderecon,
  },
  {
    id: 'archlab',
    category: 'SWIFT STUDENT CHALLENGE WINNER',
    title: 'ArchLab',
    description: 'A Swift 6 simulation engine visualizes software architecture failures and recovery paths.',
    secondaryDescription: 'Built with Swift concurrency, real-time simulation logic, and production-grade UI principles.',
    tags: ['Swift', 'Simulation', 'Systems Design', 'UI/UX'],
    links: [projectLink('Details', null, 'modal'), projectLink('GitHub', sourceProjects.archlab.githubLink)],
    details: sourceProjects.archlab,
  },
  {
    id: 'coverbuddy',
    category: 'AI WRITING TOOL',
    title: 'CoverBuddy',
    description: 'A full-stack writing platform generates tailored cover letters from resume evidence.',
    secondaryDescription: 'Combines resume parsing, evidence selection, AI-assisted drafting, editing, saving, and PDF export.',
    tags: ['React', 'AI Workflow', 'Resume Parsing', 'PDF Export'],
    links: [
      projectLink('Details', null, 'modal'),
      projectLink('GitHub', sourceProjects.coverbuddy.githubLink),
      projectLink('Demo', sourceProjects.coverbuddy.projectLink),
    ],
    details: sourceProjects.coverbuddy,
  },
  {
    id: 'xarvyn',
    category: 'AI / SYSTEMS EXPERIMENT',
    title: 'Xarvyn',
    description: 'An applied AI systems experiment explores agentic workflows and structured execution.',
    secondaryDescription: 'Designed as a research sandbox for reasoning loops, task state, and tool-mediated output.',
    tags: ['AI Agents', 'Systems Design', 'Automation'],
    links: [projectLink('Details', null, 'modal')],
  },
  {
    id: 'roleaudit',
    category: 'RESUME ANALYSIS TOOL',
    title: 'RoleAudit',
    description: 'A React analysis tool maps candidate evidence against role categories and scoring rules.',
    secondaryDescription: 'Designed rule-based scoring, gap detection, strengths, weaknesses, and role-alignment feedback.',
    tags: ['AI Workflow', 'Resume Analysis', 'Frontend'],
    links: [
      projectLink('Details', null, 'modal'),
      projectLink('GitHub', sourceProjects.roleaudit.githubLink),
      projectLink('Demo', sourceProjects.roleaudit.projectLink),
    ],
    details: sourceProjects.roleaudit,
  },
]

