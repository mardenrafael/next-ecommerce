/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F2F2F2",
      black: "#0D0D0D",
      orange: "#BF681B",
      yellow: "#DBF288",
      blue: "#2481A6",
    },
  },
  plugins: [],
};
