import React from 'react'

const ButtonModal = ({setModal}) => {
  function handleClick () {
    // função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado na função.
    
    //Parâmetro que representa o valor anterior / valor retornado = novo valor
    setModal((ativo)=>!ativo)
  }
  
  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal
