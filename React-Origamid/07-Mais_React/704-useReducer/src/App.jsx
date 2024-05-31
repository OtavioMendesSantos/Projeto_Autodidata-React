import React from "react"
import Exemplo from "./Exemplo"

const App = () => {
  function reducer(state, action){
    switch(action){
      case 'aumentar':
        return state + 1
      case 'diminuir':
        return state - 1
      default:
        return new Error('Ação desconhecida')
    }
  }
  const [state, dispatch] = React.useReducer(reducer, 0)

  return (
    <div>
      <div style={{ display: 'flex', flex: '1  1 1', fontFamily: 'monospace' }}>
        <button onClick={() => dispatch('diminuir')}>menos</button>
        <div style={{ fontSize: 100, margin: 20 }}>{state}</div>
        <button onClick={() => dispatch('aumentar')}>mais</button>
      </div>
      <hr />
      <Exemplo />
    </div>
  )
}

export default App
