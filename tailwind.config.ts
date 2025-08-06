import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./next-app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: '#f59e0b',
        },
        teal: {
          DEFAULT: '#14b8a6',
        },
        violet: {
          DEFAULT: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
