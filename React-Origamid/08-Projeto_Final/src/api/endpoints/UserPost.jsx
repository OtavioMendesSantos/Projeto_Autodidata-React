import React, { useState } from 'react'

const UserPost = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ username, email, password })

        fetch(`https://dogsapi.origamid.dev/json/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
            .then(r => {
                console.log(r);
                return r.json()
            })
            .then(console.log)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Username'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />
            <input
                type="text"
                placeholder='Email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="text"
                placeholder='Senha'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <button>Enviar</button>
        </form>
    )
}

export default UserPost