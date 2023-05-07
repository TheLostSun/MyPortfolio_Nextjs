/** @type {import('tailwindcss').Config} */
const {fontFamily} =require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark:"#1b1b1b",
        light:"#bae6fd",
        primary:"#863E96",
        primaryDark:"#58E609",
      },
    },
  },
  plugins: [],
}