import React from "react"
import Modal from "./Modal"
import Produto from "./Produto"

const App = () => {
  /* //Exemplo setEffect

  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState(null)

  React.useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(respose => respose.json())
      .then(json =>setDados(json))
    console.log('Fez apenas uma requisição HTTP');
  }, [])

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={()=>setContar(contar + 1)}>{contar}</button>
    </div>
  ) */

  const [modal, setModal] = React.useState(false)

  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  const [produto, setProduto] = React.useState(null)

  React.useEffect(()=>{
    const item = window.localStorage.getItem('preferencia')
    if(item !== null){setProduto(item)}
  }, [])

  React.useEffect(()=>{
    if(!!produto){window.localStorage.setItem('preferencia', produto)}
  }, [produto])
  
  function handleClick(item){
    setProduto(item)
  }
 
  return (
    <div>
      <div>
        <div style={{margin: '.5rem'}}>
          Abrir modal <button onClick={()=>setModal(true)}>Abrir</button>
        </div>
        {modal && <Modal modal={modal} setModal={setModal}/>}
      </div>
      <div>
        <h1>Preferência: </h1>
     
        <button style={{marginRight: '0.5rem'}} onClick={()=>{handleClick('notebook')}}>notebook</button>
       
        <button onClick={()=>{handleClick('smartphone')}}>smartphone</button>
       
        <Produto produto={produto}/>
      </div>
    </div>
  )
}

export default App
