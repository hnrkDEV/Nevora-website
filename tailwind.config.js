/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#1a1a1a",
        graphite: "#1A1A1A",
        snow: "#F5F5F5",
        fog: "#CFCFCF",
        ice: "#E4E4E4",
        accent: "#2D9CDB",
      },
    },
  },
  plugins: [],
};
