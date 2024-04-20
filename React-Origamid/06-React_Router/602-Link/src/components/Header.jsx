import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <h1>Este é o Header Principal</h1>
      <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="sobre">Sobre</NavLink>
            </li>
            <li>
                <NavLink to="parceiros">Parceiros</NavLink>
            </li>
            <li>
                <NavLink to="contato">Contatos</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
