/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        badScript: ["Bad Script", "sans-serif"],
        castoroTitling: ["Castoro Titling", "sans-serif"],
        greatVibes: ["Great Vibes", "sans-serif"]
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

