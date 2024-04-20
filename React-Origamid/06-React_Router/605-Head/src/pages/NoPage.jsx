import React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {
  const [contagem, setContagem] = React.useState(5)
  const navigate = useNavigate()
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setContagem((contagem) => contagem - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  React.useEffect(() => {
    if(contagem <= 0){
      navigate('/')
    }
  }, [contagem, navigate])

  return (
    <div>
      <h2>Error 404</h2>
      <p>Página não encontrada, você será redirecionado em: {contagem}</p>
    </div>
  )
}

export default NoPage
