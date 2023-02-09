/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "monospace", ...defaultTheme.fontFamily.sans],
        logo: ["Handlee", "serif"],
      },
    },
  },
  plugins: [],
};
