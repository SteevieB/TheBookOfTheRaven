import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GlossaryCard from "../components/GlossaryCard"

const Glossary = () => (
  <Layout>
    <Seo title="Glossar" />
    <h1 className="p-4 text-2xl text-highlight-red">Glossary</h1>
    <GlossaryCard
      title="The Book of the Raven"
      subTitle="The diary of a girl" //Heluthe
      content="
      This small, leather-bound journal holds the ruminations and descriptions of everyday life of a young girl who stumbled upon some secrets while still in the throes of pubescence. 
      Amidst the doodles and many melodramatic asides, dark discoveries lay nestled within these pages—for those patient enough to unearth them.
      Can anything of this weight be possibly carried by a raven?"

      // Ein Augenzeugenbericht über einen Reitunfall der Autorin und Anschließender Rekonvaleszenz bei den Vistani.
      // Während diese zur Genesung von bei den 'Planar Travellers' - den Vistani - aufgenommen wurde entstand mit dem Fahrenden Volk eine Freundschaft.
      // Das Buch erzählt etwa drei Monate in der die Autorin und ihr Pferd die Vistani begleiten. Die meiste Zeit verbringt sie liegend in einem der Wagen.
      // Obwohl etwa ein Dutzend der Vistani ausführlich in dem Schriftstück beschrieben werden, werden nur zwei mit Namen genannt:
      // Drasha, ein Mädchen welches das verwundete Bein der Autorin mit Bandagen und Wickeln versorgte und Darzin, ein einarmiger Junge mit einer furchtbaren Angst vor Wölfen,
      // der wunderschöne Lieder sang um von Leid und Schmerzen abzulenken.
      // Das Buch gibt eine detaillierte Sicht über das Leben der Vistani, deren Musik und Essen besonders hervorgehoben wird.
      // Auch die Überlandreise wird beschrieben, sei es auch aus Sicht eines Passagiers, der sich die meiste Zeit innerhalb einer der Wagen aufhielt.
    ></GlossaryCard>
    <GlossaryCard
      title="Heluthe"
      subTitle="One of the Brantifax's daughters"
      content="9yo Girl Appeared as a Raven to the party dropping 'The Book of the Raven' wich includes the 'Map of Mystery'."
    />
    <GlossaryCard
      title="Sylphene"
      subTitle="One of the Brantifax's daughters"
      content="Died at the age of 6. She was bedridden all her life."
    />
    <GlossaryCard
      title="The Vistani"
      subTitle="Highly reputed traveling performers and fortune tellers"
      content="
        The Vistani are planar travelers often encountered in the Shadowfell, and they seem to be immune to the despair that besets all other visitors to that plane. They travel in horse-drawn, barrel-shaped wagons and have no permanent home.
        The Vistani display their wealth openly as a sign of prosperity, sharing their good fortune with friends and strangers alike. Vistani resolve disagreements through contests that end with reconciliatory singing, dancing, and storytelling.
        Vistani families can be big or small, but each family is a gerontocracy, with the oldest member ruling the roost. This elder has most of the responsibility for enforcing traditions, settling disputes, setting the course for the group’s travels, and preserving the Vistani way of life.
        The Vistani have the power—some say gift—to travel through the mists that lead to forlorn realms within the Shadowfell known as the Domains of Dread, where creatures born in darkness dwell. This “gift” was thrust upon them by mysterious entities called the Dark Powers, as a boon for their kindness toward strangers.
        The Vistani believe that ravens carry lost souls within them. Hence, killing a raven is considered bad luck in Vistani culture.
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Shadowfell"
      subTitle="The Shadowfell, also known as the Plane of Shadow, is one of the planes of existence in various cosmological models."
      content="Its purpose and characteristics evolved as new cosmologies were formulated. Other names for this plane included Shadowland, the Demiplane of Shadow, and simply Shadow.
      It exists as sort of counterpart to the Feywild, in the sense that it is a reflection, or 'echo', of the Prime Material Plane. Unlike the Feywild, it is a bleak, desolate place full of decay and death.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Die Karte des Mysteriums"
      subTitle="A map tucked between the pages of the Book of the Raven."
      content="
      It’s clear that the map was never part of the book to begin with. 
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Anil Zasperdes"
      subTitle="Zasperdes was a wereraven who had a gift for hiding things."
      content="
      He was the founder of the Scarlet Sash, a group of wereravens known for stealing magic items from evil individuals and hiding evil items from the world at large. 
      He chose the Book of the Raven as a hiding place for the map because anyone interested in its subject matter might also be interested in following the map to its destination.
      Anil tried to lure certain groups of suspicious travellers to come to the Chalet in order to check if the carry mighty or evil magic items. 
      If so the scarlet sash would snitch them and hide the items away.
      "
    ></GlossaryCard>
    <GlossaryCard
      title="The Scarlet Sash"
      subTitle="Eine Gruppe von Werraben um Zasperdes, deren Gründer"
      content="Der Scarlet Sash machte es sich zur Aufgabe, magische Gegenstände von bösen Wesen und böse Gegenstände in großem Umfang zu verstecken.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="The Wytchway"
      content="To use the map, the characters must first locate Wytchway, a hamlet that serves as a starting point. Its location is left deliberately vague so that you can place it anywhere you like. The characters can find it by consulting sages or old maps in Candlekeep.
      Monster attacks forced the residents of Wytchway to abandon the hamlet years ago. All that remains is a broken-down wagon surrounded by rotted fences and dilapidated, fog-shrouded farmsteads overrun with wild pigs.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Dalereckoning (DR)"
      content="Dalereckoning is taken from the Year of Sunrise, 1 DR, when the Standing Stone was raised by the elves of Cormanthyr and the human Dalesfolk. Since this time, humans were permitted by the Elven Court to settle in the more open regions of the forests. In some texts, primarily those which do not have direct ties to Dales history, Dalereckoning is called Freeman's Reckoning (FR). The calendar is widely used in Faerûn but has not spread beyond its shores.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Charm of Heroism"
      content="For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration required).'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Bless (Spell)"
      subTitle="1st Lvl | Duration: 1min"
      content="Whenever you make an attack roll or a saving throw before the spell ends, you can roll a d4 and add the number rolled to the attack roll or saving throw.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Potion of Mind Reading"
      content="When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.'
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Detect Thoughts (Spell)"
      subTitle="2nd Lvl | Duration: 1min"
      content="For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.'
      You initially learn the surface thoughts of the creature--what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.
      Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.
      You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.
      Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range.
      "
    ></GlossaryCard>
    <GlossaryCard
      title="Jump (Spell)"
      subTitle="1st Lvl | Duration: 1min | 1 Action"
      content="You touch a creature. The creature's jump distance is tripled until the spell ends.
      "
    ></GlossaryCard>
  </Layout>
)

export default Glossary
