import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/vanLogo.png"

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        <img src={Logo} width={85} alt="logo" />
      </Link>
      <nav>
        <NavLink 
          className={({isActive}) => isActive ? "active-link" : null} 
          to="/host"
        >
          Host
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? "active-link" : null} 
          to="/about"
        >
          About
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? "active-link" : null} 
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}

export default Header