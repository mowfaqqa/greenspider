/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', "sans-serif"],
        serif: ['Manrope', "sans-serif"],
        mono: ['Manrope', "sans-serif"],
      },
      colors: {
        primary: {
          main: "#2FAC4E",
        },
        secondary: {
          main: "#C79E7B",
          hover: "#B15200",
        },
      },
    },
  },
  plugins: [],
};
