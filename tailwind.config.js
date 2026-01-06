/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'church-red': '#b91c1c', 
        'paper': '#f8fafc',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}