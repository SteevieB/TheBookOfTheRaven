import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

class Scarecrow extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/scarecrow.png"
        ></StaticImage>
      </>
    )
  }
}
class CrawlingClaw extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/crawling-claw.png"
        ></StaticImage>
      </>
    )
  }
}
class Poltergeist extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/poltergeist.png"
        ></StaticImage>
      </>
    )
  }
}
class Wereraven extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/wereraven.png"
        ></StaticImage>
      </>
    )
  }
}
class Gargoyle extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/gargoyle.png"
        ></StaticImage>
      </>
    )
  }
}
class Ghoul extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/ghoul.png"
        ></StaticImage>
      </>
    )
  }
}
class Wight extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/wight.png"
        ></StaticImage>
      </>
    )
  }
}

class Warhorse extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/warhorse-skeleton.png"
        ></StaticImage>
      </>
    )
  }
}

class Spider extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/creatures/spider.png"
        ></StaticImage>
      </>
    )
  }
}

class Chalet extends React.Component {
  render() {
    return (
      <>
        <StaticImage
          className="mx-auto"
          src="../images/banner/chalet-brantifax.webp"
        ></StaticImage>
      </>
    )
  }
}

export {
  Scarecrow,
  CrawlingClaw,
  Poltergeist,
  Wereraven,
  Chalet,
  Gargoyle,
  Ghoul,
  Wight,
  Warhorse,
  Spider,
}
