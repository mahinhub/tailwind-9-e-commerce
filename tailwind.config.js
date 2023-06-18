/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dyna : '#5F9EA0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

