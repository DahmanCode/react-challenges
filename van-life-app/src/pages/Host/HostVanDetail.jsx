import React, { useEffect, useState } from 'react'
import { useParams, NavLink, Link, Outlet } from 'react-router-dom'

function HostVansDetail() {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans))
  }, [])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <div className="host-van-detail-layout-container">
      <Link 
        to="/host/vans" 
        // to=".." 
        // relative='path'
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type ${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className='host-van-detail-nav'>
          <NavLink
            className={({isActive}) => isActive ? "active-link" : null }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({isActive}) => isActive ? "active-link" : null }
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({isActive}) => isActive ? "active-link" : null }
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  )
}

export default HostVansDetail
