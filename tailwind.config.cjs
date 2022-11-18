/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-light": "#9f4e9a",
        "purple-dark": "#7565b7",
        "blue-light": "#0084bc",
        "blue-dark": "#3077c2",
        "turquoise-light": "#008da9",
        "turquoise-dark": "#009290",
      },
    },
  },
  plugins: [],
};
