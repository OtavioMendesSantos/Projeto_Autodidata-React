import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./store/login"
import { somar } from "./store/contador"

const App = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const { data } = useSelector((state) => state.login.user)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </form>
      <button onClick={() => dispatch(somar(5))}>somar</button>
    </div>
  )
}

export default App
