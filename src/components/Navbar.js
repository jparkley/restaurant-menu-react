import React, { useState } from "react"
import { Link } from "react-router-dom"

import { NavbarData } from "./NavbarData"

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  function toggleMenu() {
    setSidebar(!sidebar)
  }

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-brand">
          Siroo
        </Link>
        <div className="nav-menu" onClick={toggleMenu}>
          <p>Menu</p>
          <i className="fas fa-utensils"></i>
        </div>
      </nav>
      <aside className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="sidebar-close" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <div className="sidebar-menu">
          <ul>
            {NavbarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
          <div className="sidebar-order">
            <div className="sidebar-order-link">Order Now</div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
