import reducerAulas from './aulas.js'
import reducerAluno from './aluno.js'

const reducer = Redux.combineReducers({
    aulas: reducerAulas,
    aluno: reducerAluno
})

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
