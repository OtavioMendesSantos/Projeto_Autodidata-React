import createAsyncSlice from "./helper/createAsyncSlice";
import { combineReducers } from '@reduxjs/toolkit'
import getLocalStorage from "./helper/getLocalStorage";

const token = createAsyncSlice({
    name: 'token',
    initialState: {
        data: {
            token: getLocalStorage('token', null)
        }
    },
    reducers: {
        fetchSucess: {
            reducer(state, action) {
                state.loading = true
                state.data = action.payload
                state.error = false
            },
            prepare(payload) {
                return {
                    payload,
                    meta: {
                        localStorage: {
                            key: 'token',
                            value: payload.token
                        }
                    }
                }
            }
        },
    },
    fetchConfig: (user) => ({
        url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }
    }),
})

const user = createAsyncSlice({
    name: 'user',
    fetchConfig: (token) => ({
        url: 'https://dogsapi.origamid.dev/json/api/user',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }
    }),
})

const reducer = combineReducers({ token: token.reducer, user: user.reducer })

const fetchToken = token.asyncAction
const fetchUser = user.asyncAction

export const login = (user) => async (dispatch) => {
    try {
        const { payload } = await dispatch(fetchToken(user))
        if (payload.token !== undefined) {
            await dispatch(fetchUser(payload.token))
        }
    } catch (error) { }
}

export const autoLogin = () => async (dispatch, getState) => {
    const state = getState()
    const {token} = state.login.token.data
    if (token) await dispatch(fetchUser(token))
    // console.log(token);
}


export default reducer
