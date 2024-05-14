import React from "react"

const App = () => {
  const [termos, setTermos] = React.useState(false)
  const [cores, setCores  ] = React.useState(['azul', 'preto'])

  const handleTermos = ({ target }) => {
    setTermos(target.checked)
  }

  const handleCores = ({ target }) => {
    if (!target.checked) {
      setCores(cores.filter(cor => cor !== target.value))
    } else {
      setCores([...cores, target.value])
    }
  }

  const checkColors = (cor) => {
    return cores.includes(cor)
  }

  const opcoesCores = ["azul", "vermelho", "verde", "amarelo", "branco", "preto" , "roxo" ]	

  return (
    <div>
      <h1>Checkbox</h1>
      <form>
        <h2>Termos</h2>
        <label>
          <input 
            style={{display: 'inline-block', width: 'fit-content'}}
            type="checkbox" 
            value="Termos"
            checked={termos}
            onChange={handleTermos}
          />
          Aceito os termos
        </label>
        <button
          disabled={!termos}
        >Prosseguir</button>
      </form>
      <form>
        <h2>Cores</h2>
          {opcoesCores.map((cor, index)=>(
            <label>
              <input 
                key={index}
                style={{
                  display: 'inline-block',
                  width: 'fit-content',
                }}
                type="checkbox" 
                value={cor}
                checked={checkColors(cor)}
                onChange={handleCores}
              />
              {cor}
            </label>
          ))}
        <ul>
          {cores.map((cores, index)=>(<li key={index}>{cores}</li>))}
        </ul>
      </form>

    </div>
  )
}

export default App
