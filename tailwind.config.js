/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xs": "350px",
        "2xs": "360px",
        xsm: "380px",
        xs: "500px",
        "2md": "920px",
        "3xl": "1920px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0A4297",
          200: "#1573D3",
          300: "#6FBCF1",
          400: "#A0DAFA",
          500: "#CFEEFC",
        },
        secondary1: {
          100: "#1B6B9E",
          200: "#36B3DC",
          300: "#85E8F4",
          400: "#AFF8FB",
          500: "#D7FDFB",
        },
        secondary2: {
          100: "#0F153D",
          200: "#1F2855",
          300: "#7E8DCC",
          400: "#B1BEEE",
          500: "#D7DEF6",
        },
        secondary3: {
          100: "#00567C",
          200: "#0093AD",
          300: "#5CE6E5",
          400: "#94F6EE",
          500: "#D7DEF6",
        },
        success: {
          100: "#166F13",
          200: "#3C9B26",
          300: "#9DE17B",
          400: "#C9F5AB",
          500: "#E6FAD4",
        },
        info: {
          100: "#1043B7",
          200: "#2176FF",
          300: "#79B7FF",
          400: "#A6D2FF",
          500: "#D2EAFF",
        },
        warning: {
          100: "#B77100",
          200: "#FFAE00",
          300: "#FFD866",
          400: "#FFE899",
          500: "#FFF5CC",
        },
        danger: {
          100: "#B71C29",
          200: "#FF4838",
          300: "#FFA487",
          400: "#FFC9AF",
          500: "#FFE7D7",
        },
        neutral: {
          100: "#08090D",
          200: "#101113",
          300: "#83888E",
          400: "#A6ADB8",
          500: "#FDFEFF",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        slidedown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        marquee: "marquee 20s linear infinite",
        slidedown: "slidedown 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
