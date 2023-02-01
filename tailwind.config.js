/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    
      colors: {
        pink: {
          color1: '#ab6d80',
          color2: '#ffffff',
          color3: '#f1e31c',
        },
      }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}