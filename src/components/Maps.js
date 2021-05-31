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

class MapChaletUG extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Inside Chalet Brantifax
        </h1>
        <StaticImage src="../images/maps/chalet-cellar.png"></StaticImage>
      </>
    )
  }
}

class MapChaletEG extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Inside Chalet Brantifax
        </h1>
        <StaticImage src="../images/maps/chalet-eg.png"></StaticImage>
      </>
    )
  }
}

class MapChaletOG extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Inside Chalet Brantifax
        </h1>
        <StaticImage src="../images/maps/chalet-og1.png"></StaticImage>
      </>
    )
  }
}

class MapChaletOG2 extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          Inside Chalet Brantifax
        </h1>
        <StaticImage src="../images/maps/chalet-og2.png"></StaticImage>
      </>
    )
  }
}

class MapOfTheGraveyard extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          A graveyard in Shadowfell
        </h1>
        <StaticImage src="../images/maps/graveyard.png"></StaticImage>
      </>
    )
  }
}

class MapOfTheWorld extends React.Component {
  render() {
    return (
      <>
        <h1 className="p-4 text-2xl font-bold text-highlight-red">
          The sword coast
        </h1>
        <StaticImage src="../images/maps/world-map.png"></StaticImage>
      </>
    )
  }
}

export {
  MapOfMystery,
  MapChaletBrantifax,
  MapOfTheGraveyard,
  MapMausoleum,
  MapChaletUG,
  MapChaletEG,
  MapChaletOG,
  MapChaletOG2,
  MapOfTheWorld,
}
