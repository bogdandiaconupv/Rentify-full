/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#474a6c",
        pearl_green: "#77d4b8",
        back_green: "#e7fffb",
        footer_color: "#77d4b8",
        navigator_color: "#88a4d9",
        text_color1: "#a78372",
        test_color1: "#8f82b0",
        header_color: "#e9f0ff",
        black_glass: "rgba(0, 0, 0, 0.35)",
      },
    },
    fontFamily: {
      Buck: ["Buck", "sans-serif"],
      semibold: ["semibold", "sans-serif"],
      nexa: ["nexa", "sans-serif"],
      boom: ["boom", "sans-serif"],
      champ: ["champ", "sans-serif"],
    },
  },
  plugins: [],
};
