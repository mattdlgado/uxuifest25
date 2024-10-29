/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('uxuifest-background.webp')",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "100%": {
            opacity: 1,
          },
        },
        fadeInUp: {
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
