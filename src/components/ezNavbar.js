import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Navbar = () => (
  <nav className="bg-prim-color flex-1 flex items-center justify-center py-3 z-20">
    <h2 className="invisible sm:visible text-highlight-red -mr-56 sm:mr-12 font-serif text-4xl font-normal">
      Player's Companion
    </h2>
    <div className="flex space-x-4 sm:space-x-12 sm:text-lg text-gray-800 font-thin font-noto">
      <Link className="hover:underline" to="/">
        Home
      </Link>
      <Link className="hover:underline" to="/characters">
        Characters
      </Link>
      <Link className="hover:underline" to="/map">
        Maps
      </Link>
      <Link className="hover:underline" to="/items">
        Inventory
      </Link>
      <Link className="hover:underline" to="/glossary">
        Glossary
      </Link>
    </div>
  </nav>
)
export default Navbar
