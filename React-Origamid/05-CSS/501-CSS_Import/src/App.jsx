import React from "react"
import "./App.css"
import Title from "./Title"

const App = () => {
  return (
    <div>
      <div className="container"></div>
      <Title />
      <h1 className="title">Title h1</h1>
      <p>Deve se tomar cuidado com a importação de arquivos CSS	pois um pode sobreescrever outro.</p>
    </div>
  )
}

export default App
