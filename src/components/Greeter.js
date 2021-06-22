import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"

class Greeter extends React.Component {
  render() {
    return (
      <>
        <div className="w-full sm:w-3/5 md:w-2/5 flex mx-auto mt-6 sm:mt-4">
          <PostCard
            title="Welcome back on our mysterious journey."
            subTitle="I hope you're sitting comfortably. ;)"
            content="
        You'll find additional resources in this player's companion.
        Please have a look around! The Website might update dependent on the party's progress in the game.
        "
            content2="Soundtale Session: 48124"
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
        <div className="w-full sm:w-3/5 md:w-2/5 flex mx-auto mt-6 sm:mt-4">
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

class Recap extends React.Component {
  render() {
    return (
      <>
        <div className="w-full sm:w-3/5 md:w-3/5 flex mx-auto mt-6 sm:mt-4">
          <PostCard
            title="Recap of last session"
            // subTitle="May the raven's blessing always guard your ways."
            content="
            Last time you found a book (which literally fell out of the sky).
            Within it there was another(!) fake treasure map.
            You were able to follow tha map to it's destination and found Chalet Brantifax.
            The house seems haunted, and you might've uncoverd a few of it's secrets.
            Also the solitary Chalet is the meeting Point of the Scarlet Sash,
            a group of people who try to steal and hide items of evil magic.
            They told you they have nothing to do with the house,
            they just found the location very convenient - remote and near a shadow crossing.
            As they realized you're not a thread nor in posession of evil magic, 
            they let you sleep in the house.


        "
          >
            <div className="w-3/5 truncate mt-8 mx-auto">
              <StaticImage src="../images/assets/raven-recap.png"></StaticImage>
            </div>
          </PostCard>
        </div>
      </>
    )
  }
}

export { Greeter, Recap, Goodbye }
