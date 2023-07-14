import React, { useState, useEffect } from 'react'
import Die from './Die'

import './style.css'

function App() {

  return (
    <main>
      <div className='dice-container'>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
      </div>
    </main>
  )
}

export default App