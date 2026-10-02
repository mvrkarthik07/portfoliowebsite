import { mkdir, writeFile } from 'node:fs/promises'

process.env.VITE_COMMIT_REF = process.env.COMMIT_REF?.slice(0, 7) || 'LOCAL'
process.env.VITE_BUILD_DATE = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Singapore', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
await mkdir('src/generated', { recursive: true })
await writeFile('src/generated/buildInfo.js', `export const BUILD_DATE = ${JSON.stringify(process.env.VITE_BUILD_DATE)}\nexport const COMMIT_REF = ${JSON.stringify(process.env.VITE_COMMIT_REF)}\n`)
