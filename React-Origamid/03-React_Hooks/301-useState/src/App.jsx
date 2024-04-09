import React, {useState} from "react"
import ButtonFetch from "./ButtonFetch"
import Produto from "./Produto"
//import ButtonModal from "./ButtonModal"
//import Modal from "./Modal"

/* 
  const App = () => {
    const [modal, setModal] = useState(()=>{
      // const ativo = window.localStorage.getItem('ativo') 
      //útil quando se depende de valores externos
      const ativo = true
      return ativo
    })
    
    const [contar, setContar] = useState(1);
    const [items, setItems] = useState(['Item 1']);
    
    function handleClick() {
      //Função suja, com efeitos colaterais
      //setContar((contar) =>{
      //  setItems((items)=>[...items, 'Item ' + (contar + 1)])
      //  return contar + 1
      //})    

      setContar(contar + 1)
      setItems([...items, 'Item ' + (contar + 1)])
      // setNumero((numero) => ++numero)  
    }

    return (
      <div>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button onClick={handleClick}>{contar}</button>
        </div>
        <div>
          <Modal modal={modal} setModal={setModal}/>
          <ButtonModal setModal={setModal}/>
        </div>

      </div>
    )
  }
*/

const App = () =>{
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado
  
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  return (
    <div>
      <ButtonFetch setDados={setDados} setCarregando={setCarregando} texto={'Tablet'} urlFetch="https://ranekapi.origamid.dev/json/api/produto/tablet"/>
      <ButtonFetch setDados={setDados} setCarregando={setCarregando} texto={'Smartphone'} urlFetch="https://ranekapi.origamid.dev/json/api/produto/smartphone"/>
      <ButtonFetch setDados={setDados} setCarregando={setCarregando} texto={'Notebook'} urlFetch="https://ranekapi.origamid.dev/json/api/produto/notebook"/>
      {carregando && <p>Carregando...</p>}
      {dados && !carregando && <Produto dados={dados}/>}
    </div>
  )
}

export default App