import React from 'react'
import NotFoundImg from "../../assets/404.png"
import { Link } from "react-router-dom"

import './NotFound.css'

function NotFound() {
  return (
    <section className="not_found">
      <div className="not_found_container container">
        <div className="not_found_data">
          <span className="not_found_subtitle">Error 404</span>
          <h1 className="not_found_title">Hey Buddy</h1>
          <p className="not_found_description">
            We can't find the page <br/> you are looking for.
          </p>
          <Link to="/" className="not_found_button">
            Go Home
          </Link>
        </div>
        <div className="not_found_img">
          <img src={NotFoundImg} alt=""/>
          <div className="not_found_shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default NotFound