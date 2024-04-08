import React from "react"
import Home from "./Home";
import Header from "./Header";
import Produtos from "./Produtos";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {

  let Pagina = Home //Produtos;
  const { pathname } = window.location
  switch(pathname){
    case '/produtos':
      Pagina = Produtos;
      break
    case '/':
      Pagina = Home
      break
  }
  return (
    <>
      <Header />
      <Pagina />      
    </>
  )
}

export default App
