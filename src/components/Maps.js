import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

class MapOfMystery extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Mysteriöse Karte
        </h1>
        <StaticImage src="../images/maps/map.png"></StaticImage>
      </>
    )
  }
}

class MapChaletBrantifax extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Karte des Chalet Brantifax
        </h1>
        <StaticImage src="../images/maps/chalet-brantifax-player-map.jpg"></StaticImage>
      </>
    )
  }
}

class MapMausoleum extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Karte des Harrn Mausoleums
        </h1>
        <StaticImage src="../images/maps/harrn-mausoleum-player-map.jpg"></StaticImage>
      </>
    )
  }
}

export { MapOfMystery, MapChaletBrantifax, MapMausoleum }
