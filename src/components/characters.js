import { func } from "prop-types"
import * as React from "react"
import "../styles/global.css"

const StatRow = ({ children }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2 text-center p-2 mx-auto">
        {children}
      </div>
    </div>
  )
}

const Abilities = ({ str, dex, con, int, wis, cha }) => {
  let strMod = Math.floor((parseInt(str) - 10) / 2).toString()
  let dexMod = Math.floor((parseInt(dex) - 10) / 2).toString()
  let conMod = Math.floor((parseInt(con) - 10) / 2).toString()
  let intMod = Math.floor((parseInt(int) - 10) / 2).toString()
  let wisMod = Math.floor((parseInt(wis) - 10) / 2).toString()
  let chaMod = Math.floor((parseInt(cha) - 10) / 2).toString()

  return (
    <StatRow>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Str: {str}({strMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Dex: {dex}({dexMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Con: {con}({conMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Int: {int}({intMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Wis: {wis}({wisMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200 w-16">
        Cha: {cha}({chaMod})
      </span>
    </StatRow>
  )
}

const Character = ({
  playerName,
  characterName,
  ac,
  lvl,
  characterClass,
  race,
}) => {
  return (
    <div className="bg-red-200 p-1">
      <StatRow>
        <span className="text-lg font-bold">{characterName}</span>
        <span>({playerName}),</span>
        <span className="text-highlight-red">AC:{ac}</span>
        <span className="text-highlight-red">Lvl: {lvl}</span>
        <span className="text-blue-700">{race}</span>
        <span className="text-blue-700">{characterClass}</span>
      </StatRow>
    </div>
  )
}

const Abilities2 = ({ str, dex, con, int, wis, cha }) => {
  let strMod = Math.floor((parseInt(str) - 10) / 2).toString()
  let dexMod = Math.floor((parseInt(dex) - 10) / 2).toString()
  let conMod = Math.floor((parseInt(con) - 10) / 2).toString()
  let intMod = Math.floor((parseInt(int) - 10) / 2).toString()
  let wisMod = Math.floor((parseInt(wis) - 10) / 2).toString()
  let chaMod = Math.floor((parseInt(cha) - 10) / 2).toString()

  return (
    <>
      <div className="grid grid-cols-6 text-highlight-red2 p-1 leading-tight">
        <span className="font-bold">STR</span>
        <span className="font-bold">DEX</span>
        <span className="font-bold">CON</span>
        <span className="font-bold">INT</span>
        <span className="font-bold">WIS</span>
        <span className="font-bold">CHA</span>
        <span className="">
          {str}({strMod})
        </span>
        <span className="">
          {dex}({dexMod})
        </span>
        <span className="">
          {con}({conMod})
        </span>
        <span className="">
          {int}({intMod})
        </span>
        <span className="">
          {wis}({wisMod})
        </span>
        <span className="">
          {cha}({chaMod})
        </span>
      </div>
    </>
  )
}

const Character2 = ({
  playerName,
  characterName,
  alignement,
  ac,
  lvl,
  hp,
  spd,
  characterClass,
  race,
}) => {
  return (
    <>
      <div className="p-1">
        <h1 className="text-lg font-bold tracking-wide leading-tight mx-1 font-dndheading text-highlight-red2 uppercase">
          {characterName}
          <span className="text-blue-700 text-sm font-normal font-noto float-right">
            {race} {characterClass}
          </span>
        </h1>
        <h2 className="text-sm mx-1 leading-tight font-noto">
          {alignement}, ({playerName})
        </h2>
        <hr className="bg-highlight-red h-1 my-1 border-solid border-1 border-gray-700" />
        <div className="text-highlight-red grid grid-cols-2">
          <span>
            <span className="font-bold">Level</span> {lvl}
          </span>
          <span>
            <span className="font-bold">Hit Points</span> {hp}
          </span>
          <span>
            <span className="font-bold">Armor Class</span> {ac}
          </span>
          <span>
            <span className="font-bold">Speed</span> {spd}
          </span>
        </div>
        <hr className="bg-highlight-red h-1 my-1 border-solid border-1 border-gray-700" />
      </div>
    </>
  )
}

const CharacterWrapper = ({ children }) => {
  return (
    <>
      <div className="rounded shadow bg-bg-creme w-full mx-auto my-3">
        <hr className="bg-border-orange h-2 border-solid border-1 border-gray-700" />
        <div className="flex flex-row py-2">{children}</div>
        <hr className="bg-border-orange h-2 border-solid border-1 border-gray-700" />
      </div>
    </>
  )
}

const Andreas = ({ init }) => {
  const playerName = "Andreas"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Mörgänsër"
            alignement="Chaotic Neutral"
            ac="12"
            lvl="3"
            hp="32"
            spd="30"
            characterClass="Barbarian"
            race="Human"
          />
          <Abilities2 str="16" dex="10" con="14" int="16" wis="10" cha="8" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Sumsi = ({ init }) => {
  const playerName = "Sumsi"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Lan Hua 'Harmony'"
            alignement="Chaotic Good"
            ac="14"
            lvl="3"
            hp="24"
            spd="30"
            characterClass="Bard"
            race="Tiefling"
          />
          <Abilities2 str="8" dex="14" con="14" int="12" wis="10" cha="16" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Julian = ({ init }) => {
  const playerName = "Julian"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Aegonis Filandrion"
            alignement="Neutral"
            ac="18"
            lvl="3"
            hp="25"
            spd="40"
            characterClass="Paladin"
            race="Centaur"
          />
          <Abilities2 str="16" dex="10" con="12" int="12" wis="12" cha="14" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Johannes = ({ init }) => {
  const playerName = "Johannes"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Tonatiuh"
            alignement="Lawful Good"
            ac="18"
            lvl="3"
            hp="31"
            spd="30"
            characterClass="Fighter"
            race="Goliath"
          />
          <Abilities2 str="16" dex="8" con="16" int="10" wis="14" cha="10" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const HungNi = ({ init }) => {
  const playerName = "Hung-Ni"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Faith"
            alignement="Neutral Good"
            ac="18"
            lvl="3"
            hp="24"
            spd="20"
            characterClass="Cleric"
            race="Tiefling"
          />
          <Abilities2 str="13" dex="9" con="14" int="14" wis="14" cha="12" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Fabi = ({ init }) => {
  const playerName = "Fabi"
  const initiative = init
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character2
            playerName={playerName}
            characterName="Puyani"
            alignement="Neutral Good"
            ac="17"
            lvl="3"
            hp="20"
            spd="30"
            characterClass="Sorcerer"
            race="Tortle"
          />
          <Abilities2 str="12" dex="8" con="14" int="12" wis="14" cha="15" />
        </div>
        <span className="place-self-center text-center text-lg font-bold font-noto">
          Init: {initiative}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Players = ({ players }) => {
  return (
    <>
      {players.map(player => (
        <div className="player" key={player.playerName}>
          {player.playerName}
        </div>
      ))}
    </>
  )
}

const players = [Andreas, Sumsi, Johannes, Julian, HungNi, Fabi]

players.sort((a, b) => a.init - b.init)

export { Andreas, Sumsi, Johannes, Julian, HungNi, Fabi, Players, players }
