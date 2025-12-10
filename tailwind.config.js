/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px', // Custom Breakpoint: Tablet starts at 800px
      'lg': '1024px', // Custom Breakpoint: Desktop starts at 1024px
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          bgSec: 'var(--brand-bgSec)',
          accent: 'var(--brand-accent)',
          accentSec: 'var(--brand-accentSec)',
          text: 'var(--brand-text)',
          textSec: 'var(--brand-textSec)',
          border: 'var(--brand-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lexend Deca', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 245, 192, 0.5)',
        'neon-strong': '0 0 20px rgba(0, 245, 192, 0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

