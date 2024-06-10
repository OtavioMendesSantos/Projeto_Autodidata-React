const { createStore, compose, applyMiddleware } = Redux

function reducer (state = 0, action) {
    switch (action.type) {
        case "INCREMENTAR":
            return state + 1
        case "DECREMENTAR":
            return state - 1
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

const reduzirMiddle = (store) => (next) => (action) => {
    if (action.type === "DECREMENTAR") alert("teste")
    const result = next(action)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(logger, reduzirMiddle))

const store = createStore(reducer, enhancer )

store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "INCREMENTAR"})
store.dispatch({type: "DECREMENTAR"})
