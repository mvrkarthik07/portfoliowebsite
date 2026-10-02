process.env.NODE_ENV = 'production'
await import('./write-build-info.mjs')
await import('./fetch-activity.mjs')
const { build } = await import('vite')
await build()
process.env.NODE_ENV = 'production'
await import('./postbuild.mjs')
