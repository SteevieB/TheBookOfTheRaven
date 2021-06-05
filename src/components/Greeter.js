import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"

class Greeter extends React.Component {
  render() {
    return (
      <>
        <div className="w-full sm:w-3/5 md:w-2/5 flex mx-auto mt-6 sm:mt-4">
          <PostCard
            title="Welcome travellers on a mysterious journey."
            subTitle="I hope you're sitting comfortably. ;)"
            content="
        You'll find additional resources in this player's companion.
        Please have a look around! The Website might update dependent on the party's progress in the game.
        "
          >
            <div className="w-1/2 truncate -mt-6 sm:-mt-0 mx-auto">
              <StaticImage src="../images/assets/raven-icon.png"></StaticImage>
            </div>
          </PostCard>
        </div>
      </>
    )
  }
}
class Goodbye extends React.Component {
  render() {
    return (
      <>
        <div className="w-full sm:w-3/5 md:w-2/5 flex mx-auto mt-6 sm:mt-4 hidden">
          <PostCard
            title="Farewell folks of courage."
            subTitle="May the raven's blessing always guard your ways."
            content="
            Thank you for playing! I hope you had fun. :)
            There might even be a chapter two, for those of you brave enough to continue...
        "
          >
            <div className="w-3/5 truncate mt-8 mx-auto">
              <StaticImage src="../images/assets/raven-bye.png"></StaticImage>
            </div>
          </PostCard>
        </div>
      </>
    )
  }
}

export { Greeter, Goodbye }
