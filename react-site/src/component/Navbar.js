import React from "react";
import logo from "../images/react_logo.png"

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={logo} alt="react-logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  )
}