/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: {
      ink: 'var(--ink)', panel: 'var(--panel)', hdr: 'var(--hdr)', amber: 'var(--amber)', 'amber-dim': 'var(--amber-dim)', white: 'var(--white)', muted: 'var(--muted)', edge: 'var(--edge)', rule: 'var(--rule)', up: 'var(--up)', down: 'var(--down)', key: 'var(--key)', flash: 'var(--flash)'
    },
    fontFamily: { mono: ['Martian', 'monospace'], prose: ['Geist', 'sans-serif'] },
    screens: { sm: '640px', md: '900px', lg: '1200px', xl: '1520px' }
  } },
  plugins: []
}
