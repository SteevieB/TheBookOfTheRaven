import * as React from "react"
import Collapsible from "react-collapsible"

import Item from "./Item"
import { StaticImage } from "gatsby-plugin-image"
import { CrawlingClaw } from "./enemies"

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

class StatBlockSpider extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/giant-spider.png"></StaticImage>
      </>
    )
  }
}
class StatBlockWolfSpider extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/giant-wolf-spider.png"></StaticImage>
      </>
    )
  }
}

class StatBlockBoar extends React.Component {
  render() {
    return (
      <>
        <StaticImage src="../images/creatures/statblocks/giant-boar.png"></StaticImage>
      </>
    )
  }
}
const encounters = [
  {
    name: "Forest encounter 1",
    enemies: (
      <div className="text-lg font-bold font-medium text-gray-900">
        2 Giant Boars
      </div>
    ),
    difficulty: "medium",
    description:
      "Ivory tusks glint malevolently in the dim light, and as the boar moves into clearer view, you first notice its immense size, and then the wiry muscles rippling beneath its dark skin. The red eyes that study you burn with distrust and abhorrence, and the creature seems restless, ready to strike. You know that there will be no reasoning with the enormous beast before you.",
    statblocks: <StatBlockBoar />,
  },
  {
    name: "Forest encounter 2",
    enemies: (
      <div className="text-lg font-bold font-medium text-gray-900">
        2 Giant Spiders, 3 Giant Wolf Spiders
      </div>
    ),
    difficulty: "easy",
    description:
      "An alien light glitters across the eight eyes of the giant spider, its size making it look sinister and monstrous. So enormous that you can make out the individual hairs on its legs, it has no need to resort to insects for its wriggling meals.",
    statblocks: (
      <>
        <StatBlockSpider />
        <div className="w-full">
          <div className="w-cover">
            <StatBlockWolfSpider />
          </div>
        </div>
      </>
    ),
  },
  {
    name: "Graveyard encounter 1",
    enemies: (
      <div className="text-lg font-bold font-medium text-gray-900">
        2 Crawling Claws, 1 Scarecrow
      </div>
    ),
    difficulty: "easy",
    description:
      "A dry wind blows across the graveyard's tomb stones and it's vegetation. A lone, solitary figure stands within, propped atop a wooden timber. Its arms and legs flutter in the breeze, and its face, a macabre facsimile of life, stares vacantly ahead. The hollow eyes, despite their lifelessness, seem to perceive you, and a shudder runs up your spine. Something moves to your right—but there’s nothing. As you return your gaze to the scarecrow, your blood runs cold—it no longer hangs from the timber.",
    statblocks: (
      <>
        <StatBlockScarecrow /> <StatBlockCrawlingClaw />
      </>
    ),
  },
  {
    name: "House encounter 1",
    enemies: (
      <div className="text-lg font-bold text-gray-900">
        1 Poltergeist as Specter
      </div>
    ),
    difficulty: "easy",
    description:
      "A chill emanates from everywhere at once. Rime creeps across nearby surfaces. You see your breath pluming before you in the frigid air. A moan, pained and distant, rises with the wind, and in your peripheral vision, you see a figure detach itself from the shadows and glide toward you—weightless, formless, undead.",
    statblocks: <StatBlockSpecter />,
  },
  {
    name: "Shadow Crossing encounter 1",
    enemies: <div className="text-lg font-bold text-gray-900">2 Gargoyles</div>,
    difficulty: "hard",
    description:
      "The stone sculpture unnerves you, though you can’t exactly place why. A hideous, batlike face peers out from atop a hunched, spindly body, a pair of wings tucked tight against its shoulders. Its claws grip the stone around it for support, and it sits, completely motionless and devoid of life. You pass by, and just as you’ve pushed the thing’s visage from your mind, you hear stone scrape against stone, and as you turn, you find the statue gone.",
    statblocks: <StatBlockGargoyle />,
  },
  {
    name: "Shadow Crossing encounter 2-5",
    enemies: (
      <div className="text-lg font-bold text-gray-900">(3-4)x3 Ghouls</div>
    ),
    difficulty: "medium",
    description:
      "Perhaps this wretched thing was once human, but hunger replaced humanity. Its withered body seems composed of little more than bruised skin stretched over sinew and bone, but its bulbous belly juts out and sloshes from side to side as it moves. Filth and gore stain its claw-like hands and wizened face. And eyes as black as pitch weep a tarry substance, and a black tongue slithers from its fanged mouth to lick the tears from its cracked lips.",
    statblocks: <StatBlockGhoul />,
  },
  {
    name: "Shadow Crossing encounter 6",
    enemies: <div className="text-lg font-bold text-gray-900">1 Wight</div>,
    difficulty: "hard",
    description:
      "The humanoid creature’s mummified flesh stretches taught against a warped and twisted skeleton. It smells of rot and decay, and fresh blood. Jagged teeth fill a lipless mouth, from which issues an otherworldly growl. The creature’s long, skeletal limbs end in wicked, needle-like claws, and its eyes burn white-hot as it lunges forward.",
    statblocks: <StatBlockWight />,
  },
  {
    name: "Shadow Crossing encounter 7",
    enemies: (
      <div className="text-lg font-bold text-gray-900">
        3 Warhorse Skeletons
      </div>
    ),
    difficulty: "easy",
    description:
      "The clatter of their hooves rings hollow. The fleshless articulation before you is surely lighter than living horses, but it’s also as if the skeletal creature’s feet carry with them the echoes of a tomb. Their cracked skulls rear and their jaws move, but they make no sound other than the rattle and creak of bones.",
    statblocks: <StatBlockWarhorseSkeleton />,
  },
]

