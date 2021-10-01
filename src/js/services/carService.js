import { api } from "./api";

//Login function
export function getCars(){
    api.post('/cars/', {
        username: username,
        password: pass
    })
    .then(function (response) {
            return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

//Register function
export function getCar(id){
    api.post('/cars/' + id, {
        username: username,
        password: pass
    })
    .then(function (response) {
        return response.data.data
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default {getCars, getCar}
