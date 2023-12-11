/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "#ec775f",
        cyan: "	#76b5bc",
        darkBrown: "#382314",
        mediumBrown: "#93867b",
        lightCream: "#f8e9dd",
        veryPaleOrange: "	#fffaf5",
      }
    },
  },
  plugins: [],
};
