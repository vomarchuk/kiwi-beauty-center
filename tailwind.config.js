/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accentColor: "#54c263",
      blue: "#66c7cd",
      red: "#f86868",
      dark: "#828282",
      text: "#333333",
      over: "#3d3c3c",
      green: "#bff56fff",
      textColor: "#ffffff",
    },
    fontSize: {
      medium: "14px",
      small: "12px",
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
      desktopLarge: "1440px",
      desktop4k: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
