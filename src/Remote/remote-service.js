import {client} from './client';


export const auth = async (creds) => {
    let response = await client.post('/users/auth', (creds));
    return await response.data;
}

export const register = async (user) => {
    let response = await client.post('/users', (user));
    return await response.data;
}

export const getAllNHL = async () => {
    let response = await client.get('/nhl');
    return await response.data;
}

