/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat', sans-serif"],
        vollkorn: ["'Vollkorn', serif"],
      },
      colors: {
        'indigo-dye': '#134864',
      },
    },
  },
  plugins: [],
}
