/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
       'cs-bg': '#0C1928', // background to match logo
      },
      backgroundImage: {
        'cs-gradient': 'linear-gradient(135deg, #0C1928, #1f2937)',
      },
    },
  },
  plugins: [],
}
