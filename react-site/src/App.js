import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

export default function App() {

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}