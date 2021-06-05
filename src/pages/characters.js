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
      <Johannes init="" />
      <Julian init="" />
      <HungNi init="" />
      <Fabi init="" />
    </div>
  </Layout>
)

export default CharacterPage
