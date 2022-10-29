/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'l-md': '860px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};