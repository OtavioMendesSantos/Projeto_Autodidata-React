import createAsyncSlice from "./helper/createAsyncSlice";
import { combineReducers } from "@reduxjs/toolkit";
import getLocalStorage from "./helper/getLocalStorage";

const token = createAsyncSlice({
    name: 'token',
    initialState: {
        data: {
            token: getLocalStorage('token', null)
        }
    },
    reducers: {
        removeToken(state) {
            state.data.token = null
        },
        success: {
            reducer(state, action) {
                state.loading = false
                state.error = null
                state.data = action.payload
            },
            prepare(payload) {
                return {
                    payload: payload,
                    meta: {
                        localStorage: {
                            key: 'token',
                            value: payload.token
                        }
                    }
                }
            }
        }        
    },
    fetchConfig: (user) => ({
        url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        },
    }),
})

const user = createAsyncSlice({
    name: 'user',
    reducers: {
        removeUser(state) {
            state.data = null
        }
    },
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

const {removeToken} = token.actions
const {removeUser} = user.actions
console.log(token.actions);

export const login = (user) => async (dispatch) => {
    try {
        const { payload } = await dispatch(fetchToken(user))
        if (payload.token !== undefined) {
            await dispatch(fetchUser(payload.token))
        }
    } catch (error) {

    }
}

export const autoLogin = () => async (dispatch, getState) => {
    const state = getState()
    const { token } = state.login.token.data
    if (token) await dispatch(fetchUser(token))
    // console.log(token);
}

export const userLogout = () => async (dispatch) => {
    dispatch(removeUser())
    dispatch(removeToken())
    window.localStorage.removeItem('token')
}

export default reducer
