/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
