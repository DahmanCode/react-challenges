import React, { useState } from 'react'
import Header from '../Header'
import { FiHeart } from "react-icons/fi"

import bgImg from '../../assets/bgImg.jpeg'
import lineImg from '../../assets/line.png'

import './Gallery.css'

export default function Gallery() {

  const [click, setClick] = useState(false)

  return (
    <div className="scr">
      <div className="div">
        <Header />
        <h1 className="h-1">The Power Of Night Dua</h1>
        <div className="text-wrapper-2">Safia Latif, Artist</div>
        <div className="text-wrapper-3">Dimensions</div>
        <div className="text-wrapper-4">Palette</div>
        <div className="text-wrapper-5">Description:</div>
        <div className="text-wrapper-6">70cm x 90cm</div>
        <div className="text-wrapper-7">$3,000</div>
        <img className="rectangle" alt="Rectangle" src={bgImg} />
        <div className="frame1">
          <div className="ellipse1" />
          <div className="ellipse1-2" />
          <div className="ellipse1-3" />
          <div className="ellipse1-4" />
          <div className="ellipse1-5" />
        </div>
        <div className="overlap-group">
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur andy adipiscing elit, sed do
            eiusmod temporyuo janr incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrudh john urty.
          </p>
          <div className="rectangle-2" />
          <div className="text-wrapper-8">ADD TO CART</div>
          <img className="line" alt="Line" src={lineImg} />
          <div className="rectangle-3" />
          <div className="favorite">
            <FiHeart 
              className={`heart ${click ? 'clicked' : ''}`} 
              onClick={() => click ? setClick(false) : setClick(true)} 
              
            />
          </div>
          {/* <img className="favorite" alt="Favorite" src="favorite.png" /> */}
        </div>
      </div>
    </div>
  )
}
