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
      <Andreas init="" />
      <Sumsi init="" />
      <Johannes init="12" />
      <Julian init="11" />
      <HungNi init="10" />
      <Fabi init="" />
    </div>
  </Layout>
)

export default CharacterPage
