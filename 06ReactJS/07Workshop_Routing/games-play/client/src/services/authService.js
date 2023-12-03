import * as request from "../lib/request";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${BASE_URL}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, password) => request.post(`${BASE_URL}/register`, {
    username,
    email,
    password,
});

export const logout = () => request.get(`${BASE_URL}/logout`);