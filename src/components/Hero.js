import React from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <Sidebar />
      <div className="hero-content">
        <div className="hero-items">
          <h1 className="hero-title">Landmark Fusion Restaurant</h1>
          <p className="hero-subtitle">Hip, Healthy and Innovative!</p>
          <button className="button button-hero">Go Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
