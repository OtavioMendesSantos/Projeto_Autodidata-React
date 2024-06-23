import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'modal',
    initialState: false,
    reducers:{
        abrirModal: () => true,
        fecharModal: () => false
    }
})

export const { abrirModal, fecharModal } = slice.actions
export default slice.reducer