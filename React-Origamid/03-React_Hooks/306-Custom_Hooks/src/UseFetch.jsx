import React from 'react'

const UseFetch = (url) => {
    const [dados, setDados] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try{
            setError(null)
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
        } catch (erro) {
            json = null
            setError('Erro')
        } finally {
            setDados(json)
            setLoading(false)
            return {response, json}
        }
    }, [])
    return {dados, error, loading, request}
}
    
 

export default UseFetch
