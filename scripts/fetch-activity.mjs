import { writeFile } from 'node:fs/promises'
const output = new URL('../src/content/activity.json', import.meta.url)
const token = process.env.GITHUB_TOKEN
if (!token) {
  await writeFile(output, '[]\n')
} else {
  try {
    const end = new Date().toISOString()
    const start = new Date(Date.now() - 26 * 7 * 86400000).toISOString()
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify({ query: 'query($from:DateTime!,$to:DateTime!){user(login:"mvrkarthik07"){contributionsCollection(from:$from,to:$to){contributionCalendar{weeks{firstDay contributionDays{contributionCount}}}}}}', variables: { from: start, to: end } }) })
    if (!response.ok) throw new Error(`GitHub ${response.status}`)
    const data = await response.json()
    const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks
    if (!weeks) throw new Error('No contribution data')
    const activity = weeks.slice(-26).map(({ firstDay, contributionDays }) => ({ week: firstDay, count: contributionDays.reduce((sum, day) => sum + day.contributionCount, 0) }))
    await writeFile(output, JSON.stringify(activity) + '\n')
  } catch (error) { console.warn('Activity chart hidden:', error.message); await writeFile(output, '[]\n') }
}
