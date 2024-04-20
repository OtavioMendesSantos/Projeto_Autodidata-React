import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
    const { id } = useParams()
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
            .then((response) => response.json())
            .then((json) => setData(json))     
    }, [])

    React.useEffect(() => {
        console.log(data)
    })

    if (data === null) return null

    return (
        <div>
            <h2>{data.nome}</h2> 
            <img src={data.fotos[0].src} alt={data.nome} />
            <p>{data.descricao}</p>
            <p>{data.preco}</p>
        </div>
    )
}

export default Produto
