import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'
import login from './login'
import logger from './middleware/logger'

const reducer = combineReducers({ contador, modal, login, })


const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store
