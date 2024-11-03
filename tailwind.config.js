/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: [
          "Roboto",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        heading: ["Poppins", "sans-serif"],
        nav: ["Raleway", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        sm: "640px",
      },
    },
  },
  plugins: [],
};
