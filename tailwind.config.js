/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#1d1d1f',
        'grey-text': '#cccccc', 
      },
    },
  },
  plugins: [],
}

