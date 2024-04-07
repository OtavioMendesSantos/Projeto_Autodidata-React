import React from "react"

const situacao = (pessoa) =>{
  return pessoa.compras.reduce((acumulador, compra)=>{
    acumulador += +(compra.preco).replace('R$ ', '')
    return acumulador
  }, 0)
}

const estiloDiv = {
  border: '1px solid black',
  borderRadius: '5px',
  padding: '5px',
  marginBottom: '5px'
}

const Usuario1 = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const dados = luana;

  return(
    <div style={estiloDiv}>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{color: dados.ativa ? 'green' : 'red'}}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>      
      <p>Total Gasto: R$ {situacao(dados)}</p>
      {(situacao(dados) > 10000) && <p>Gasto Muito Elevado</p>} 
    </div>
  )
}

const Usuario2 = () => {

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = mario;

  return(
    <div style={estiloDiv}>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{color: dados.ativa ? 'green' : 'red'}}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>     
      <p>Total Gasto: R$ {situacao(dados)}</p>
      {(situacao(dados) > 10000) && <p>Gasto Muito Elevado</p>} 
    </div>
  )
}

const App = () => {
  const random = Math.random() * 100
  const ativo = true

  const estiloH1 = {
    color: 'yellow',
    fontSize: '2rem',
    fontfamilly: 'Helvetica',
    textShadow: '0px 0px 5px #000'
  }

  const titulo = <h1 style={estiloH1}>Título do site 🙂</h1>

  function nomeCompleto(nome,sobrenome) {
    return `${nome} ${sobrenome}`
  }

  const carro = {
    marca: 'ford',
    modelo: 'ka'
  }

  return (
    <React.Fragment>
      {titulo}
      <p>Números, Strings e Arrays de Números e Strings são mostrados, como: {NaN}, {true.toString()}(toString)</p>

      <p>Booleanos, Objects, Undefined e Null *não* são mostrados, como: {true} (verifique o código)</p>
      
      <p>Mostrar Nome: {nomeCompleto('Otávio', `Mendes Santos`)}</p>

      <p>{new Date().getFullYear()}</p>

      <p>{carro.marca}</p>
      
      <p className={ativo ? 'ativo' : 'inativo'}>Numero Randômico: {random}</p>

      <form action="">
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome"/>
      </form>

      <h1>Atividade - Origamid</h1>
      <Usuario1 />
      <Usuario2 />
    </React.Fragment>
  )
}

export default App
