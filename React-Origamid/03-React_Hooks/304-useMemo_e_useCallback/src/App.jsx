import React from "react"
//useMemo -> memoriza um valor, evitando sua recriação todas as vezes que um componente seja atualizado. Recebe um callback e um Array de dependencias 

//useCallback -> definir uma callback e uma lista de dependências do callback, este callback somente será recriado caso esta lista de dependências for modificada, caso contrário, o callback não será recriado 
const App = () => {
  
  React.useMemo(()=>{
    if(localStorage.length == 0 ){
      localStorage.setItem('fruta', 'abacate')
      console.log('adicionou');
    }
    const localStorageItem = localStorage.getItem('fruta')
    console.log(localStorageItem);
  }, [])
  
  const [contar, setContar] = React.useState(0)

  const handleClick = React.useCallback(()=>{
    setContar(contar + 1)
  })

  return (
    <div>
      <button onClick={handleClick}> {contar} </button> 
    </div>
  )
}

export default App
