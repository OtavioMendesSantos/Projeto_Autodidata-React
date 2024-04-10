import React from 'react'

const ButtonFetch = ({texto, urlFetch, setDados, setCarregando}) => { 

  async function handleClick(){
    setCarregando(true);

    const response = await fetch(urlFetch)
    const json = await response.json();

    setTimeout(()=>{
      setDados(json)
      setCarregando(false)
    }, 1000)
  }
  
  return ( 
    <button onClick={handleClick} style={{margin: ".5rem"}}> 
      {texto}
    </button>
  )
}

export default ButtonFetch
