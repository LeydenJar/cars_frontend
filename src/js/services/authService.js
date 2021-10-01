import { api } from "./api";

//Login function
export async function login(username, pass){
    // var response;

    const initialResponse = await api.post('/auth/login', {
        username: username,
        password: pass
    })

    const response = initialResponse.data.data;
    

    return response
}

//Register function
export async function register(username, pass){
    // var response;
    const initialResponse = await api.post('/auth/register', {
        username: username,
        password: pass
    })

    const response = initialResponse.data.data;
    
    return response
}


export default {login, register}