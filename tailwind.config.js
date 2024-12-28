/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoPrimary1: "#000000",
        logoPrimary2: "#ffbb00",
        buttonPrimaryMain: "#ffcf4b",
        buttonPrimaryStroke: "#27ae60",
        buttonSecondaryMain: "#f9f9f9",
        buttonSecondaryStroke: "#cec6c6",
        textMain: "#263238",
        textSecondary: "#65624c",

        greys1: "#333333",
        greys2: "#4f4f4f",
        greys3: "#828282",
        greys4: "#b7b6b8",
        greys5: "#e0e0e0",
      },
      fontSize: {
        heading1: "58px",
        heading2: "36px",
        heading3: "24px",
        heading4: "20px",
        heading5: "18px",
        heading6: "16px",
      },
    },
  },
  plugins: [],
};
