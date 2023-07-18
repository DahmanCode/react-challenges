import React, { useState, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

import './style.css'

function App() {
  const [dice, setDice] = useState(allNewDice())

  const [tenzies, setTenzies] = useState(false)

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {

    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie()
        }),
        )
        setCounter(prev => prev + 1)
      } else {
      setTenzies(false)
      setCounter(0)
      setSec(0)
      setMin(0)
      setHour(0)
      return setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)

  useEffect(() =>{
    const gameTimer = setTimeout(() => {
      setSec(prev => prev + 1);
      if (sec === 59) {
        setMin(prev => prev + 1)
        setSec(0)
        if (min === 59) {
          setHour(prev => prev + 1)
          setMin(0)
          setSec(0)
        }
      }
    }, 1000)
    if (tenzies) {
      clearInterval(gameTimer)
    }
    return () => clearInterval(gameTimer)
  }, [sec, min, hour])

  const diceEl = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="details">
        <p>Total Rolls: {counter < 10 ? "0"+counter : counter}</p>
        <p>Time: {hour < 10 ? "0"+hour : hour}:
          {min < 10 ? "0"+min : min}:
          {sec < 10 ? "0"+sec : sec}
        </p>
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceEl}</div>

      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? 'Play Again' : 'Roll'}
      </button>
    </main>
  )
}

export default App
