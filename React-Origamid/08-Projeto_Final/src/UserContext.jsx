import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api/Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const userLogout = useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/login');
    }, [navigate])

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json()
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok) throw new Error(`Error: Usuário e/ou senha inválidos`); //Error(`Error: ${tokenRes.statusText}`)
            const { token } = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch (e) {
            setError(e.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function autologin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido');
                    await getUser(token);
                } catch (e) {
                    userLogout()
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autologin()
    }, [userLogout])

    return (
        <UserContext.Provider
            value={{ userLogin, userLogout, data, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    )
}
