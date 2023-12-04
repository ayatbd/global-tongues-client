/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#666666",
        accent: "#14C196",
        darkcolor: "#212226",
      },
    },
  },
  plugins: [require("daisyui")],
};
