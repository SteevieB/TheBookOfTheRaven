import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ListItems } from "../components/itemCollection"
const Items = () => (
  <Layout>
    <Seo title="Items" />
    <div className="w-full mx-auto">
      <h1 className="text-2xl p-4 text-highlight-red">Party's inventory:</h1>
      <div className="mx-auto w-full">
        <ListItems />
      </div>
    </div>
  </Layout>
)

export default Items
