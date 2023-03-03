/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: colors.blue },
      fontFamily: {
        sans: ['GT Walsheim', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        x: ['0.625rem', '0.75rem'],
        xii: ['0.75rem', '1rem'],
        xiv: ['0.875rem', '1.25rem'],
        xvi: ['1rem', '1.5rem'],
      },
    },
  },
  plugins: [],
};
