import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: {
          dark: '#0A193D',
          blue: '#007bff',
          light: '#42A5F5',
        },
        teal: {
          500: '#14B8A6',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
        'wave-delayed': 'wave 1.5s ease-in-out infinite 0.2s',
        'wave-delayed-2': 'wave 1.5s ease-in-out infinite 0.4s',
      },
    },
  },
  plugins: [],
}
export default config
