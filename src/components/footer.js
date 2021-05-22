import * as React from "react"
import "../styles/global.css"

const Footer = ({ author }) => (
  <footer className="bg-prim-dark">
    <div className="max-w-screen-lg px-2 sm:px-6 lg:px-8 mx-auto text-prim-light py-16">
      © {new Date().getFullYear()}, Webdesign: {author}
    </div>
  </footer>
)
export default Footer
