import { api } from "./api";

//Login function
export async function getCars(token){
    const initialResponse = await api.get('/cars/', {
        headers: {
            Authorization: "Bearer " + token
        }

    })
    const response = initialResponse.data.data;

    return response
}

//Register function
export async function getCar(id, token){
    const initialResponse = await api.get('/cars/' + id, {
        headers: {
            Authorization: "Bearer " + token
        }

    })

    const response = initialResponse.data.data;
    

    return response
}

export default {getCars, getCar}
