/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", ...fontFamily.sans],
        sans: ["var(--font-body)", ...fontFamily.sans],
      },
      colors: {
        paper: "#E6E9EC",
        ink: "#111C27",
        sign: "#F5B700",
        scope: "#18232E",
        muted: "#5B6773",
        rule: "#C5CBD1",
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};
