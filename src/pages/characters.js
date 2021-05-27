import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  DefaultCharacter,
  Sumsi,
  Andreas,
  Julian,
} from "../components/character"

const CharacterPage = () => (
  <Layout>
    <Seo title="Characters" />
    <DefaultCharacter init="15" />
    <Sumsi init="14" />
    <Andreas init="12" />
    <Julian init="8" />
  </Layout>
)

export default CharacterPage
