import React from "react";
import { Link } from "react-router-dom";

import backImg from "../assets/back.png";

function Header() {
  return (
    <div className="overlap-2">
      <div className="frame">
        <Link to="/" className="ellipse">
          <img className="back" alt="Back" src={backImg} />
        </Link>
        <div className="overlap-group-2">
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
        </div>
        <div className="text-wrapper1-2">GALLERY</div>
      </div>
    </div>
  )
}

export default Header