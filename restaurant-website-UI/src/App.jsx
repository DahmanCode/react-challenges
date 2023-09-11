import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Layout from './components/layout'
import Home from './components/home/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
