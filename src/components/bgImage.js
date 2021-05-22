import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

const BgImg = () => (
  <StaticImage
    src="../images/chalet-brantifax.webp"
    alt="background image"
    loading="eager"
    className="object-fill w-full h-full z-0"
  />
)
export default BgImg
