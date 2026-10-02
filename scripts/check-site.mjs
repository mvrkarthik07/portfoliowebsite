import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', args: ['--no-sandbox'] })
const errors = []
for (const width of [320,375,768,1024,1280,1520,1920]) {
  const page = await browser.newPage({ viewport: { width, height: 800 } })
  page.on('pageerror', (error) => errors.push(`${width}: ${error.message}`))
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
  const data = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight, hero: document.querySelector('#des').getBoundingClientRect().toJSON(), positions: document.querySelector('#positions').getBoundingClientRect().toJSON(), work: document.querySelector('#work').getBoundingClientRect().toJSON() }))
  console.log('VIEW', width, JSON.stringify(data))
  if (width === 375 || width === 1280) await page.screenshot({ path: `/tmp/terminal-${width}.png`, fullPage: false })
  await page.close()
}
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
const page = await context.newPage()
page.on('pageerror', (error) => errors.push(`route: ${error.message}`))
for (const route of ['/', '/about', '/archive', '/work/coderecon', '/not-a-route']) {
  await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'networkidle' })
  const axe = await new AxeBuilder({ page }).analyze()
  console.log('AXE', route, axe.violations.map(({ id, nodes }) => `${id}:${nodes.length}`).join(',') || '0')
  console.log('META', route, await page.evaluate(() => ({ title: document.title, canonical: document.querySelectorAll('link[rel="canonical"]').length, og: document.querySelectorAll('meta[property="og:url"]').length, image: document.querySelector('meta[property="og:image"]')?.content })))
}
await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await page.getByRole('combobox', { name: 'Command' }).fill('WORK')
await page.getByRole('combobox', { name: 'Command' }).press('Enter')
console.log('COMMAND', await page.evaluate(() => ({ hash: location.hash, focused: document.activeElement?.textContent })))
await page.getByRole('button', { name: 'QUANT', exact: true }).click()
console.log('FILTER', await page.evaluate(() => ({ search: location.search, rows: document.querySelectorAll('.work-row').length })))
await page.reload({ waitUntil: 'networkidle' })
console.log('FILTER_RELOAD', await page.locator('.work-row').count())
console.log('ERRORS', errors)
await browser.close()
