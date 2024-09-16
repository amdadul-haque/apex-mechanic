import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "TT-firs": ["Archivo", "sans-serif"],
        // "TT-firs": ["TT Firs Neue Trl", "sans-serif"],
      },
      colors: {
        // primary: "#0545EA",
        primary: "#002394",
        "primary-light": "#007AFF",
        "primary-dark": "#002394",
        "gray-1": "#505459",
        black: {
          0: "#000",
          1: "#10141A",
          2: "#161B22",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
