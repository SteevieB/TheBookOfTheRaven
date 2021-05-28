import * as React from "react"

import Item from "./Item"
import PropertyOfCandlekeep from "../components/PropertyOfCandlekeep"
import { StaticImage } from "gatsby-plugin-image"

class BookOfRaven extends React.Component {
  render() {
    return (
      <Item
        title="Ein mysteriöses Buch"
        subTitle="Abgenutzter Ledereinband, vergilbte knittrige Seiten"
        content="Das Buch wurde vermutlich von einem Raben fallen gelassen."
        content2="Der Bericht hört abrupt auf der drittletzten Seite auf. Die letzten beiden Seiten sind leer."
      >
        <StaticImage src="../images/items/book.png"></StaticImage>
      </Item>
    )
  }
}

class BusinessCard extends React.Component {
  render() {
    return (
      <Item
        title="A small card fell out of the book"
        content="It states it belonges to the Library of Candlekeep."
      >
        <PropertyOfCandlekeep />
      </Item>
    )
  }
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
      <Item title="Party funds" subTitle="100 Golden Coins">
        <StaticImage src="../images/items/coins.png"></StaticImage>
      </Item>
    )
  }
}

class RustyKey extends React.Component {
  render() {
    return (
      <Item
        title="A small rusty key"
        content="The piece of ironwork sits as light as a feather in your hand as your fingertips trace each groove and bend. Where this key will find its lock, only time will tell."
      >
        <StaticImage src="../images/items/rusty-key.png"></StaticImage>
      </Item>
    )
  }
}

class Amulett extends React.Component {
  render() {
    return (
      <Item
        title="Amulet of Sune"
        content="This amulet is attached around one’s neck by a fine golden chain and was smithed, shaped, polished, and blessed to honor the deity Sune. It is said that fiends and undead can be made to retreat from the holy power of one's true belief holding such a symbol aloft."
        content2="The amulet opens and contains a tiny portrait of a woman."
      >
        <StaticImage src="../images/items/amulett.png"></StaticImage>
      </Item>
    )
  }
}

class GoldenRing extends React.Component {
  render() {
    return (
      <Item
        title="Golden Ring"
        content="A golden signet ring with an imprint of a deer. The metal is a bit scratched and dented."
      >
        <StaticImage src="../images/items/gold-ring.png"></StaticImage>
      </Item>
    )
  }
}

class Journal extends React.Component {
  render() {
    return (
      <Item
        title="The Baroness's Journal"
        content="A neatly leather-bound journal with a wolf imprinted at the front. 
        The yellowed pages are furled at the corners and the spine is bent from use."
      >
        <StaticImage src="../images/items/journal.png"></StaticImage>
      </Item>
    )
  }
}

class StuddedLeatherArmor extends React.Component {
  render() {
    return (
      <Item
        title="A Studded Leather Armor"
        subTitle="Armor class: 12 + Dex modifier"
        content="Boiled brown leather has been cleverly layered to make this suit of armor both protective and flexible. All the pieces seem to be present. There are even little leather sabatons for the feet, which is unusual for leather armor."
      >
        <StaticImage src="../images/items/studded-leather.png"></StaticImage>
      </Item>
    )
  }
}

class RingOfJumping extends React.Component {
  render() {
    return (
      <Item
        title="Wooden Ring"
        // subTitle="Cast Jump as a bonus Action"
        content="There are nice engravings and inlayed emeralds on the outside"
        // content2="While wearing this ring, you can cast the jump spell from it as a bonus action at will, but can target only yourself when you do so."
      >
        <StaticImage src="../images/items/ring-of-jumping.png"></StaticImage>
      </Item>
    )
  }
}

class Saddle extends React.Component {
  render() {
    return (
      <Item
        title="Nicely crafted Saddle"
        content="Soft leather over a light frame, this is designed for comfort. 
        Every good saddle eventually conforms to horse and rider, like a favorite shoe or an old hat. 
        The stirrup irons show the wear of a thousand rides, colored and patterned for beauty as well as utility."
        content2="While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
      >
        <StaticImage src="../images/items/saddle.png"></StaticImage>
      </Item>
    )
  }
}

export {
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
}
