import React from "react"

const Input = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = ({target}) => {
    const {id,value} = target
    // Os colchetes permitem que a sintaxe [id] seja interpretada como uma variável,
    // em vez de uma string literal 'id'. Isso permite que a chave do objeto seja dinâmica.
    // Se não usássemos os colchetes, a chave seria sempre 'id',
    // e o valor que estávamos recebendo em 'id' seria sempre sobrescrito.
    setForm({...form, [id]: value})

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        name="nome"
        id="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input 
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{form.email}</p>
      <button>Enviar</button>
    </form>
)
}

export default Input
