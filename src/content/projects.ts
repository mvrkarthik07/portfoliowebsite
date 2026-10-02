import { claims } from './claims'
export type Domain = 'quant' | 'ai' | 'systems' | 'web'
export type Project = {
  slug: string; code: string; name: string; domain: Domain; stack: string; result: string;
  summary: string; problem: string; approach: string; outcome: string; role: string; period: string;
  source?: string; live?: string; package?: string; caseStudy?: boolean;
  decisions: string[]; limitations: string[]; facts: [string, string][];
}
export const projects: Project[] = [
  {
    slug: 'coderecon', code: 'CRCN', name: 'CodeRecon', domain: 'ai', stack: 'Python, AST, Ollama', result: 'PUBLISHED ON PYPI',
    summary: 'Local-first code intelligence for structured architecture reviews.',
    problem: 'Architecture reviews need reliable structural evidence without sending a repository to a cloud model.',
    approach: 'A deterministic Python AST layer maps dependencies and complexity hotspots. A local Ollama layer turns those findings into a review.',
    outcome: 'The CLI package is published on PyPI. Repository scale, runtime and download counts have not been verified for publication.',
    role: 'Sole engineer', period: '2026', source: 'https://github.com/mvrkarthik07/CodeRecon', package: 'https://pypi.org/project/coderecon/', caseStudy: true,
    decisions: ['Use AST parsing for structural signals before model inference.', 'Keep inference local through Ollama.', 'Package the CLI and run checks through GitHub Actions.'],
    limitations: ['No published benchmark for largest repository audited or end-to-end runtime.'],
    facts: [['Release', 'Published on PyPI'], ['Analysis', 'Python AST'], ['Inference', 'Local Ollama']],
  },
  {
    slug: 'archlab', code: 'ARCH-LAB', name: 'ArchLab', domain: 'systems', stack: 'Swift 6, SwiftUI', result: claims.swiftResult.toUpperCase(),
    summary: 'An interactive simulator for software architecture failures and recovery paths.',
    problem: 'Static architecture diagrams make it hard to see how traffic spikes lead to cascading failures.',
    approach: 'A SwiftUI simulation engine models data flow and visualises latency and throughput as architecture choices change.',
    outcome: `Associated with the Apple Swift Student Challenge 2026 ${claims.swiftResult} recognition. A scenario count has not been verified.`,
    role: 'Sole engineer', period: '2026', source: 'https://github.com/mvrkarthik07/ArchLab', caseStudy: true,
    decisions: ['Use a modular engine, state and view structure.', 'Use Swift 6 concurrency for simulation state.', 'Render diagnostic flows with SwiftUI Canvas.'],
    limitations: ['Simulation is educational; it is not a production traffic benchmark.'],
    facts: [['Recognition', claims.swiftResult], ['Platform', 'SwiftUI'], ['Scenarios', 'Not published']],
  },
  {
    slug: 'coverbuddy', code: 'CVB', name: 'CoverBuddy', domain: 'ai', stack: 'React, FastAPI, Supabase', result: 'LIVE',
    summary: 'A structured workflow for evidence-based cover letters.',
    problem: 'A one-shot generator leaves applicants without an editing, saving and export workflow.',
    approach: 'Resume parsing and evidence selection feed drafting; users can edit, save, regenerate and export PDF documents.',
    outcome: 'The web application is live. User and letter counts have not been verified for publication.',
    role: 'Product and engineering lead', period: '2026', source: 'https://github.com/mvrkarthik07/CoverBuddy', live: 'https://covbuddy.netlify.app/', caseStudy: true,
    decisions: ['Separate React frontend and FastAPI backend.', 'Persist applications and drafts with Supabase.', 'Provide a deterministic local fallback when model generation fails.'],
    limitations: ['No verified user or document count.'],
    facts: [['Status', 'Live'], ['Frontend', 'React'], ['Backend', 'FastAPI']],
  },
  {
    slug: 'multi-agent-rl-trading-system', code: 'MARL', name: 'Multi-agent RL trader', domain: 'quant', stack: 'PyTorch, MADDPG, Pandas', result: 'RESEARCH',
    summary: 'A multi-agent trading research system using portfolio-level rewards.',
    problem: 'Portfolio decisions require evaluating multiple assets and costs together.',
    approach: 'The project uses OHLCV features, MADDPG agents and a portfolio reward to study allocation decisions.',
    outcome: 'Karthik reports a 1.32 Sharpe, 30% profit and −7% drawdown. The data period, split, costs and baseline are unavailable, so these are not presented as out-of-sample results.',
    role: 'Researcher and engineer', period: '2026', caseStudy: true,
    decisions: ['Use portfolio-level reward shaping.', 'Define single-agent baselines for future comparison.'],
    limitations: ['Data period, train/validation/test dates, turnover, costs and baseline Sharpe are not verified.', 'Reported metrics cannot be classified as out-of-sample.'],
    facts: [['Status', 'Research'], ['Reported Sharpe', '1.32 (split unverified)'], ['Reported profit', '30%'], ['Reported drawdown', '−7%']],
  },
  {
    slug: 'roleaudit', code: 'RAUD', name: 'RoleAudit', domain: 'web', stack: 'React, JavaScript', result: 'LIVE',
    summary: 'A rule-based resume-to-role analysis tool.',
    problem: 'Opaque fit scores do not explain missing candidate evidence.',
    approach: 'Defined role categories and scoring rules surface strengths, gaps and improvement areas.',
    outcome: 'The web application is live and scores candidate evidence against role criteria.',
    role: 'Product and engineering lead', period: '2026', source: 'https://github.com/mvrkarthik07/RoleAudit', live: 'https://roleaudit.netlify.app/', caseStudy: true,
    decisions: ['Use inspectable scoring rules.', 'Show strengths and gaps alongside the aggregate score.'],
    limitations: ['The score is guidance, not an employer hiring decision.'],
    facts: [['Status', 'Live'], ['Method', 'Rule-based scoring']],
  },
  {
    slug: 'xarvyn', code: 'XRVN', name: 'Xarvyn', domain: 'systems', stack: 'AI agents, automation', result: 'IN PROGRESS',
    summary: 'An experiment in agent workflows and structured execution.',
    problem: 'Tool-mediated workflows need clear state and repeatable output.',
    approach: 'Exploring task state and reasoning loops in a research sandbox.',
    outcome: 'In progress. No public result yet.', role: 'Engineer', period: '2026', caseStudy: false,
    decisions: [], limitations: ['No public result or case study yet.'], facts: [['Status', 'In progress']],
  },
]
