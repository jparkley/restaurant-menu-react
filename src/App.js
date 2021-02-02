import "./styles/main.scss"
import React from "react"
import ReactDOM from "react-dom"

import Hero from "./components/Hero"
import { menuData, dessertData } from "./components/data"
import Menu from "./components/Menu"
import Special from "./components/Special"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Hero />
      <Menu heading="Choose your favorite" data={menuData} />
      <Special />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
