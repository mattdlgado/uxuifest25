/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards",
      },
      backgroundImage: {
        hero: 'url("images/uxuifest-background.webp")',
      },
      colors: {
        cyan: {
          450: "#29EDE7",
        },
        purple: {
          450: "#AD60FF",
          750: "#5d4a86",
        },
        red: {
          450: "#FF7262",
        },
      },
      container: {
        center: true,
        padding: "20px",
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
