import React, { useState } from 'react'

const PhotoGet = () => {
    const [id, setId] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
            .then(r => {
                console.log(r);
                return r.json()
            })
            .then(r => {
                console.log(r)
                console.log(r);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='id'
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet