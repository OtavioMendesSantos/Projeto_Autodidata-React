import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementar, decrementar } from "./store/contador"
import { abrirModal, fecharModal } from "./store/modal"

const App = () => {
  const dispatch = useDispatch()
  const total = useSelector((state) => state.contador.total)
  const modal=useSelector((state)=> state.modal) 
  return (
    <div>
      <div>
        <button onClick={() => dispatch(incrementar())}>Incrementar</button>
        <p>{total}</p>
        <button onClick={() => dispatch(decrementar())}>Decrementar</button>
      </div>
      <hr />
      
      <button onClick={() => dispatch(abrirModal())}>Abrir</button>
      <button onClick={() => dispatch(fecharModal())}>Fechar</button>
      {modal && <h1>OOOOPa</h1>}
    </div>
  )
}

export default App
