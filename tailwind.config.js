module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3faf7",
          100: "#d7f0e7",
          200: "#afe0cf",
          300: "#7fc9b3",
          400: "#55ac95",
          500: "#3b917b",
          600: "#32806e",
          700: "#285d51",
          800: "#234c43",
          900: "#21403a",
          950: "#0e2521",
        },
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#373737",
          950: "#262626",
        },
      },
    },
  },
  plugins: [],
};
