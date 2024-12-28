import { useState } from "react"
import CardText from "./CardText"

const Game = () => {

  const [texts, setTexts] = useState([])

  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const arrows = "←→↑↓↔↕⇐⇒⇑⇓⇔⇕";
    const symbols = "✦✧★☆◆◇";
    const extendedString = letters + numbers + arrows + symbols;
    const index = Math.floor(Math.random() * extendedString.length)

    return extendedString[index]
  }

  const getRandomText = (number) => {
    let text = ''
    for (let i = 0; i < number; i++) {
      text += getRandomLetter()
    }

    return text
  }

  const getRandomArrayTexts = (number) => {
    let textsArray = []
    for (let i = 0; i < number; i++) {
      textsArray.push(getRandomText(3))
    }

    return setTexts(textsArray)
  }

  return (
    <div className="p-4 max-w-2xl mx-auto grid place-content-center h-screen gap-4">
      <h1 className="text-2xl text-center text-blue-700">RECORDANDO CODIGOS</h1>
      <section className="grid grid-cols-3 gap-4">
        {texts.map((text, index) => (
          <CardText text={text} key={index} />
        ))}
      </section>

      <button 
        onClick={() => getRandomArrayTexts(9)}
        className="bg-blue-500 text-white text-xl rounded-lg p-2">
        Nuevo juego
        </button>
    </div>
  )
}

export default Game