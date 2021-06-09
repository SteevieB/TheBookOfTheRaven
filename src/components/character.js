import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CharacterPage from "../pages/characters"

const StatRow = ({ children }) => {
  return (
    <div className="px-2 py-1">
      <div className="flex flex-row flex-auto space-x-2 items-center">
        {children}
      </div>
    </div>
  )
}

const Abilities = ({ str, dex, con, int, wis, cha }) => {
  return (
    <StatRow>
      <span>Str: {str}</span>
      <span>Dex: {dex}</span>
      <span>Con: {con}</span>
      <span>Int: {int}</span>
      <span>Wis: {wis}</span>
      <span>Cha: {cha}</span>
      <span></span>
    </StatRow>
  )
}

const Character = ({
  playerName,
  characterName,
  lvl,
  charClass,
  race,
  str,
  dex,
  con,
  int,
  wis,
  cha,
  init,
}) => {
  return (
    <>
      <div className="w-4/5 md:w-1/2 mx-auto rounded shadow p-2 m-2 bg-yellow-100">
        <div className="flex flex-row">
          <div>
            <StatRow>
              <h1 className="text-md font-bold">{characterName}</h1>
              <span className="text-gray-500">({playerName})</span>
              <span className="text-red-500">Lvl: {lvl},</span>
              <span className="text-blue-500">
                {race} {charClass}
              </span>
            </StatRow>
            <Abilities
              str={str}
              dex={dex}
              con={con}
              int={int}
              wis={wis}
              cha={cha}
            />
          </div>
          <div className="place-self-center text-center mx-auto">
            Init:
            <span className="font-bold m-2 text-xl">{init}</span>
          </div>
        </div>
      </div>
    </>
  )
}

const DefaultCharacter = ({ init }) => {
  return (
    <Character
      playerName="Player"
      characterName="Character"
      lvl="0"
      charClass="Fighter"
      race="Human"
      str="8"
      dex="8"
      con="8"
      int="8"
      wis="8"
      cha="8"
      init={init}
    />
  )
}

const Sumsi = ({ init }) => {
  return (
    <Character
      playerName="Sumsi"
      characterName="Character 1"
      lvl="3"
      charClass="Bard"
      race="Half-Elf"
      str="8"
      dex="8"
      con="8"
      int="8"
      wis="8"
      cha="8"
      init={init}
    />
  )
}

const Andreas = ({ init }) => {
  return (
    <Character
      playerName="Andreas"
      characterName="Character 2"
      lvl="3"
      charClass="Barbarian"
      race="Half-Orc"
      str="8"
      dex="8"
      con="8"
      int="8"
      wis="8"
      cha="8"
      init={init}
    />
  )
}

const Julian = ({ init }) => {
  return (
    <Character
      playerName="Julian"
      characterName="Character 3"
      lvl="3"
      charClass="Druid"
      race="Elf"
      str="8"
      dex="8"
      con="8"
      int="8"
      wis="8"
      cha="8"
      init={init}
    />
  )
}
export { DefaultCharacter, Andreas, Sumsi, Julian }
