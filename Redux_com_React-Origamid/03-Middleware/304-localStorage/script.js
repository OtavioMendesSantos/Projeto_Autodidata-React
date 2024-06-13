const img = document.getElementById('img')

function getLocalStorage(key, initial) {
    try {
        return JSON.parse(window.localStorage.getItem(key)) || initial
    } catch (error) {
        return initial
    }
}

const initialState = {
    loading: false,
    data: getLocalStorage('data', null),
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true }
        case "FETCH_SUCESSO":
            return { loading: false, data: action.payload, error: null }
        case "FETCH_FAILURE":
            return { loading: false, data: action.payload, error: null }
        default:
            return state
    }
}

// Ocorre antes da função reducer ser executada
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('ACTION ', action);
    console.log('PREV_STATE', store.getState());
    const result = next(action)
    console.log('NEW _STATE', store.getState());
    console.groupEnd(action);
    return result
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

const localStorage = (store) => (next) => (action) => {
    const result = next(action)
    if (action.localStorage !== undefined) {
        window.localStorage.setItem('message', JSON.stringify(action.localStorage.message))
    }
    return result
}

const { createStore, compose, applyMiddleware } = Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(logger, thunk, localStorage))
const store = createStore(reducer, enhancer)

const fetchStart = () => {
    return { type: "FETCH_START" }
}
const fetchSucesso = (data, localStorage) => {
    return { type: "FETCH_SUCESSO", payload: data, localStorage: localStorage }
}
const fetchFailure = (error) => {
    return { type: "FETCH_FAILURE", payload: error }
}

store.subscribe(() => {
    img.src = store.getState().data
})

function fetchUrl(url) {
    return async function (dispatch, getState) {
        try {
            dispatch(fetchStart())
            const response = await fetch(url)
            const json = await response.json()
            dispatch(fetchSucesso(json.message, json))
        } catch (error) {
            dispatch(fetchFailure(error))
        }
    }
}


const state = store.getState()
if (state.data === null) {
    store.dispatch(fetchUrl('https://dog.ceo/api/breeds/image/random'))
}
