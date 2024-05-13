import React from "react"

const App = () => {
  const [produto, setProduto] = React.useState("")
  const [cor, setCor] = React.useState("")

  const handleProduto = ({ target }) => {
    setProduto(target.value)
  }
 
  const handleCor = ({ target }) => {
    setCor(target.value)
  }

  return (
    <div>
      <h1>Radio</h1>
      <form>
        <h2>Produtos</h2>
        <label>
          <input 
            type="radio"
            value="notebook"
            onChange={handleProduto}
            checked={produto === "notebook"}
          />
          Notebook
        </label>
        <label>
          <input 
            type="radio"
            value="smartphone"
            onChange={handleProduto}
            checked={produto === "smartphone"}
          />
          Smartphone
        </label>

        <h2>Cores</h2>
        <label>
          <input 
            type="radio"
            value="azul"
            onChange={handleCor}
            checked={cor === "azul"}
          />
          Azul
        </label>
        <label>
          <input 
            type="radio"
            value="vermelho"
            onChange={handleCor}
            checked={cor === "vermelho"}
          />
          Vermelho
        </label>
      </form>

    </div>
  )
}

export default App
