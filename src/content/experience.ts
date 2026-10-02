import { claims } from './claims'
export const experience = [
  { period: 'JUL 26 → DEC 26', role: claims.bnpRole, org: 'BNP Paribas Wealth Management', live: true, bullets: ['Applied AI to internal technology tooling and automation in a regulated wealth management setting.'] },
  { period: '2026', role: `Research consultant, ${claims.worldQuantTier}`, org: 'WorldQuant BRAIN', live: true, bullets: ['Researched alpha factors from financial signals.', 'Applied cross-sectional normalisation to low-correlation factors.'] },
  { period: 'FEB 26 → MAR 26', role: 'Web development intern', org: 'Wee Kim Wee School, NTU', live: false, bullets: ['Built and deployed a React research datasite with four production pages.', 'Worked on data visualisation and CMS workflows.'] },
  { period: 'JAN 23 → AUG 24', role: 'Automotive technician', org: 'Singapore Armed Forces', live: false, bullets: ['Diagnosed and maintained electrical and digital vehicle systems.', 'Used CAN bus and ECU diagnostic procedures.'] },
] as const
