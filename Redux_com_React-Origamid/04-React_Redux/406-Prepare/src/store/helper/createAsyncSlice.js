import { createSlice } from '@reduxjs/toolkit'

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
            fetchStarted(state) {
                state.loading = true
            },
            fetchSucess(state, action) {
                state.loading = true
                state.data = action.payload
                state.error = false
            },
            fetchFailure(state, action) {
                state.loading = true
                state.data = null
                state.error = action.payload
            },
            ...config.reducers
        }
    })
    const { fetchStarted, fetchSucess, fetchFailure } = slice.actions
    const asyncAction = (payload) => async (dispatch) => {
        try {
            dispatch(fetchStarted())
            const { url, options } = config.fetchConfig(payload)
            const response = await fetch(url, options)
            const data = await response.json()
            return dispatch(fetchSucess(data))
        } catch (error) {
            return dispatch(fetchFailure(error.message))
        }
    }
    return { ...slice, asyncAction }
}

export default createAsyncSlice
