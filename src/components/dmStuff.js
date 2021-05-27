import * as React from "react"

import Item from "./Item"
import { StaticImage } from "gatsby-plugin-image"

class StatBlockWarhorseSkeleton extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/warhorse-skeleton.png"></StaticImage>
      </>
    )
  }
}

class StatBlockWereraven extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/wereraven.png"></StaticImage>
      </>
    )
  }
}

class StatBlockCrawlingClaw extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/crawling-claw.png"></StaticImage>
      </>
    )
  }
}

class StatBlockScarecrow extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/scarecrow.png"></StaticImage>
      </>
    )
  }
}

class StatBlockSpecter extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/specter.png"></StaticImage>
        <StaticImage src="../images/creatures/statblocks/specter-variant.png"></StaticImage>
      </>
    )
  }
}

class StatBlockGhoul extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/ghoul.png"></StaticImage>
      </>
    )
  }
}

class StatBlockGargoyle extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/gargoyle.png"></StaticImage>
      </>
    )
  }
}

class StatBlockWight extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/wight.png"></StaticImage>
      </>
    )
  }
}

export {
  StatBlockScarecrow,
  StatBlockCrawlingClaw,
  StatBlockWereraven,
  StatBlockGhoul,
  StatBlockWarhorseSkeleton,
  StatBlockSpecter,
  StatBlockGargoyle,
  StatBlockWight,
}
