import React from "react"
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NoPage from "./pages/NoPage"
import Parceiros from "./pages/Parceiros"
import Header from "./components/Header"
import Produtos from "./pages/Produtos"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="parceiros" element={<Parceiros />} />
            <Route path="produtos/:id" element={<Produtos />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  ) 
}

export default App
