module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-light": "#e5e2e1",
        "prim-1": "#804412",
        "prim-dark": "#6f5c4d",
      },
    },
    fontFamily: {
      serif: ["Sofia", "Georgia"],
      roboto: ["Roboto", "Georgia"],
    },
    letterSpacing: {
      tightest: "-.3em",
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
