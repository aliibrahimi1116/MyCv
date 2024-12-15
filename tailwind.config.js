const { faWeight } = require("@fortawesome/free-solid-svg-icons/faWeight");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#fca311",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "25px",
          md: "80px",
        },
      },
      fontFamily: {
        title: ["Rubik", "serif"],
      },
    },
  },
  plugins: [],
};
