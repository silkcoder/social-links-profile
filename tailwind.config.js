/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '384px',
    },
    colors: {
      'black': 'rgba(20, 20, 20, 1)',
      'dark-grey': 'rgba(31, 31, 31, 1)',
      'grey': 'rgba(51, 51, 51, 1)',
      'neon-green': 'rgba(196, 248, 42, 1)',
      'white': 'rgba(255, 255, 255, 1)'
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}