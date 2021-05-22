import * as React from "react"

import Item from "./Item"
import { StaticImage } from "gatsby-plugin-image"

class BookOfRaven extends React.Component {
    render() { return (
      <Item
        title="Ein mysteriöses Buch"
        subTitle="Abgenutzter Ledereinband, vergilbte knittrige Seiten"
        content="Das Buch wurde vermutlich von einem Raben fallen gelassen."
        content2="Der Bericht hört abrupt auf der drittletzten Seite auf. Die letzten beiden Seiten sind leer."
      >
        <StaticImage src="../images/items/book.png"></StaticImage>
      </Item>
    )}
}

class MapOfMystery extends React.Component {
  render() {
    return (
      <Item
        title="Karte aus dem mysteriösen Buch"
        subTitle="Vergilbte knittrige Karte"
        content="Diese Karte war im Buch eingeklemmt."
        content2="Es scheint so, als zeige sie einen Weg zu einem Schatz(?). Die Webgeschreibung liegt in Reimform vor."
      >
        <StaticImage src="../images/items/map.png"></StaticImage>
      </Item>
    )
  }
}

class Coins extends React.Component {
  render() {
    return (
      <Item
        title="Party funds"
        subTitle="100 Golden Coins"
        // content="Diese Karte war im Buch eingeklemmt."
        // content2="Es scheint so, als zeige sie einen Weg zu einem Schatz(?). Die Webgeschreibung liegt in Reimform vor."
      >
        <StaticImage src="../images/items/coins.png"></StaticImage>
      </Item>
    )
  }
}

export {
    BookOfRaven,
    MapOfMystery,
    Coins
}
