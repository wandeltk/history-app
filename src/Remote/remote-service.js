import {client} from './client';


const authentication = async (un, pw) => {
    let response = await client.post('/user/auth', {un, pw});
    return await response.data;
}

const logout = async () => {
    let response = await client.get('/user/auth');
    return await response.data;
}

const getAllNHL = async () => {
    let response = await client.get('/nhl');
    return await response.data;
}

export default (
    logout,
    authentication,
    getAllNHL
)