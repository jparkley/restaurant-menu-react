import React from "react"

function Menu({ heading, data }) {
  return (
    <div className="menu">
      <h1>{heading}</h1>
      <div className="menu-wrapper">
        {data.map((item, index) => {
          return (
            <div className="menu-wrapper-card" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="menu-wrapper-card-info">
                <div className="menu-title">{item.name}</div>
                <div className="menu-desc">{item.desc}</div>
                <div className="menu-price">{item.price}</div>
                <button className="button button-menu">Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
