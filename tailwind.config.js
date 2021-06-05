module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-light": "#f3f2f1",
        "prim-color": "#8a7f7b",
        "prim-dark": "#3e3e3b",
        "highlight-red": "#8b281c",
        "highlight-red2": "#922610",
        "highlight-yellow": "#d3b63b",
        "bg-creme": "#fdf1dc",
        "border-orange": "#e69a28",
      },
    },
    fontFamily: {
      serif: ["Reenie Beanie", "Georgia"],
      roboto: ["Roboto", "Georgia"],
      dndheading: ["Libre Baskerville", "Georgia"],
      noto: ["Noto Sans"],
    },
    letterSpacing: {
      tightest: "-.3em",
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
