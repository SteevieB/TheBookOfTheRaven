import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Cards from "../components/cards"
import { StaticImage } from "gatsby-plugin-image"
import PostCard from "../components/postCard"
import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="w-full md:w-4/5 flex mx-auto mt-6 sm:mt-4">
      <PostCard
        title="Meine Website wird momentan umgebaut!"
        content="Bitte entschuldigt die Unordnung hier. Die Website wird auf den neuesten Stand der Technik gebracht und mit neuen, aktuellen Inhalten befüllt."
      >
        <StaticImage src="../images/chalet-brantifax.webp"></StaticImage>
      </PostCard>
      <PostCard
        title="Kontakt:"
        subTitle="info@bildhauer-vale.de"
        address="Hochgernstraße 16, 83224 Grassau"
        content="Da ich den „social Media“ abgeschworen habe, ist – zumindest bewusst – nichts von mir / über mich auf Facebook, Twitter, Instagram etc. zu finden. Wenn sie Fragen oder eine Auftragsidee haben, kontaktieren sie mich am besten per Email."
      >
        <StaticImage src="../images/chalet-brantifax.png"></StaticImage>
      </PostCard>
    </div>
  </Layout>
)

export default IndexPage



