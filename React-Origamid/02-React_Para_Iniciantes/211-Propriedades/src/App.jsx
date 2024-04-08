import React from "react"
import Form from "./form/Form"
import Input from './form/Input'
import Button from "./form/Button"

const Titulo = ({cor, texto, children} = props)=>{
  return <h1 style={{color: cor}}>
    {texto} {children}
  </h1>
}


const App = () => {
  return (
    <>
      <Titulo cor="black" texto="Login"/>
      {/* <Titulo cor="green" texto="Meu Segundo Título">
        (Isso é o Children)
      </Titulo> */}
      <Form>
        <Input labelText="E-mail:" type="text" id="email" placeholder="Insira seu E-Mail..." autoComplete='off'/>
        <Input labelText="Senha:" type="password" id="nome" placeholder="Insira sua senha..." autoComplete='off'/>
        <Button text="Login"/>
      </Form>
    </>
  )
}

export default App
