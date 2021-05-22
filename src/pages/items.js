import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BookOfRaven, MapOfMystery, Coins } from "../components/itemCollection"

const Items = () => (
  <Layout>
    <Seo title="Items" />
    <h1 className="text-2xl p-4">Euer Inventar:</h1>
    <div className="flex flex-col md:flex-row mb-4 m-2 rounded h-full">
      <BookOfRaven />
      <MapOfMystery />
        <Coins/>
    </div>
  </Layout>
)

export default Items
