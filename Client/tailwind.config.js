/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#2a4365',
          400: '#63b3ed',
        },
        gray: {
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
      },
    },
  },
  plugins: [],
};