/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      grey: {
        light: "#00000012",
        DEFAULT: "#E5E5E5",
        200: "#D1D1D1",
        300: "#7E8185",
      },
      black: {
        DEFAULT: "#202223",
      },
      white: "#FFFFFF",
      primary: "#008060",
      blue: {
        DEFAULT: "#006EFF",
      },
    },
  },
  plugins: [],
};
