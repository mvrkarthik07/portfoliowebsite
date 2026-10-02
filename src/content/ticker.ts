import { signals } from './signals'
export const ticker = [
  ...signals.map(({ ticker }) => ticker),
  'BNPP-WM LIVE',
  "NTU-CE '28",
  'ARCHLAB SWIFT6',
] as const
