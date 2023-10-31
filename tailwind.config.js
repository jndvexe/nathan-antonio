/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple': '#100023',
        'light-purple': '#1F1C3F',
        'white': '#D5E3EF',
        'cyan': '#6FE7D6',
        'yellow': '#EBB900',
      }
    },
    backgroundImage: {
      'hero-bubbles': "url('/public/hero-bubbles.png')",
      'E-logbook-card': "url('/public/E-Logbook-Card.png')",
      'Omsimity-card': "url('/public/Omsimity-Card.png')",
      'Manang-Beadies-card': "url('/Manang-beadies-card.png')",
      'Palista-card': "url('/public/Palista-card')",
    }
  },
  plugins: [],
}

