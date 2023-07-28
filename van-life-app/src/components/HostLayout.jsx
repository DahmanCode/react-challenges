import React from "react";
import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout