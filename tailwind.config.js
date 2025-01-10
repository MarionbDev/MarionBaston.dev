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
      purple: "#8300E9",
      txt_black: "#4E525A",
      white: "#cfcccc",
      black: "#1E1E1E",
      dark_bg: "#541696",
      bg_white: "#ffffff",
      pale_pink: "#faf8fac0",
      pale_purple: "#400e41c0",
      dark_black: "#070c21",
      purple_text: "#4f4956",
    },

    extend: {
      colors: {},
      backgroundImage: {
        dark_bg_profile: "linear-gradient(18deg, #b478f8 35%, #dacaec 100%);",
        bg_profile: "linear-gradient(18deg, #9045f9 25%, #ffffff 100%);",
      },

      borderRadius: {},
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
