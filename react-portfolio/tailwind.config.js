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
        'bg-base': '#000000',
        'bg-surface': '#000000',
        'bg-surface-raised': '#0A0A0A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#ADADAD',
        'text-placeholder': '#ADADAD',
        'rule-line': '#FFFFFF',
        'rule-line-light': '#1A1A1A',
        signal: '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
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
    placeholderColor: {
      DEFAULT: '#ADADAD',
    },
  },
  plugins: [],
}

