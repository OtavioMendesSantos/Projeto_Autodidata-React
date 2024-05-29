import React from 'react'
import styles from './Produto.module.css'

const Produto = ({nome}) => {
  return (
    <div>
        <h1 className={styles.titulo}>{nome}</h1>
        <p className={styles.preco}>R$ 2.000,00</p>
        <button className={styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produto