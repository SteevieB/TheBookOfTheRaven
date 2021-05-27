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
} from "../components/Maps"

const Map = () => (
  <Layout>
    <Seo title="Maps" />
    <MapOfMystery />
    <MapChaletBrantifax />
    <MapMausoleum />
    <MapChaletUG />
    <MapChaletEG />
    <MapChaletOG />
    <MapChaletOG2 />
  </Layout>
)

export default Map
