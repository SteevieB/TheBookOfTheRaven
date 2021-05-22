module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-light": "#f3f2f1",
        "prim-color": "#8a7f7b",
        "prim-dark": "#3e3e3b",
      },
    },
    fontFamily: {
      serif: ["Reenie Beanie", "Georgia"],
      roboto: ["Roboto", "Georgia"],
    },
    letterSpacing: {
      tightest: "-.3em",
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
