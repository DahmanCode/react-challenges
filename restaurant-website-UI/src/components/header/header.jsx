import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import F from '../../assets/logo/F.svg'
import oodi from '../../assets/logo/logo1.svg'
import Arrow from '../../assets/icons/arrow.png'
import Search from '../../assets/icons/search.png'
import Bag from '../../assets/icons/Vector.png'
import Phone from '../../assets/icons/phone.png'
import Menu from "../../assets/icons/menu.png"
import X from "../../assets/icons/x.png"

export default function Header() {

  const [show, setShow] = useState(false)

  return (
    <>
      <nav>
        <div className="logo">
          <div>
            <img src={F} alt="" />
          </div>
          <img src={oodi} alt="" />
        </div>

        <ul className={show ? 'open' : ''}>
          <li>
            <Link className='active'>Home</Link>
          </li>
          <li>
            <Link>Menu</Link>
            <img src={Arrow} alt="" />
          </li>
          <li>
            <Link>Services</Link>
            <img src={Arrow} alt="" />
          </li>
          <li>
            <Link>Offers</Link>
          </li>
          <img 
            src={X} 
            alt="" 
            className={`x ${show ? 'open' : ''}`}
            onClick={() => setShow(!show)}
          />
        </ul>

        <div className='icons'>
          <img src={Search} alt="" />
          <div className="bag">
            <img src={Bag} alt="" />
            <p>5</p>
          </div>
          <button className='btn'>
            <img src={Phone} alt="" />
            Contact
          </button>
          <img 
            src={Menu} 
            alt="" 
            className={`menu ${show ? 'close' : ''}`}
            onClick={() => setShow(!show)}
            />
        </div>
      </nav>
    </>
  )
}