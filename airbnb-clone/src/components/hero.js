import React from "react";
import "../assets/hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
        <img src="images/hero-img.png" className="hero__img" alt=""/>
    </section>
  )
}

export default Hero