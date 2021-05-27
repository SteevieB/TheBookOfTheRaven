import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  DefaultCharacter,
  Andreas,
  Sumsi,
  Johannes,
  Julian,
  HungNi,
} from "../components/characters"

const CharacterPage = () => (
  <Layout>
    <Seo title="Characters" />
    {/* <DefaultCharacter init="10" /> */}
    <Andreas init="14" />
    <Sumsi init="13" />
    <Johannes init="12" />
    <Julian init="11" />
    <HungNi init="10" />
  </Layout>
)

export default CharacterPage
