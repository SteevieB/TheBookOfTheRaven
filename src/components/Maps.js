import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const jamboardLink =
  "https://jamboard.google.com/d/1Y8L70YKxCofBcgf7xkeIeEyiOhNx7m3k2mfHw5LHif4/edit?usp=sharing"

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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/chalet-brantifax-player-map.jpg"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/harrn-mausoleum-player-map.jpg"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/chalet-cellar.png"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/chalet-eg.png"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/chalet-og1.png"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/chalet-og2.png"></StaticImage>
        </Link>
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
        <Link to={jamboardLink} target="_blank">
          <StaticImage src="../images/maps/graveyard.png"></StaticImage>
        </Link>
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
