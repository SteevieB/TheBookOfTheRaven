import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

class MapOfMystery extends React.Component {
  render() {
    return (
        <>
            <h1>Mysteriöse Karte</h1>
            <StaticImage src="../images/maps/map.jpg"></StaticImage>
        </> 
    )
  }
}

class MapChaletBrantifax extends React.Component {
  render() {
    return (
      <>
        <h1>Karte des Chalet Brantifax</h1>
        <StaticImage src="../images/maps/chalet-brantifax-map.jpg"></StaticImage>
      </>
    )
  }
}

class MapMausoleum extends React.Component {
  render() {
    return (
      <>
        <h1>Karte des Harrn Mausoleums</h1>
        <StaticImage src="../images/maps/harrn-mausoleum-map.jpg"></StaticImage>
      </>
    )
  }
}

export { 
    MapOfMystery, 
    MapChaletBrantifax,
    MapMausoleum 
}