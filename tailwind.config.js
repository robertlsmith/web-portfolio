/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
      },
      colors: {
        'persian-indigo': '#27187e',
        'antiflash-white': '#f1f2f6',
        'cornflower-blue': '#758BFD',
        'periwinkle': '#AEB8FE',
        'ut-orange': '#FF8600',
      },
    },
  },
  plugins: [],
}
