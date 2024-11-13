import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#344054',
        'text-secondary': '#6E7279',
        'text-dark': '#101828',
        pink: '#D65AC9',
        'pink-accent': '#DF7E97',
        yellow: '#F5D424',
        gray: '#98A2B3',
        'gray-light': '#C8C8C8',
      },
    },
  },
  plugins: [],
} satisfies Config;
