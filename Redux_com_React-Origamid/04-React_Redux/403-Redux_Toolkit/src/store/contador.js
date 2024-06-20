import { createSlice } from "@reduxjs/toolkit"

/* export const incrementar = createAction('INCREMENTAR')
// console.log(incrementar()); //{"type": "INCREMENTAR"}
export const decrementar = createAction('DECREMENTAR') */

const slice = createSlice({
    name: 'contador',
    initialState: {
        total: 0,
    },
    reducers: {
        incrementar(state) {
            state.total++
        },
        decrementar(state) {
            state.total--
        },
    }
})

console.log('slice', slice);
export const { incrementar, decrementar } = slice.actions
export default slice.reducer;
