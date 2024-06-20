/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb,rb}",
    "./frontend/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007CBE",
        secondary: "#FFC107",
        background: "#F8F9FA",
        dark: "#343A40",
      },
    },
  },
  plugins: [],
};
