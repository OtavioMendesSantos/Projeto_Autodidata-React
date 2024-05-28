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
  const [cep, setCep] = React.useState("")
  const [error, setError] = React.useState(null)

  const estadosBr = [
    "Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ]

  const validateCep = (value) => {
    if(value.length === 0) {
      setError("O CEP não pode ficar vazio")
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido')
      return false
    } else {
      setError(null)
      return true
    }
  } 

  const handleBlur = ({target}) => {
    validateCep(target.value);
  }

  const handleChange = ({target}) => {
    if (error) {
      validateCep(target.value)
    }
    setCep(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateCep(cep)){
      console.log("enviou")
    } else {
      console.log("não enviou")
    }
  }

  return (
    <div>
      <h1>Componentes</h1>
      <form onSubmit={handleSubmit}>
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
        <Input 
          label={"CEP"}
          type={"text"}
          placeholder={"00000-000"}
          value={cep}
          setValue={setCep}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
      <ul>
        <li>Nome: {nome}</li>
        <li>Email: {email}</li>
        <li>Estado: {estado}</li>
        <li>Assunto: {assunto}</li>
        <li>Produtos: {produto.map(p => `${p}`).join(', ')}</li>
        <li>CEP: {cep}</li>
      </ul>
    </div>
  )
}

export default App
