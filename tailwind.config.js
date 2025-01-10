/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "15px",
        center: true,
        screens: {
          sm: "1430px",
        },
      },
      screens:{
        nm: "940px",
      },
    },
  },
  plugins: [],
}