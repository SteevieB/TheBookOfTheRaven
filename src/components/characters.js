import * as React from "react"
import "../styles/global.css"

const StatRow = ({ children }) => {
  return (
    <div className="">
      <div className="flex flex-row text-center space-x-2 p-2">{children}</div>
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
      <span className="rounded-full shadow p-2 bg-gray-200">
        Str: {str}({strMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200">
        Dex: {dex}({dexMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200">
        Con: {con}({conMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200">
        Int: {int}({intMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200">
        Wis: {wis}({wisMod})
      </span>
      <span className="rounded-full shadow p-2 bg-gray-200">
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

const CharacterWrapper = ({ children }) => {
  return (
    <>
      <div className="rounded shadow bg-yellow-100 w-3/4 md:w-1/2 mx-auto my-3">
        <div className="flex flex-row">{children}</div>
      </div>
    </>
  )
}

const DefaultCharacter = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Default"
            characterName="Character"
            ac="12"
            lvl="0"
            characterClass="Fighter"
            race="Human"
          />
          <Abilities str="8" dex="8" con="8" int="8" wis="8" cha="8" />
        </div>
        <span className="text-lg font-bold">Init: {init}</span>
      </CharacterWrapper>
    </>
  )
}

const Andreas = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Andreas"
            characterName="Character"
            ac="15"
            lvl="3"
            characterClass="Barbarian"
            race="Half-Orc"
          />
          <Abilities str="16" dex="14" con="16" int="8" wis="10" cha="10" />
        </div>
        <span className="place-self-center text-center text-lg font-bold">
          Init: {init}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Sumsi = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Sumsi"
            characterName="Character"
            ac="13"
            lvl="3"
            characterClass="Bard"
            race="Half-Elf"
          />
          <Abilities str="8" dex="16" con="14" int="12" wis="8" cha="17" />
        </div>
        <span className="place-self-center text-center text-lg font-bold">
          Init: {init}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Julian = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Julian"
            characterName="Character"
            ac="13"
            lvl="3"
            characterClass="Druid"
            race="Hill Dwarf"
          />
          <Abilities str="8" dex="14" con="16" int="12" wis="16" cha="8" />
        </div>
        <span className="place-self-center text-center text-lg font-bold">
          Init: {init}
        </span>
      </CharacterWrapper>
    </>
  )
}

const Johannes = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Johannes"
            characterName="Character"
            ac="12"
            lvl="3"
            characterClass="Fighter"
            race="Human"
          />
          <Abilities str="10" dex="11" con="12" int="13" wis="14" cha="15" />
        </div>
        <span className="place-self-center text-center text-lg font-bold">
          Init: {init}
        </span>
      </CharacterWrapper>
    </>
  )
}

const HungNi = ({ init }) => {
  return (
    <>
      <CharacterWrapper>
        <div className="w-full">
          <Character
            playerName="Hung-Ni"
            characterName="Character"
            ac="13"
            lvl="3"
            characterClass="Ranger"
            race="Human"
          />
          <Abilities str="10" dex="16" con="14" int="12" wis="16" cha="9" />
        </div>
        <span className="place-self-center text-center text-lg font-bold">
          Init: {init}
        </span>
      </CharacterWrapper>
    </>
  )
}

export { DefaultCharacter, Andreas, Sumsi, Johannes, Julian, HungNi }
