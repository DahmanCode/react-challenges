import React from "react";
import { NavLink, Outlet } from "react-router-dom"

function VansLayout() {
  return (
    <>
      <nav>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/vans"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/vans/pricing"
        >
          Income
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/vans/photos"
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default VansLayout