/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        custom: "#F53838",
        white: "#FFFFFF",
        secondary: "#FFECEC",
      },
    },
  },
  plugins: [],
}

