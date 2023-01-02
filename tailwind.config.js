/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#282829',
        'eerie-black': '#141415',
        'platinum': '#E6E6E6',
        'cultured': '#F5F5F5',
        'baby-powder-white': '#FBFEF9',
        'star-command-blue': '#0E79B2',
        'maroon-x11': '#BF1363',
        'deep-saffron': '#F39237',
        'granite-gray': '#646468',
        'spanish-gray': '#999999',
        'grayish': '#B2B2B2',
      },
    },

    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Georgia', 'serif'],
    }
  },
  plugins: [],
}
