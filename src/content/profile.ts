import { claims } from './claims'
export const profile = {
  name: 'Karthik Manda',
  thesis: 'Computer engineering at NTU. I build alpha-research tooling and local-first AI systems.',
  status: `Currently: ${claims.bnpRole}, BNP Paribas Wealth Management.`,
  email: 'mkarthik1725215@gmail.com',
  linkedin: 'https://www.linkedin.com/in/karthik-manda-027038255/',
  github: 'https://github.com/mvrkarthik07',
  resume: '/resume.pdf',
  availability: 'Open to 2027 full-time roles',
  bio: [
    'I study Computer Engineering at Nanyang Technological University in Singapore, with a focus on quantitative research, software systems and applied AI.',
    'My work ranges from alpha-factor research and local code analysis to full-stack writing tools. I care about explicit assumptions, inspectable results and systems that work outside a demo.',
    'Before these projects, I worked on web systems at NTU and served as an automotive technician in the Singapore Armed Forces.'
  ],
  education: 'B.Eng. Computer Engineering, Nanyang Technological University · expected 2028',
} as const
