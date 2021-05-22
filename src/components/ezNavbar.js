import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Navbar = ({ author }) => (
  <nav className="bg-yellow-100 flex-1 flex items-center justify-center py-3">
    <h2 className="invisible sm:visible mt-2 -mr-64 sm:mr-12 font-serif text-3xl tracking-normal font-black">
      <Link to="/">Resources</Link>
    </h2>
    <div className="flex space-x-4 sm:space-x-12 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="/map">Karten</Link>
      <Link to="/">Glossar</Link>
      <Link to="/items">Items</Link>
    </div>
  </nav>
)
export default Navbar
