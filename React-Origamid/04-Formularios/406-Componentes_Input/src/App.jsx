import React from "react"
import Input from "./Form/Input"
import Select from "./Form/Select"
import Radio from "./Form/Radio"
import Checkbox from "./Form/Checkbox"

const App = () => {
  const [nome, setNome] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [estado, setEstado] = React.useState("")
  const [assunto, setAssunto] = React.useState("reclamacoes")
  const [produto, setProduto] = React.useState([])
  const [termo, setTermo] = React.useState([])

  const estadosBr = [
    "Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ]


  return (
    <div>
      <h1>Componentes</h1>
      <form>
        <Input 
          label={"Nome"}	
          id={"nome"}
          value={nome}
          setValue={setNome}
          required
        />
        <Input 
          label={"Email"}	
          id={"email"}
          value={email}
          setValue={setEmail}
        />
        <Select
          options={estadosBr}
          value={estado}
          setValue={setEstado}
        />
        <Radio
          options={['reclamacoes', 'elogios', 'duvidas', 'outros']}
          value={assunto}
          setValue={setAssunto}
        />
        <Checkbox
          options={['smartphone', 'notebook', 'relogio', 'computador']}
          value={produto}
          setValue={setProduto}
        />
        <Checkbox
          options={['Li e aceito os termos.']}
          value={termo}
          setValue={setTermo}
        />
        <button>Enviar</button>
      </form>
      <ul>
        <li>Nome: {nome}</li>
        <li>Email: {email}</li>
        <li>Estado: {estado}</li>
        <li>Assunto: {assunto}</li>
        <li>Produtos: {produto.map(p => `${p}`).join(', ')}</li>
      </ul>
    </div>
  )
}

export default App
