import { getLocalStorage } from "./helper/getLocalStorage.js"

const TOKEN_FETCH_STARTED = "token/FETCH_STARTED"
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS"
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR"

const initialState = {
    loading: false,
    data: getLocalStorage('token', null),
    error: null,
}

const tokenFetchStarted = (payload) => ({ type: TOKEN_FETCH_STARTED })
const tokenFetchSuccess = (payload) => ({
    type: TOKEN_FETCH_SUCCESS,
    payload,
    localStorage: 'token'
})
const tokenFetchError = (payload) => ({
    type: TOKEN_FETCH_ERROR,
    payload
})

export const tokenFetch = ( user ) => async (dispatch) => { // Arrow function que retorna uma função assíncrona
    try {
        dispatch(tokenFetchStarted()) // Indica que fetch iniciou
        const response = await fetch(
            'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            },
        );
        const { token } = await response.json();
        dispatch(tokenFetchSuccess(token))
        } catch (error) {
        console.log(error)
        dispatch(tokenFetchError(error.message))
    }
}

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_FETCH_STARTED:
            return { ...state, loading: true }
        case TOKEN_FETCH_SUCCESS:
            return { loading: false, data: action.payload, error: null }
        case TOKEN_FETCH_ERROR:
            return { loading: false, data: null, error: null }
        default:
            return state
    }
}
