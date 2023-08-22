/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat', sans-serif"],
        vollkorn: ["'Vollkorn', serif"],
      },
      colors: {
        'ice-blue': '#ECF0FE',
        'ocean-blue': '#0B2FB1',
        'deep-blue': '#020922',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
