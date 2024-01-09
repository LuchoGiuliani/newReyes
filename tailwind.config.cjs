/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'piel': '#E3CBAC',
      },
      screens:{
        xl: "1530px"
      }
      
    },
  },
  plugins: [],
}