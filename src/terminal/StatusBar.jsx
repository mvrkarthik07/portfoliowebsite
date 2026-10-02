import { BUILD_DATE, COMMIT_REF } from '../generated/buildInfo'
import { useEffect, useState } from 'react'
const sgt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Singapore', weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' })
function status(now) {
  const parts = Object.fromEntries(sgt.formatToParts(now).map(({ type, value }) => [type, value]))
  const minutes = Number(parts.hour) * 60 + Number(parts.minute)
  const trading = !['Sat', 'Sun'].includes(parts.weekday) && ((minutes >= 540 && minutes < 720) || (minutes >= 780 && minutes < 1020))
  return { clock: `${parts.hour}:${parts.minute}:${parts.second}`, trading }
}
export default function StatusBar() {
  const [now, setNow] = useState(() => new Date(0))
  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => { if (!document.hidden) setNow(new Date()) }, 1000)
    return () => clearInterval(timer)
  }, [])
  const { clock, trading } = status(now)
  return <footer className="statusbar"><span>SGT <span>{clock.slice(0, -2)}<span className="seconds" key={clock}>{clock.slice(-2)}</span></span></span><span>SGX {trading ? 'OPEN' : 'CLOSED'} <small>weekday hours, holidays excluded</small></span><span>BUILD {COMMIT_REF}</span><span>UPDATED {BUILD_DATE}</span><span className="copyright">© 2026 Karthik Manda</span></footer>
}
