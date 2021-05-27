import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  StatBlockScarecrow,
  StatBlockCrawlingClaw,
  StatBlockWereraven,
  StatBlockGhoul,
  StatBlockWarhorseSkeleton,
  StatBlockSpecter,
  StatBlockGargoyle,
  StatBlockWight,
} from "../components/dmStuff"
import {
  MapOfMysteryDM,
  MapChaletBrantifax,
  MapMausoleumDM,
} from "../components/Maps"

const Map = () => (
  <Layout>
    <Seo title="DM's Notes" />
    {/* <MapOfMysteryDM /> */}
    {/* <MapChaletBrantifax /> */}
    {/* <MapMausoleumDM /> */}
    <StatBlockCrawlingClaw />
    <StatBlockScarecrow />
    <StatBlockWereraven />
    <StatBlockSpecter />
    <StatBlockGargoyle />
    <StatBlockGhoul />
    <StatBlockWarhorseSkeleton />
    <StatBlockWight />
  </Layout>
)

export default Map
