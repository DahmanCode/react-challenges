import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/vanLogo.png"

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        <img src={Logo} width={85} alt="logo" />
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}

export default Header