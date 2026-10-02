import { claims } from './claims'
export const positions = [
  { firm: 'BNP Paribas WM', role: claims.bnpRole, status: 'LIVE', since: 'Jul–Dec 2026', detail: 'Technology and applied AI work for Wealth Management in a regulated financial-services environment.' },
  { firm: 'WorldQuant BRAIN', role: `Research consultant, ${claims.worldQuantTier}`, status: 'LIVE', since: '2026', detail: 'Researching alpha factors using financial signals and cross-sectional normalisation.' },
  { firm: 'NTU', role: 'B.Eng. Computer Engineering', status: 'GRAD 2028', since: '2024', detail: 'Computer Engineering undergraduate at Nanyang Technological University.' },
] as const
