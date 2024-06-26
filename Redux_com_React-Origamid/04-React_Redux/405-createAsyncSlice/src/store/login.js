import createAsyncSlice from "./helper/createAsyncSlice";
import { combineReducers } from '@reduxjs/toolkit'


const token = createAsyncSlice({
    name: 'token',
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

export default reducer
