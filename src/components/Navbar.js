import React from "react"

function Navbar() {
  return (
    <nav>
      <a className="nav-brand" href="/">
        Siroo
      </a>
      <div className="nav-menu">
        <p>Menu</p>
        <i className="fas fa-utensils"></i>
      </div>
    </nav>
  )
}

export default Navbar
