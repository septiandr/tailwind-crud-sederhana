/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4678F3", // Warna primer
          hover: "#0056b3", // Warna saat hover
        },
        secondary: {
          DEFAULT: "#F8F8F8", // Warna sekunder
          hover: "#495057", // Warna saat hover
        },
        textgray: "#808080;",
      },
    },
  },
  plugins: [],
};
