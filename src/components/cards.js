import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"

const Cards = () => (
  <>
    <div className="h-11/12">
      <div className="flex flex-col md:flex-row mb-4 m-2 rounded h-full">
        <PostCard
          title="Test1"
          content="Löst TAE Technologies das globale Energieproblem? Bis Ende des Jahrzehnts will das Unternehmen einen kommerziell einsetzbaren Fusionsreaktor bauen, lange vor dem Iter. "
        >
          <StaticImage src="../images/chalet-brantifax.png"></StaticImage>
        </PostCard>
        <PostCard
          title="Test2"
          content="Elon Musks BCI-Unternehmen Neuralink präsentiert auf Youtube einen Affen, der via Hirnimplantat Pong spielt - bleibt aber wissenschaftliche Beweise schuldig. "
        >
          <StaticImage src="https://tailwindcss.com/img/card-top.jpg"></StaticImage>
        </PostCard>
        <PostCard
          title="Test3"
          content="Wenn Berufsschullehrer nichts über Python und Docker wissen, läuft es falsch. Ein Fachinformatiker spricht über seine sonderbare Ausbildung.
                Ein Bericht von Oliver Nickel"
        >
          <StaticImage src="../images/chalet-brantifax.png"></StaticImage>
        </PostCard>
      </div>
    </div>
  </>
)

export default Cards
