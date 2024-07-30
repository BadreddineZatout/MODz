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
        '50': '#f3faf7',
        '100': '#d6f1e8',
        '200': '#ade2d2',
        '300': '#7cccb6',
        '400': '#51b099',
        '500': '#379580',
        '600': '#2c7c6c',
        '700': '#256054',
        '800': '#224d46',
        '900': '#20413b',
        '950': '#0d2622',
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
