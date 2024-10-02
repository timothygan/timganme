import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'massive': '10rem',
      },
      colors: {
        background: 'var(--activeBackground)',
        menuBackground: 'var(--activeMenuBackground)',
        'dark-maroon': '#780000',
        'mid-red': '#C1121F',
        'cream': '#FDF0D5',
        'dark-blue': '#003049',
        'grey-blue': '#669BBC',
      },
      tracking: {
        'extra-wide': '0.2rem',
      }
    }
  },
  plugins: [],
};
export default config;
