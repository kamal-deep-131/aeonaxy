/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading-font': "'Georgia', serif;",
        'normal-font': "'Circular', sans-serif;",
      },
      colors: {
        'myBlue': "#4479ff",
        'light-blue': "#bcdfff",
      }
    },
  },
  plugins: [],
}

