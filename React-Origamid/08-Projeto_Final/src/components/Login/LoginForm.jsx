import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

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
            body: JSON.stringify({ username, password })
        }).then(r => {
            console.log(r)
            return r.json()
        }).then(json => {
            console.log(json)
        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    value={password}
                />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm