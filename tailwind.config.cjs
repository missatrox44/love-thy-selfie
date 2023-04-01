/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(33, 12, 0)',
        light: 'rgb(255, 249, 244)',
        medium: 'blue',
        primary: 'rgb(118, 67, 229)', //purple
        secondary: 'rgb(255, 206, 58)', //gold
        accent1: 'rgb(0, 145, 173)', //green
        accent2: 'rgb(215, 5, 242)', //pink
      }
    },
  },
  plugins: []
}

