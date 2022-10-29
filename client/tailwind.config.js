/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'l-md': '860px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          10: '#f5f6fc',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          1000: '#2196F3',
          1100: '#153a75',
        },
      },
    },
  },
  plugins: [],
};
