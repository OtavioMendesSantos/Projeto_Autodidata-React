import React from 'react'
import { NavLink, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'
import Head from '../components/Head'

const Produtos = () => {
    const params = useParams() // {id} = params
    const location = useLocation() // informacoes da rota
    const search = new URLSearchParams(location.search)
    console.log(search.get('q'));
    

    return (
        <div>
            <Head title="Produtos" description="Página de produtos" />
            <div>
                <p>Está é a página de <strong>{params.id}</strong></p>
                <h2>Localização atual:</h2>
                <p>Pathname: {location.pathname}</p>
                <p>Search: {location.search}</p>
                <p>Hash: {location.hash}</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="">Descrição</NavLink></li>
                    <li><NavLink to="avaliacao">Avaliação</NavLink></li>
                    <li><NavLink to="customizado">Customizado</NavLink></li>
                </ul>

            </nav>
            <Outlet />
            {/*
             ** Posso definir as rotas aqui, ou lá no app.jsx 
             ** Nesse caso é necessário colocar o componente Outlet para definir onde a rotas vão ser renderizadas
             */}
            {/* <Routes>
                <Route path='' element={<ProdutoDescricao />} />
                <Route path='avaliacao' element={<ProdutoAvaliacao />} />
                <Route path='customizado' element={<ProdutoCustomizado />} />
            </Routes> */}
        </div>
    )
}

export default Produtos
