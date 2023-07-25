import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Vans from "./pages/Vans"

import Logo from "./assets/vanLogo.png"

import "./server"

function App() {
  
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <img src={Logo} width={85} alt="logo" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
