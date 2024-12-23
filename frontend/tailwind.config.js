/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
   },
   colors: {
    back: "#f2f2f2",
   },
  },
 },
 plugins: [],
};
