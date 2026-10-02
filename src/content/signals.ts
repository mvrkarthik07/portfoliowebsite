import { claims } from './claims'
export const signals = [
  { value: claims.worldQuantTier.toUpperCase(), label: 'WorldQuant BRAIN tier', ticker: `BRAIN ${claims.worldQuantTier.toUpperCase()}` },
  { value: claims.swiftResult.toUpperCase(), label: 'Apple Swift Student Challenge 2026', ticker: `SSC26 ${claims.swiftResult.toUpperCase()}` },
  { value: claims.hackxResult, label: 'HTX HackX 2025 teams', ticker: `HACKX25 ${claims.hackxResult.replace(/\s/g, '')}` },
  { value: 'PYPI', label: 'CodeRecon package', ticker: 'CODERECON PYPI' },
] as const
