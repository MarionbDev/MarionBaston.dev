/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },

    colors: {
      free_grey: "#F3F3F3",
      free_purple: "#5e00b8",
      free_yellow: "#FFE355",
      purple: "#5e00b8",
      purple_dark: "#8d3dd8",
      txt_black: "#4E525A",
      white: "#f3f1f1",
      black: "#1E1E1E",
      // dark_bg: "#541696",
      bg_white: "#ffffff",
      pale_pink: "#faf8fac0",
      pale_purple: "#400e41c0",
      // dark_black: "#070c21",
      purple_text: "#4f4956",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
