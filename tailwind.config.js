/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      win: ["Inter", "sans-serif"],
      logo: ["Jockey One", "sans-serif"],
    },
  },
  plugins: [],
};
