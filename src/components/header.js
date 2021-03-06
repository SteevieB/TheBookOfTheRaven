import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./ezNavbar"
import BgImg from "./bgImage"

const Header = ({ siteTitle, subTitle }) => (
  <>
    <header className="w-full">
      <div className="truncate h-36 md:h-48 z-0 relative">
        <BgImg />
      </div>
      <div className="z-1 h-44 sm:h-48 md:h-48 -mt-44 sm:-mt-48 relative">
        <div className="text-center p-12">
          <h1 className="text-prim-light drop-shadow font-noto text-5xl md:text-6xl">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <h2 className="text-prim-light text-2xl font-noto">{subTitle}</h2>
        </div>
      </div>
      <div className="relative z-1">
        <Navbar />
      </div>
    </header>
  </>
)

export default Header
