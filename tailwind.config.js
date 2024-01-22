const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive', ...defaultTheme.fontFamily.sans],
        great: ["Great Vibes", "cursive", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};