import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postCard"

const Glossary = () => (
  <Layout>
    <Seo title="Glossar" />
    <h1 className="p-4 text-2xl font-bold">Glossar</h1>
    <PostCard
      title="The Book of the Raven"
      subTitle="Ein Bericht"
      content="Ein Augenzeugenbericht über einen Reitunfall der Autorin und Anschließender Rekonvaleszenz bei den Vistani.
      Während diese zur Genesung von bei den 'Planar Travellers' - den Vistani - aufgenommen wurde entstand mit dem Fahrenden Volk eine Freundschaft.
      Das Buch erzählt etwa drei Monate in der die Autorin und ihr Pferd die Vistani begleiten. Die meiste Zeit verbringt sie liegend in einem der Wagen.
      Obwohl etwa ein Dutzend der Vistani ausführlich in dem Schriftstück beschrieben werden, werden nur zwei mit Namen genannt:
      Drasha, ein Mädchen welches das verwundete Bein der Autorin mit Bandagen und Wickeln versorgte und Darzin, ein einarmiger Junge mit einer furchtbaren Angst vor Wölfen,
      der wunderschöne Lieder sang um von Leid und Schmerzen abzulenken.
      Das Buch gibt eine detaillierte Sicht über das Leben der Vistani, deren Musik und Essen besonders hervorgehoben wird.
      Auch die Überlandreise wird beschrieben, sei es auch aus Sicht eines Passagiers, der sich die meiste Zeit innerhalb einer der Wagen aufhielt.
      "
    ></PostCard>
    <PostCard
      title="Die Vistani"
      subTitle="Fahrendes Volk von Händlern und Mystikern"
      content="
      Die Vistani sind 'Planar Travellers', die of in Shadowfell anzutreffen sind.
      Sie scheinen immun zu sein gegen das Grauen, welches alle anderen Reisenden durch diese Plane befällt.
      Die Vistani zeigen offen ihren Reichtum und teilen ihr Glück gerne mit Freunden und Fremden.
      Sie lösen ihre Uneinigkeiten mit Wettbewerben die in Singen, Tanzen und Geschichtenerzählen enden.
      Die Familienverbunde der Vistani - groß, wie klein - werden vom jeweiligen Ältesten als Oberhaupt geleitet.
      Dieser hat die Aufgabe Traditionen zu bewahren, Streite zu schlichten, den Weg der Reise zu bestimmen und allgemein die Lebensart der Vistani zu schützen.
      Vistani haben die Fähigkeit (oft auch 'das Geschenk' genannt) Wege durch die Nebelregionen von Forlorn in Shadowfell zu finden, die gemeinhin als 'Domains of Dread' bekannt sind.
      Die Heimat von Wesen der Dunkelheit. 'Das Geschenk' wurde ihnen durch die mysteriösen Wesen der 'Dark Powers', als Lohn für deren Freundlichkeit gegenüber Fremden zuteil.
      Die Vistani glauben daran, dass Raben verlorene Seelen mit sich tragen. Deshalb gilt das töten solcher als Zeichen des Unglücks.
      "
    ></PostCard>
    <PostCard
      title="Shadowfell"
      subTitle="The Shadowfell, also known as the Plane of Shadow, is one of the planes of existence in various cosmological models."
      content="Its purpose and characteristics evolved as new cosmologies were formulated. Other names for this plane included Shadowland, the Demiplane of Shadow, and simply Shadow.
      It exists as sort of counterpart to the Feywild, in the sense that it is a reflection, or 'echo', of the Prime Material Plane. Unlike the Feywild, it is a bleak, desolate place full of decay and death.'
      "
    ></PostCard>
    <PostCard
      title="Die Karte des Mysteriums"
      subTitle="Eine Karte, die zwischen die Seiten des Book of the Raven gesteckt wurde."
      content="
      "
    ></PostCard>
    <PostCard
      title="Anil Zasperdes"
      subTitle="Ein Werrabe mit dem Talent Dinge zu verstecken."
      content="Er war Begründer des 'Scarlet Sash'. Zasperdes wählte das 'Book of the Raven' als Versteck für die Karte, da jeder, der sich für den Inhalt des Buches interessiert auch daran interessiert sein könnte der Karte zu ihrem Ziel zu folgen: Ein verfallenes Chalet im einsamen Hochland.
      "
    ></PostCard>
    <PostCard
      title="The Scarlet Sash"
      subTitle="Eine Gruppe von Werraben um Zasperdes, deren Gründer"
      content="Der Scarlet Sash machte es sich zur Aufgabe, magische Gegenstände von bösen Wesen und böse Gegenstände in großem Umfang zu verstecken.'
      "
    ></PostCard>
    <PostCard
      title="The Wythway"
      subTitle="Eine Gruppe von Werraben um Zasperdes, deren Gründer"
      content="Der Scarlet Sash machte es sich zur Aufgabe, magische Gegenstände von bösen Wesen und böse Gegenstände in großem Umfang zu verstecken.'
      "
    ></PostCard>
    <PostCard
      title="Dalereckoning (DR)"
      content="Dalereckoning is taken from the Year of Sunrise, 1 DR, when the Standing Stone was raised by the elves of Cormanthyr and the human Dalesfolk. Since this time, humans were permitted by the Elven Court to settle in the more open regions of the forests. In some texts, primarily those which do not have direct ties to Dales history, Dalereckoning is called Freeman's Reckoning (FR). The calendar is widely used in Faerûn but has not spread beyond its shores.'
      "
    ></PostCard>
  </Layout>
)

export default Glossary