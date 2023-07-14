import React, { useState, useEffect } from 'react'
import Die from './Die'

import './style.css'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 9))
    }
    return newDice
  }

  const diceEl = dice.map(die => <Die value={die} />)

  return (
    <main>
      <div className='dice-container'>
        {diceEl}
      </div>
    </main>
  )
}

export default App
