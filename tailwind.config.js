/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': "#ce0033",
        'content': "#f0f0f0",
        'dark-gray': "#d9d9d9",
      }
    },
  },
  plugins: [],
}

