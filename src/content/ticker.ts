import { signals } from './signals'
export const ticker = [
  ...signals.map(({ ticker }) => ticker),
  'BNP FORWARD DEPLOYED AI ENGINEER',
  'NTU-QFA HEAD OF DEVELOPMENT',
  'NTU-NBS PR ASSOCIATE',
  "NTU-CE '28",
  'ARCHLAB SWIFT6',
] as const
