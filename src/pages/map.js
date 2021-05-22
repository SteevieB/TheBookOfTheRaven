import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { MapOfMystery, MapChaletBrantifax, MapMausoleum } from "../components/Maps"

const Map = () => (
  <Layout>
    <Seo title="Map" />
    <MapOfMystery />
    <MapChaletBrantifax />
    <MapMausoleum />
  </Layout>
)

export default Map
