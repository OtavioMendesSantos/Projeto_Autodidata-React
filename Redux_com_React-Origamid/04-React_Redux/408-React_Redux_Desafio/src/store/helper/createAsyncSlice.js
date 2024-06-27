import { createSlice } from "@reduxjs/toolkit";

/**
 * @param {String} name - Nome do Reducer
 * @param {Object} initialState - Valor do estado inicial
 * @param {Object} reducers - Reducers
 * @param {Object} fetchConfig - Configuração do Fetch (url, options)
 * @param {*} config 
 * @returns {Object} - Objeto Slice e função asyncAction
 */
const createAsyncSlice = (config) => {
    const slice = createSlice({
        name: config.name,
        initialState: {
            loading: false,
            data: null,
            error: null,
            ...config.initialState
        },
        reducers: {
            requesting(state) {
                state.loading = true
            },
            success(state, action) {
                state.loading = false
                state.data = action.payload
                state.error = null
            },
            failure(state, action) {
                state.loading = false
                state.data = null
                state.error = action.payload
            },
            ...config.reducers
        }
    })
    const { requesting, success, failure } = slice.actions
    const asyncAction = (payload) => async (dispatch) => {
        try {
            dispatch(requesting())
            const { url, options } = config.fetchConfig(payload)
            const response = await fetch(url, options)
            const data = await response.json()
            return dispatch(success(data))
        }
        catch (error) {
            return dispatch(failure(error.message))
        }
    }
    return { ...slice, asyncAction }
}

export default createAsyncSlice
