import { claims } from './claims'

export const experience = [
  {
    slug: 'bnp-paribas', category: 'Professional', period: 'Jul–Dec 2026',
    role: claims.bnpRole, org: 'BNP Paribas Wealth Management', live: true, featured: true,
    summary: 'Applied AI for internal technology workflows in a regulated wealth management setting.',
    bullets: ['Applied AI to internal technology tooling and automation in a regulated wealth management setting.'],
  },
  {
    slug: 'worldquant-brain', category: 'Professional', period: '2026',
    role: `Research consultant, ${claims.worldQuantTier}`, org: 'WorldQuant BRAIN', live: true, featured: false,
    summary: 'Alpha-factor research with an emphasis on signal design and low-correlation factors.',
    bullets: ['Researched alpha factors from financial signals.', 'Applied cross-sectional normalisation to low-correlation factors.'],
  },
  {
    slug: 'qfa-development', category: 'Campus leadership', period: '',
    role: 'Head of Development Arm', org: 'Quant Finance Academy, NTU', live: true, featured: true,
    summary: 'Developing systems and teaching methods that make algorithmic and quantitative trading easier to understand.',
    bullets: ['Build systems and methods for explaining algorithmic and quantitative trading.', 'Organise and teach classes every Wednesday, 7–9 pm.'],
  },
  {
    slug: 'nbs-banking-finance-club', category: 'Campus leadership', period: '',
    role: 'PR Associate', org: 'NTU NBS Banking and Finance Club', live: true, featured: true,
    summary: 'Public relations associate for the NTU NBS Banking and Finance Club.',
    bullets: ['Support the club’s public relations work.'],
  },
  {
    slug: 'ntu-research-datasite', category: 'Professional', period: 'Feb–Mar 2026',
    role: 'Web development intern', org: 'Wee Kim Wee School, NTU', live: false, featured: false,
    summary: 'Built a React research datasite and worked on data visualisation and content workflows.',
    bullets: ['Built and deployed a React research datasite with four production pages.', 'Worked on data visualisation and CMS workflows.'],
  },
  {
    slug: 'singapore-armed-forces', category: 'Professional', period: 'Jan 2023–Aug 2024',
    role: 'Automotive technician', org: 'Singapore Armed Forces', live: false, featured: false,
    summary: 'Diagnosed and maintained electrical and digital vehicle systems.',
    bullets: ['Diagnosed and maintained electrical and digital vehicle systems.', 'Used CAN bus and ECU diagnostic procedures.'],
  },
] as const
