import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Cards from "../components/cards"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"
import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="w-full md:w-4/5 m-1 mx-auto">
      {/* <StaticImage src="../images/chalet-brantifax.png"></StaticImage> */}
      {/* <StaticImage src="../images/creatures/wereraven.png"></StaticImage> */}
    </div>
    <div className="w-full sm:w-3/5 md:w-2/5 flex mx-auto mt-6 sm:mt-4">
      <PostCard
        title="Welcome travellers on a mysterious jorney."
        subTitle="I hope you're sitting comfortable. ;)"
        content="
        You'll find additional resources in this player's companion.
        Please have a look around! The Website might update dependent on the party's progress in the game.
        "
      >
        <StaticImage src="../images/candlekeep-mysteries-banner.webp"></StaticImage>
      </PostCard>
    </div>
  </Layout>
)

export default IndexPage



