import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

const BgImg = () => (
  <StaticImage
    src="../images/banner/chalet-brantifax.webp"
    alt="chalet-brantifax"
    loading="eager"
    className="w-full h-full z-0"
  />
)
export default BgImg
