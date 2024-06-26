import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
        incrementar: (state) => state.total + 1,
        decrementar: (state) => state.total - 1,
        somar: {
            reducer: (state, action) => state + action.payload,
            prepare: (payload) => ({ payload, meta: 'local' })
        }
    }
})

export const { incrementar, decrementar, somar } = slice.actions
export default slice.reducer;

// O prepare é uma propriedade que você pode adicionar a uma ação no seu slice.
// Ele permite que você defina uma função que pré-processa os argumentos antes que a ação seja enviada para o reducer.

// Use o prepare quando você precisa ajustar ou adicionar informações extras aos argumentos da ação antes de enviá-los ao reducer.
// Por exemplo, você pode querer adicionar metadados, formatar os dados ou fazer validações.

// O prepare torna seu código mais legível e expressivo.
// Ele permite que você encapsule a lógica de preparação dentro da própria ação, em vez de espalhá-la pelo seu código.
// Além disso, o prepare é especialmente útil quando você está trabalhando com ações assíncronas, como chamadas de API.
