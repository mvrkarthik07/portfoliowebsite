import { posters } from '../src/data/posters.js'
import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const outDir = new URL('../public/posters/', import.meta.url)
const sourceDir = process.env.POSTER_SOURCE_DIR
if (!sourceDir) throw new Error('Set POSTER_SOURCE_DIR to the original Posters directory before regenerating derivatives.')
await mkdir(outDir, { recursive: true })
const entries = []
for (let i = 0; i < posters.length; i += 1) {
  const poster = posters[i]
  const sourcePath = path.join(sourceDir, path.basename(poster.image))
  const source = await readFile(sourcePath)
  const hash = createHash('sha256').update(source).digest('hex').slice(0, 10)
  const base = path.basename(poster.image, path.extname(poster.image)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const metadata = await sharp(source, { limitInputPixels: false }).metadata()
  const variants = {}
  for (const format of ['avif', 'webp']) {
    variants[format] = []
    for (const width of [480, 960, 1600]) {
      const name = `${base}-${hash}-${width}.${format}`
      const pipeline = sharp(source, { limitInputPixels: false }).rotate().resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      const result = await pipeline.toFormat(format, format === 'avif' ? { quality: 45, effort: 2 } : { quality: 74, effort: 4 }).toFile(new URL(name, outDir).pathname)
      variants[format].push({ src: `/posters/${name}`, width: result.width, height: result.height })
    }
  }
  entries.push({ title: poster.title, description: poster.description, width: metadata.width, height: metadata.height, variants })
  console.log(`${i + 1}/${posters.length} ${base}`)
}
await writeFile(new URL('../src/content/archive.json', import.meta.url), JSON.stringify(entries, null, 2) + '\n')
