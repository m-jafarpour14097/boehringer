/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001A33",
        secondary: "#FAFAFF",
        warning: "#FFCA1D",
        dimWhite: "rgba(255, 255, 255)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      blob: "blob 7s infinite"
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)"
        },
        "33%": {
          transform: "translate(15px, -30px) scale(1.2)"
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)"
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)"
        }
      }
    },
  },
  plugins: [],
};