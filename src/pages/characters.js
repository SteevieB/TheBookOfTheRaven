import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Andreas,
  Sumsi,
  Johannes,
  Julian,
  HungNi,
  Fabi,
} from "../components/characters"

const CharacterPage = () => (
  <Layout>
    <Seo title="Characters" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Andreas init="6" />
      <Sumsi init="23" />
      <Johannes init="19" />
      <Julian init="5" />
      <HungNi init="4" />
      <Fabi init="16" />
    </div>
  </Layout>
)

export default CharacterPage
