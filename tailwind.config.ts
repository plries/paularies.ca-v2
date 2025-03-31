import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "nav-bar-dark": "var(--nav-bar-dark)",
      },
      colors: {
        greyscale: {
          50: "--var(--color-greyscale-50)",
          100: "--var(--color-greyscale-100)",
          200: "--var(--color-greyscale-200)",
          300: "--var(--color-greyscale-300)",
          400: "--var(--color-greyscale-400)",
          500: "--var(--color-greyscale-500)",
          600: "--var(--color-greyscale-600)",
          700: "--var(--color-greyscale-700)",
          800: "--var(--color-greyscale-800)",
          900: "--var(--color-greyscale-900)",
          950: "--var(--color-greyscale-950)",
        },
        sky: {
          50: "--var(--color-sky-50)",
          100: "--var(--color-sky-100)",
          200: "--var(--color-sky-200)",
          300: "--var(--color-sky-300)",
          400: "--var(--color-sky-400)",
          500: "--var(--color-sky-500)",
          600: "--var(--color-sky-600)",
          700: "--var(--color-sky-700)",
          800: "--var(--color-sky-800)",
          900: "--var(--color-sky-900)",
          950: "--var(--color-sky-950)",
        },
        grass: {
          50: "--var(--color-grass-50)",
          100: "--var(--color-grass-100)",
          200: "--var(--color-grass-200)",
          300: "--var(--color-grass-300)",
          400: "--var(--color-grass-400)",
          500: "--var(--color-grass-500)",
          600: "--var(--color-grass-600)",
          700: "--var(--color-grass-700)",
          800: "--var(--color-grass-800)",
          900: "--var(--color-grass-900)",
          950: "--var(--color-grass-950)",
        },
      },
      fontFamily: {
        hankenGrotesk: "var(--font-hanken-grotesk)",
        instrumentSerif: "var(--font-instrument-serif)",
        dmMono: "var(--font-dm-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
