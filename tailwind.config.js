module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#222222",
      white: "#fcebd6",
      red: "#c63c24",
      yellow: "#F5Be1d",
      blue: "#2e5995",
      pink: "#ff07ff"
    },
    extend: {},
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
