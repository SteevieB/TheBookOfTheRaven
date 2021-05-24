import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

class Scarecrow extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/scarecrow.png"></StaticImage>
        </div>
      </>
    )
  }
}
class CrawlingClaw extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/crawling-claw.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Poltergeist extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/poltergeist.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Wereraven extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/wereraven.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Gargoyle extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/gargoyle.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Ghoul extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/ghoul.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Wight extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/creatures/wight.png"></StaticImage>
        </div>
      </>
    )
  }
}
class Chalet extends React.Component {
  render() {
    return (
      <>
        <div>
          <StaticImage src="../images/banner/chalet-brantifax.webp"></StaticImage>
        </div>
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
}
