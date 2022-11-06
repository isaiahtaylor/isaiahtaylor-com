/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#282829',
        'eerie-black': '#141415',
        'platinum': '#E6E6E6',
        'cultured': '#F5F5F5',
      },
    },

    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Georgia', 'serif'],
    }
  },
  plugins: [],
}
