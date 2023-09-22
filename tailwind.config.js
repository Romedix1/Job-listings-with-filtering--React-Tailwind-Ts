/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "LightGrayishCyanBg": "#effafa",
        "LightGrayishCyanFil": "#eef6f6",
        "DarkGrayishCyan": "#7b8e8e",
        "VeryDarkGrayishCyan": "#2c3a3a",
        "DesaturatedDarkCyan": "#5ba4a4"
      }
    },
  },
  plugins: [],
}

