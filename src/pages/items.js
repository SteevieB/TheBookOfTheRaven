import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  BookOfRaven,
  BusinessCard,
  MapOfMystery,
  Coins,
  RustyKey,
  Amulett,
  GoldenRing,
  Journal,
  StuddedLeatherArmor,
  RingOfJumping,
  Saddle,
} from "../components/itemCollection"
const Items = () => (
  <Layout>
    <Seo title="Items" />
    <div className="w-full mx-auto">
      <h1 className="text-2xl p-4 text-highlight-red">Party's inventory:</h1>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <BookOfRaven />
          <BusinessCard />
          <MapOfMystery />
          <Coins />
          <RustyKey />
          <Amulett />
          <GoldenRing />
          <Journal />
          <StuddedLeatherArmor />
          <RingOfJumping />
          <Saddle />
        </div>
      </div>
    </div>
  </Layout>
)

export default Items
