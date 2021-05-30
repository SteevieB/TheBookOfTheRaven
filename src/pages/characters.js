import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Andreas,
  Sumsi,
  Johannes,
  Julian,
  HungNi,
} from "../components/characters"

const CharacterPage = () => (
  <Layout>
    <Seo title="Characters" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Andreas init="14" />
      <Sumsi init="" />
      <Johannes init="12" />
      <Julian init="11" />
      <HungNi init="10" />
    </div>
  </Layout>
)

export default CharacterPage
