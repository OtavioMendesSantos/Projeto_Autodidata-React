import React from "react"
import UseLocalStorage from "./UseLocalStorage"
import UseFetch from "./UseFetch"

const App = () => {
  const [produto, setProduto] = UseLocalStorage('produto', '') 
  const {request, dados, loading, error} = UseFetch();
  
  function handleClick({target}){
    setProduto(target.innerText)
  }
  
  React.useEffect(()=>{
    async function fetchDados(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response,json);
    }
    fetchDados()
  }, [request])

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if(dados)
    return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {dados.map((produto)=>(
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    )
  else return null
}

export default App
