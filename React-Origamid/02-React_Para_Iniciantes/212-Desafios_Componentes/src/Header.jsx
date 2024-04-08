import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link href="/" text="Home"/></li>
        <li><Link href="/produtos" text="Produtos"/></li>
      </ul>
    </header>
  )
}

export default Header
