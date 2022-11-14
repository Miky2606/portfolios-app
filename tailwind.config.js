const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
    'glass': 'rgba(255, 255, 255, 0.4)',
    'white': '#ffff',
    'transparent': 'transparent',
    'black': '#3d3d3d',
    'black-elegant': "#131312"

    }
  },
  plugins: [],
}
