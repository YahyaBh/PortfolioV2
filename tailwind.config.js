/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#9A7327"
      },
      fontFamily: {
        regular: ['Canvas', 'sans-serif'],  // Replace with your desired fonts
        black: ['CanvasBlack', 'sans-serif'],
        light:['CanvasLight' , 'sans-serif'],
      },
    },
  },
  plugins: [],
};
