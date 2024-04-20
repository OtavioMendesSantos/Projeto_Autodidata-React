import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NoPage from "./pages/NoPage"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  ) 
}

export default App
