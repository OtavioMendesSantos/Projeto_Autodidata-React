import React from 'react'

const Exemplo = () => {
    function reducer(state, action) {
        switch (action.type) {
            case 'remover':
                return state.filter(item => item !== action.content)
            case 'adicionar':
                return [...state, action.content]
            default:
                return new Error('Ação desconhecida')
        }
    }

    const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Maça', 'Laranja'])

    return (
        <div>
            <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })}>Remover</button>
            <button onClick={() => dispatch({ type: 'adicionar', content: 'Banana' })}>Adicionar</button>
            <hr />
            {state.join(', ')}
        </div>
    )
}

export default Exemplo