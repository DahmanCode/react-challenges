import React from 'react'

import "./home.css"

import Play from '../../assets/icons/play.png'
import Hero from '../../assets/images/hero.png'
import Spicy from '../../assets/icons/spicy.png'
import Plat1 from '../../assets/images/hero-food1.png'
import Plat2 from '../../assets/images/hero-food2.png'
import FullStar from '../../assets/icons/full-star.png'
import EmptyStar from '../../assets/icons/empty-star.png'

export default function Home() {
  return (
    <div className='hero'>
      <div className="left-side">
        <h1>Dive into Delights Of Delectable <span>Food</span></h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <div className="button">
          <button className='btn'>Order Now</button>
          <h3>Watch Video</h3>
          <button className='play'>
            <img src={Play} alt="" />
          </button>
        </div> 
      </div>

      <div className="right-side">
        <div className="hero_img">
          <img src={Hero} alt="" />
        </div>
          <p className='spicy'>Hot spicy Food <img src={Spicy} alt="" /></p>
        <div className="hero_cards">
          <div className="hero_card">
            <div className="hero_plat_img">
              <img src={Plat1} alt="" />
            </div>
            <div className="hero_card_content">
              <p>Spicy noodles</p>
              <div className="stars">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
              </div>
              <div className="price">
                <span>$</span>
                18.00
              </div>
            </div>
          </div>
          <div className="hero_card">
            <div className="hero_plat_img">
              <img src={Plat2} alt="" />
            </div>
            <div className="hero_card_content">
              <p>Vegetarian salad</p>
              <div className="stars">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
              </div>
              <div className="price">
                <span>$</span>
                23.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}