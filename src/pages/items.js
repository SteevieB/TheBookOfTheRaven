import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BookOfRaven, MapOfMystery, Coins, RustyKey, Amulett } from "../components/itemCollection"

const Items = () => (
  <Layout>
    <Seo title="Items" />
    <div className="w-full mx-auto">
      <h1 className="text-2xl p-4">Party's inventory:</h1>
      <div className="mx-auto w-full">
        <div className="flex flex-col md:flex-row flex-wrap m-2 space-y-4 rounded">
          <BookOfRaven />
          <MapOfMystery />
          <Coins />
          <RustyKey />
          <Amulett/>
        </div>
      </div>
    </div>
  </Layout>
)

export default Items
