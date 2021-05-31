import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  MapOfMystery,
  MapChaletBrantifax,
  MapMausoleum,
  MapChaletUG,
  MapChaletEG,
  MapChaletOG,
  MapChaletOG2,
  MapOfTheWorld,
} from "../components/Maps"

const Map = () => (
  <Layout>
    <Seo title="Maps" />
    {/* <MapOfMystery /> */}
    {/* <MapChaletBrantifax /> */}
    {/* <MapMausoleum /> */}
    {/* <MapChaletUG /> */}
    {/* <MapChaletEG /> */}
    {/* <MapChaletOG /> */}
    {/* <MapChaletOG2 /> */}
    <MapOfTheWorld />
  </Layout>
)

export default Map
