import React from "react"
import styled from "styled-components"

const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000;
`

// props deve ser passado como callback
const ProductCard = styled.div`
  width: 200px;
  height: 200px; 
  background-color: ${({cor}) => cor};
  border-radius: ${({ativo}) => ativo ? "50%" : "0px"};
  margin: none;
  display: block;
  transition: 0.5s;
`

const Titulo = styled.h1`
  color: red;
  font-size: 2rem;
  font-family: Helvetica;
  text-shadow: 0px 0px 5px #000;
`

const Paragraf = styled.p`
  color: blue;
  font-size: 1.5rem;
  font-family: Helvetica;
  text-shadow: 0px 0px 5px #000;
  &:hover {
    color: green;
  }
`

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <div className="container">
      <h1>Styled Components</h1>
      <Titulo>Título Estilizado Com Styled Components</Titulo>
      <Paragraf>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa quisquam tenetur, itaque autem sit officia sed neque non. Voluptatem, est aperiam? Facilis facere recusandae quidem minima quisquam ea rerum!</Paragraf>
      <ProdutosContainer>
        <ProductCard cor="red" ativo={ativo}></ProductCard>
        <ProductCard cor="blue" ativo={ativo}></ProductCard>
        <ProductCard cor="green" ativo={ativo}></ProductCard>
        <ProductCard cor="yellow" ativo={ativo}></ProductCard>
        <ProductCard cor="purple" ativo={ativo}></ProductCard>
        <ProductCard cor="gray" ativo={ativo}></ProductCard>
      </ProdutosContainer>
      <button onClick = {() => setAtivo(!ativo)}>Clique</button>
    </div>
  )
}

export default App
