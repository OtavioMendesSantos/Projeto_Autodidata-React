import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'

const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    const handleSubmit = (e) => {
        if (username.validate() && password.validate()){
            e.preventDefault()
            fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify()
            }).then(r => {
                console.log(r)
                return r.json()
            }).then(json => {
                console.log(json)
            })
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm