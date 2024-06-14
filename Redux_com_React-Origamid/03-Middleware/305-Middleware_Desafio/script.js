// Organize o código em diferentes arquivos com type module
// Crie 2 reducers, token e user
// Ações:
// token/FETCH_STARTED, token/FETCH_SUCCESS, token/FETCH_ERROR
// user/FETCH_STARTED, user/FETCH_SUCCESS, user/FETCH_ERROR
// Crie constantes e action creators para cada ação
// Crie middlewares: Thunk e localStorage
// Com a api do curso de React, puxe o token:
// o user pode ser { username: 'dog', password: 'dog' }
/* 
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
*/

// Com a api do curso de React, puxe o usuário:
/*  
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
        method: 'GET',
        headers: {
        Authorization: 'Bearer ' + token,
        },
    });
    const data = await response.json();
*/

// A api deve ir dentro da action creator das funções assíncronas
// Verifique se o token existe, caso exista dispare imediatamente
// a função para puxar o usuário. Se não existir, dispare a
// função para puxar o token e em seguida para puxar o usuário

import store from "./store/configureStore.js";
import { tokenFetch } from "./store/token.js";
import { userFetch } from "./store/user.js";

async function login(user) {
    let state = store.getState()
    if (state.token.data === null) {
        await store.dispatch(tokenFetch(user))
        state = store.getState()
    }
    await store.dispatch(userFetch(state.token.data))
}

login({ username: 'dog', password: 'dog' })
