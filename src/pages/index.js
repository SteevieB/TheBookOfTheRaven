import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Cards from "../components/cards"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"
import PropertyOfCandlekeep from "../components/PropertyOfCandlekeep"
import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PropertyOfCandlekeep />
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
        <div className="w-1/2 truncate -mt-6 sm:-mt-0 mx-auto">
          <StaticImage src="../images/raven-icon.png"></StaticImage>
        </div>
      </PostCard>
    </div>
  </Layout>
)

export default IndexPage



