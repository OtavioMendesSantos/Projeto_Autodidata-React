import React from "react"
import "./App.css"
import foto from "./img/moon.avif"
import Moeda from "./img/moeda.svg?react"

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <Moeda />
      <img src={foto} alt="Foto da lua" />
    </div>
  )
}

export default App