export function ListEncounters() {
  return (
    <ul className="divide-y divide-gray-200">
      {encounters.map(encounter => (
        <li key={encounter.name} className="py-4 flex">
          <div className="ml-3">
            <Collapsible
              className="text-lg font-bold text-gray-900"
              trigger={encounter.enemies}
            >
              <p className="text-md font-medium text-gray-900 rounded-tr-lg p-2 text-justify bg-red-300">
                {encounter.description}
              </p>
              <div className="cover">{encounter.statblocks}</div>
            </Collapsible>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ScrollMishap() {
  return (
    <Collapsible
      className="text-lg font-bold text-gray-900 ml-3"
      trigger="Scroll Mishaps"
    >
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex">
          <span className="px-4 font-bold">1</span>
          <span>
            A surge of magical energy deals the caster 1d6 force damage per
            level of the spell.
          </span>
        </li>
        <li className="py-4 flex">
          <span className="px-4 font-bold">2</span>
          <span>
            The spell affects the caster or an ally (determined randomly)
            instead of the intended target, or it affects a random target nearby
            if the caster was the intended target.
          </span>
        </li>
        <li className="py-4 flex">
          <span className="px-4 font-bold">3</span>
          <span>
            The spell affects a random location within the spell’s range.
          </span>
        </li>
        <li className="py-4 flex">
          <span className="px-4 font-bold">4</span>
          <span>
            The spell’s effect is contrary to its normal one, but neither
            harmful nor beneficial. For instance, a fireball might produce an
            area of harmless cold.
          </span>
        </li>
        <li className="py-4 flex">
          <span className="px-4 font-bold">5</span>
          <span>
            The caster suffers a minor but bizarre effect related to the spell.
            Such effects last only as long as the original spell’s duration, or
            1d10 minutes for spells that take effect instantaneously. For
            example, a fireball might cause smoke to billow from the caster’s
            ears for 1d10 minutes.
          </span>
        </li>
        <li className="py-4 flex">
          <span className="px-4 font-bold">6</span>
          <span>
            The spell activates after 1d12 hours. If the caster was the intended
            target, the spell takes effect normally. If the caster was not the
            intended target, the spell goes off in the general direction of the
            intended target, up to the spell’s maximum range, if the target has
            moved away.
          </span>
        </li>
      </ul>
    </Collapsible>
  )
}

export function ListPlaces() {
  return (
    <Collapsible
      className="text-lg font-bold text-gray-900 ml-3"
      trigger="Locations"
    >
      <ul className="divide-y divide-gray-200">
        <li className="py-4 grid grid-cols-6">
          <span className="px-4 font-bold">Forest Trail</span>
          <p className="text-justify col-span-5">
            Sunlight streams through tall trees to dapple this rocky,
            root-crossed pathway wending through the woodland. Flowering bushes,
            buzzing with bees, stretch branches out over the path in colorful
            arcs, while vibrant green ferns crowd in their shadows near the
            trail. The whole effect is one of breathtaking beauty, as if nature
            created a nuptial path for the marriage of some forest spirits.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Outskirts of a Small Village</span>
          <p className="text-justify col-span-5">
            You smell the place before you see it. The unmistakable odor of
            civilization: woodsmoke, cow dung, and the stink of pigs. You round
            the bend and see thatched roofs on low buildings scattered around
            muddy fields. From somewhere on the other side of the village, you
            hear dogs barking.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Wytchway</span>
          <p className="text-justify col-span-5">
            Silence reigns over this fog-shrouded hamlet, seemingly in perfect
            order, but utterly devoid of any villagers. Though the huts and
            houses remain mostly intact, doors hang wide open, and aside from
            the occasional wild critter, there is no life within. A bucket used
            to draw well water lies on its side on the ground, water spilled out
            over the soil, still damp. The ashes in a nearby hearth are cold
            with a few glowing embers visible to a watchful eye.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Chalet Brantifax</span>
          <p className="text-justify col-span-5">
            The manorhouse may have once stood tall and impressive in its
            splendor, but now sits empty and crumbling. Paint peels in moldy
            strips, and columns that once bore the weight of the structure lean,
            cracks spiderwebbing down their lengths. The house sags, groaning in
            the wind that whistles through shattered windows and pockmarked
            siding. Inside, the house sits cold, dark, and empty, save a faded
            family portrait, the faces of the occupants worn away with age and
            exposure. They stare, faceless, into the darkness.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Attic of Chalet Brantifax</span>
          <p className="text-justify col-span-5">
            You ascend the stairs to the attic and feel them creak beneath you.
            The door is narrow and swings open with a whine of its ancient
            hinges. Beyond, the attic stands dark and silent. Piles of crates
            and barrels dominate every corner, and old furniture sits draped
            with white cloth. Dust covers every surface like a thick dusting of
            snow, and as you round a corner, you almost cry out at the figure
            standing before you—before you realize it’s a mannequin.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Portal to Shadowfell</span>
          <p className="text-justify col-span-5">
            A wide white cloud hangs in the open grave, skirting the sides.
            Thick ropey strands of fog curl and twist around some obscured
            point, like a complex knot endlessly tightening. You become
            conscious of a something like a wind. Though no breeze ruffles you,
            your body feels pushes toward this strange mist.
          </p>
        </li>
        <li className="py-4  grid grid-cols-6">
          <span className="px-4 font-bold">Shadowfell Cemetery</span>
          <p className="text-justify col-span-5">
            Mist shrouds the loamy earth. Tombstones, etched with names long
            faded and forgotten, line the horizon, tilting at odd angles.
            Moonlight pierces the gloom, lending a silver quality to the
            ever-present fog. In the distance, predators howl, their cries
            distorted over distance and echoing into the night. Trees creak, the
            wind wheezes, and something moves behind you.
          </p>
        </li>
      </ul>
    </Collapsible>
  )
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
