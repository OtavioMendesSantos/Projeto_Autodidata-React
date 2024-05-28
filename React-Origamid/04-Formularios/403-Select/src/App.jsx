import React from "react"

const App = () => {
  const [select, setSelect] = React.useState("")

  const handleChange = ({ target }) => {
    setSelect(target.value)
  }

  return (
    <div>
      <h1>Select</h1>
      <form>
        <select
          value={select}
          onChange={handleChange}
          id="produtos"
        >
          <option disabled value="">Selecione uma Opção</option>
          <option value="smartphone">Smartphone</option>
          <option value="notebook">Notebook</option>
          <option value="relogio">Relógio</option>
        </select>
      </form>
      <p>Opção selecionada: {select}</p>
    </div>
  )
}

export default App
