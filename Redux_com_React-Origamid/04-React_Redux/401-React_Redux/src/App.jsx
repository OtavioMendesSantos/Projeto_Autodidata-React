import React from "react"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  const contador = useSelector((state) => state)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>Incrementar</button>
      <p>{contador}</p>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>Decrementar</button>
    </div>
  )
}

export default App
