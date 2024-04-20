import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Esta é a Home</p>
      <h3>Produtos</h3>
      <ol>
        <li><NavLink to="/produtos/notebook">notebook</NavLink></li>
        <li><NavLink to="/produtos/smartphone">smartphone</NavLink></li>
        <li><NavLink to="/produtos/teclados">teclados</NavLink></li>
        <li><NavLink to="/produtos/mouse">mouse</NavLink></li>
        <li><NavLink to="/produtos/microfones">microfones</NavLink></li>
        <li><NavLink to="/produtos/monitores">monitores</NavLink></li>
      </ol>
    </div>
  )
}

export default Home
