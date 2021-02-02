import "./styles/main.scss"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Hero from "./components/Hero"
import { MenuDataMain, MenuDataDessert } from "./components/MenuData"
import Menu from "./components/Menu"
import Special from "./components/Special"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Hero />
      <Switch>
        <Route path="/">
          <Menu heading="Choose your favorite" data={MenuDataMain} />
          <Special />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
