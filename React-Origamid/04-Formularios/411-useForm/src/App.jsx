import React from "react"
import Input from "./Form/Input"
import useForm from "./Hooks/useForm"

const App = () => {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (cep.validate && email.validate && nome.validate) {
      console.log("enviou")
    } else {
      console.log("não enviou")
    }
  }

  return (
    <div>
      <h1>Use Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Nome"}
          id={"nome"}
          type={"text"}
          {...nome}
        />
        <Input
          label={"Sobrenome"}
          id={"sobrenome"}
          type={"text"}
          {...sobrenome}
        />
        <Input
          label={"CEP"}
          id={"cep"}
          type={"text"}
          placeholder={"00000-000"}
          {...cep}
        />
        <Input
          label={"Email"}
          id={"email"}
          type={"text"}
          {...email}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App
