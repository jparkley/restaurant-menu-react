import React from "react"

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__icon">
        <i className="fas fa-times"></i>
      </div>
      <div className="sidebar__menu">
        <h1>
          <a href="">Appetizers</a>
        </h1>
        <h1>
          <a href="">Soups</a>
        </h1>
        <h1>
          <a href="">Main Course</a>
        </h1>
        <h1>
          <a href="">Desserts</a>
        </h1>
        <div className="sidebar__order">
          <div className="sidebar__order-link">Order Now</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
