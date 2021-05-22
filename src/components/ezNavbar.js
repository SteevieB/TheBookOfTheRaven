import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Navbar = () => (
  <nav className="bg-prim-color flex-1 flex items-center justify-center py-3">
    <h2 className="invisible sm:visible -mr-64 sm:mr-12 font-sans text-2xl font-normal">
      <Link to="/">Player's Companion</Link>
    </h2>
    <div className="flex space-x-4 sm:space-x-12 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="/map">Karten</Link>
      <Link to="/glossary">Glossar</Link>
      <Link to="/items">Items</Link>
    </div>
  </nav>
)
export default Navbar
