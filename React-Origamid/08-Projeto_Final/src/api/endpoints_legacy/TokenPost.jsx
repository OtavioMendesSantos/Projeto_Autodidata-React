import React, { useState } from 'react'

const TokenPost = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ usuario: username, password })

        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(r => {
                console.log(r);
                return r.json()
            })
            .then(r => {
                console.log(r);
                setToken(r.token)
                return r
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Usuário'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />
            <input
                type="text"
                placeholder='Senha'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <button>Enviar</button>
            <p style={{ wordBreak: 'break-all' }}>Token: {token}</p>
        </form>
    )
}

export default TokenPost
