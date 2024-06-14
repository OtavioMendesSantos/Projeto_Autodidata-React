const USER_FETCH_STARTED = "user/FETCH_STARTED"
const USER_FETCH_SUCCESS = "user/FETCH_SUCCESS"
const USER_FETCH_ERROR = "user/FETCH_ERROR"

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const userFetchStarted = (payload) => ({ type: USER_FETCH_STARTED })
const userFetchSuccess = (payload) => ({
    type: USER_FETCH_SUCCESS,
    payload,
})
const userFetchError = (payload) => ({
    type: USER_FETCH_ERROR,
    payload
})

export const userFetch = ( token ) => async (dispatch) => { // Arrow function que retorna uma função assíncrona
    try {
        dispatch(userFetchStarted()) // Indica que fetch iniciou
        const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        const data = await response.json();
        dispatch(userFetchSuccess(data))
        } catch (error) {
        console.log(error)
        dispatch(userFetchError(error.message))
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_STARTED:
            return { ...state, loading: true }
        case USER_FETCH_SUCCESS:
            return { loading: false, data: action.payload, error: null }
        case USER_FETCH_ERROR:
            return { loading: false, data: null, error: null }
        default:
            return state
    }
}
