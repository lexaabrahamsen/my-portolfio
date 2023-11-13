/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Libre Bodoni', 'serif'],
      archivo: ['Archivo Black', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
      nun: ['Nunito Sans', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      gloock: ['Gloock', 'serif'],
    },
    // extend: {
    //   backgroundImage: {
    //     'cc-form-thumbnail': "url(../public/CreditCardFeature.jpg"
    //   }
    // },
  },
  plugins: [require("daisyui")],
}
