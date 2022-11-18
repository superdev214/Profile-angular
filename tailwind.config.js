/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screen:{
        '2xl' : { 'col' : '(min-width:1400px'},
      },
    },
  },
  plugins: [],
}
