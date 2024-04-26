import React from 'react'

const Exercicio = () => {

    // Faça um fetch (POST) para a API abaixo
    // Para a criação ser aceita é necessário enviar dodos de:
    // nome, email, senha, cep, rua, numero, bairro, cidade e estado
    // Essa é a função utilizado para realizar o POST
    /*
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form),
    });
    */
    // Mostre uma mensagem na tela, caso a resposta da API seja positiva
  
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    })
    const [status, setStatus] = React.useState(false)

    const handleChange = ({target: {id, value}}) => {
        //const {id, value} = target
        setForm({ ...form, [id]: value })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // form é o objeto com os dados do formulário
            body: JSON.stringify(form),
        });
        const json = await response.json();
        if (response.ok) {
            console.log(json);
            setStatus(true)
        }
    }

    const formFields =[
        {
            id: 'nome',
            label: 'Nome',
            type: 'text'
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email'
        },
        {
            id: 'senha',
            label: 'Senha',
            type: 'password'
        },
        {
            id: 'cep',
            label: 'CEP',
            type: 'text'
        },
        {
            id: 'rua',
            label: 'Rua',
            type: 'text'
        },
        {
            id: 'numero',
            label: 'Número',
            type: 'text'
        },
        {
            id: 'bairro',
            label: 'Bairro',
            type: 'text'
        },
        {
            id: 'cidade',
            label: 'Cidade',
            type: 'text'
        },
        {
            id: 'estado',
            label: 'Estado',
            type: 'text'
        },

    ]

    return (
        <>
            <form onSubmit={handleSubmit}>
                {formFields.map(({id, label, type}) => (
                    <div key={id}>
                        <label htmlFor="nome">{label}</label>
                        <input 
                            type={type}
                            name={id}
                            id={id}
                            value={form[id]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button>Enviar</button>
            </form>
            {status && <p>Dados enviados com sucesso</p>}
        </>
    )
}

export default Exercicio
