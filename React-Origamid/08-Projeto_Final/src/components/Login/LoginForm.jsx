import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body : JSON.stringify({ username, password })
        }).then(r => {
            console.log(r)
            return r.json()
        }).then (json => {
            console.log(json)
        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setUserName(target.value)}
                    placeholder='Usuário'
                    value={username}
                />
                <input
                    type="text"
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder='Senha'
                    value={password}
                />
                <button>Entrar</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm