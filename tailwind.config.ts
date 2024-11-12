import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#344054",
        "text-secondary": "#6E7279",
        pink: "#D65AC9",
        "pink-accent": "#DF7E97",
        yellow: "#F5D424",
        "gray-light": "#98A2B3",
      },
    },
  },
  plugins: [],
} satisfies Config;
