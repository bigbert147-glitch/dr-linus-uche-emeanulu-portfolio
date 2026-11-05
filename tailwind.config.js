/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Scholar palette — approved design direction
        midnight: {
          50: "#eef2f7",
          100: "#d5dfee",
          200: "#aabddd",
          300: "#7593c5",
          400: "#4a6da8",
          500: "#2e4f8a",
          600: "#243d6e",
          700: "#1c3056",
          800: "#152440",
          900: "#0f1a30",
          950: "#0a1224",
        },
        teal: {
          50: "#effbf9",
          100: "#d7f5f0",
          200: "#b0ebe3",
          300: "#7adad0",
          400: "#43c1b4",
          500: "#26a89b",
          600: "#1c8780",
          700: "#186b66",
          800: "#155452",
          900: "#134745",
          950: "#0a2928",
        },
        scholar: {
          gold: "#c2a35c",
          slate: "#475569",
          paper: "#faf9f7",
          ink: "#1a1a2e",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
