import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./ezNavbar"
import BgImg from "./bgImage"

const Header = ({ siteTitle, subTitle }) => (
  <header className="absolute w-full">
    <div className="h-32 md:h-48 z-0 relative">
      <BgImg />
    </div>
    <div className="z-10 h-44 sm:h-48 md:h-48 -mt-44 sm:-mt-48 relative">
      <div className="text-center p-12">
        <h1 className="text-gray-200 drop-shadow text-5xl md:text-6xl">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <h2 className="text-gray-200 text-2xl font-roboto">{subTitle}</h2>
      </div>
    </div>
    <Navbar />
  </header>
)

export default Header
