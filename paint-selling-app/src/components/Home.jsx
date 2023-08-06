import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

import forwardImg from '../assets/forward.png'

export default function Home() {
  return (
    <div className="scr">
      <Header />
      <div className="overlap-wrapper">
        <div className="overlap-group1">
          <p className="text-wrapper1">The Power Of Night Dua</p>
          <div className="credit">Safia Latif, Artist</div>
          <Link to="gallery" className="forward-wrapper">
            <img className="forward" alt="Forward" src={forwardImg} />
          </Link>
        </div>
      </div>
    </div>
  )
}
