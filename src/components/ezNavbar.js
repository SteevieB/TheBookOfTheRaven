import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Navbar = () => (
  <nav className="bg-prim-color flex-1 flex items-center justify-center py-3 z-20">
    <h2 className="invisible sm:visible -mr-56 sm:mr-12 font-sans text-2xl font-normal">
      Player's Companion
    </h2>
    <div className="flex space-x-4 sm:space-x-12 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="/map">Maps</Link>
      <Link to="/glossary">Glossary</Link>
      <Link to="/items">Items</Link>
    </div>
  </nav>
)
export default Navbar
