import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produtos = () => {
    const params = useParams() // {id} = params
    const location = useLocation() // informacoes da rota
    const search = new URLSearchParams(location.search)
    console.log(search.get('q'));
    

    return (
        <div>
            <p>Está é a página de <strong>{params.id}</strong></p>
            <h2>Localização atual:</h2>
            <p>Pathname: {location.pathname}</p>
            <p>Search: {location.search}</p>
            <p>Hash: {location.hash}</p>
        </div>
    )
}

export default Produtos
