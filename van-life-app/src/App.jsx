import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'

import Logo from "./assets/vanLogo.png"
// import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <img src={Logo} width={80} alt="logo" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App