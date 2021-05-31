import * as React from "react"
import Collapsible from "react-collapsible"

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
  ListEncounters,
  ScrollMishap,
} from "../components/dmStuff"
import {
  MapOfMysteryDM,
  MapChaletBrantifax,
  MapMausoleumDM,
} from "../components/Maps"

class Map extends React.Component {
  state = {
    open: false,
  }
  render() {
    return (
      <Layout>
        <Seo title="DM's Notes" />
        <ListEncounters />
        <ScrollMishap />
        {/* <MapOfMysteryDM /> */}
        {/* <MapChaletBrantifax /> */}
        {/* <MapMausoleumDM /> */}
        {/* <StatBlockCrawlingClaw /> */}
        {/* <StatBlockScarecrow /> */}
        {/* <StatBlockWereraven /> */}
        {/* <StatBlockSpecter /> */}
        {/* <StatBlockGargoyle /> */}
        {/* <StatBlockGhoul /> */}
        {/* <StatBlockWarhorseSkeleton /> */}
        {/* <StatBlockWight /> */}
      </Layout>
    )
  }
}

export default Map
