import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
        xl: "1280px",
      },
      colors: {
        red: "#AE070D",
        rose: "#6A0408",
        gray: {
          border: "#C2BFC0",
          primary: "#685C5C",
          secondary: "#2E3342",
          inactive: "#D4D4D4",
          dark: "#0A0001",
        },
        black: "#1E0C0C",
        pink: "#FBF3F4",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
