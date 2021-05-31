import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Greeter, Goodbye } from "../components/Greeter"
import {
  Scarecrow,
  CrawlingClaw,
  Poltergeist,
  Wereraven,
  Gargoyle,
  Ghoul,
  Wight,
  Chalet,
  Warhorse,
  Spider,
} from "../components/enemies"

import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="w-full md:w-4/5 my-1 mx-auto">
      {/* <Chalet /> */}
      {/* <CrawlingClaw /> */}
      {/* <Scarecrow /> */}
      {/* <Poltergeist /> */}
      {/* <Wereraven /> */}
      {/* <Gargoyle /> */}
      {/* <Ghoul /> */}
      {/* <Wight /> */}
      {/* <Spider /> */}
    </div>
    <Greeter />
    <Goodbye />
  </Layout>
)

export default IndexPage
