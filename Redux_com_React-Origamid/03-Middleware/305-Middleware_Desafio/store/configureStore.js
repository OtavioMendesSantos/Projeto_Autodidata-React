import { tokenReducer } from "./token.js";
import { userReducer } from "./user.js";
import thunk from "./middleware/thunk.js";
import localStorage from "./middleware/localStorage.js";

const { createStore, applyMiddleware, combineReducers, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage))
const reducer = combineReducers({ token: tokenReducer, user: userReducer})
const store = createStore(reducer, enhancer)

export default store
