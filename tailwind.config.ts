import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#16214A",
        "brand-blue": "#004870",
        "brand-orange": "#EB6332",
        "brand-gray-light": "#EEEEEE",
        "brand-maron": "#9A3612",
      },
      screens: {
        xl: "1267px",
      },
    },
  },
  plugins: [],
};
export default config;
