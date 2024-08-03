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
          50: "#f2fbf8",
          100: "#d2f5e9",
          200: "#a5ead3",
          300: "#6fd9b9",
          400: "#42bf9e",
          500: "#28a484",
          600: "#1e836b",
          700: "#1D6E5C",
          800: "#1b5449",
          900: "#1a473d",
          950: "#092a24",
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
      animation: {
        bounce: "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
