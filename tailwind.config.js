/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat', "sans-serif"],
      body: ["Libre Bodoni", "serif"],
      archivo: ['Archivo Black', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
