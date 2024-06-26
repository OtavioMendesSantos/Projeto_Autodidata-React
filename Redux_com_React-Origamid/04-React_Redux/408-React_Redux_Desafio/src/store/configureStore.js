// Utilizando os conceitos e funções ensinadas (createAsyncSlice, Thunk, localStorage).
// Crie um mini aplicativo utilizando a API do Dogs.
// Crie um formulário para a autenticação do usuário
// Após o usuário ser autenticado, remova o formulário
// e mostre uma lista com as fotos mais recentes
/* const api_photos = {
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=3&_user=0`,
    options: {
        method: 'GET',
        cache: 'no-store',
    },
}; */
// permita que o usuário carregue mais fotos ao clicar em um botão
// crie a funcionalidade de logout

import { combineReducers, configureStore } from '@reduxjs/toolkit';	
import login from './login';

const reducer = combineReducers({
    login,
})

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export default store
