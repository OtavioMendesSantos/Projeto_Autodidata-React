import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, userLogout } from "./store/login"
import Loading from "./Loading"

const App = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector((state) => state.login.user)
  const token = useSelector((state) => state.login.token)
  const loading = user.loading || token.loading
  const handleLogin = () => {
    dispatch(login({ username, password }))
  }
  const handleLogut = () => {
    dispatch(userLogout())
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh'
      }}
    >
      <header>
        <h1>Mini Dogs</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'space-between'
          }}
        >
          <h2>Login</h2>
          <div 
            style={{
              width: '16px',
              height: '16px',
              border: '3px solid #222',
              borderRadius: '10px',
              backgroundColor: user.data ? 'green' : 'red'
            }}
          />
        </div>
      </header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '100%',
          border: '3px solid #222',
          borderRadius: '10px'
        }}
      >
        {loading
          ? <Loading />
          : <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
            onSubmit={(e) => e.preventDefault()}
            action=""
          >
            <input
              type="text"
              placeholder="Username"
              valiue={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button onClick={handleLogin}>Login ➜</button>
          </form>}
      </div>
      <button onClick={handleLogut}>Logout</button>
    </div>
  )
}

export default App
