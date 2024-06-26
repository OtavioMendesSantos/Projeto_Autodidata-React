import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'
import Produto from './pages/Produto'

const App = () => {
  return (
    <BrowserRouter>
      {/* 
      ** Utilize a API abaixo para puxar a lista de produto
      ** https://ranekapi.origamid.dev/json/api/produto
      ** Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
      ** https://ranekapi.origamid.dev/json/api/produto/notebook
      */}
      <Header />
      <Routes>
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos/:id" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
