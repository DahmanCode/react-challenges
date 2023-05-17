import React from "react";
import "../assets/card.css"

function Card(props) {
  return (
    <div className="card">
      {
        props.openSpots === 0 && 
        <div className="card__badge">SOLD OUT</div>
      }
      <img 
        src={`images/${props.coverImg}`} 
        className="card__img" 
      />
      <div className="card__stats">
        <img src="images/star.png" className="card__star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) ∘ </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card__title">{props.title}</p>
      <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card