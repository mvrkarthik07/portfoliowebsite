/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-black': 'var(--bg-base)',
        'primary-white': 'var(--text-primary)',
        'secondary-white': 'var(--text-secondary)',
        'accent-gray': 'var(--bg-surface-raised)',
        'surface': 'var(--bg-surface)',
        'surface-raised': 'var(--bg-surface-raised)',
        'border-default': 'var(--rule-line)',
        'signal': 'var(--signal)',
      },
      fontFamily: {
        'display': ['Libre Baskerville', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Noto Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
        'mono': ['Noto Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
        'gothic': ['Libre Baskerville', 'Georgia', 'Times New Roman', 'serif'],
        'clash': ['Noto Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
        'poppins': ['Noto Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
        'inter': ['Noto Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'buttery': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 180ms cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

