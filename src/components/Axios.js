import axios from "axios";
import {authenticationManager} from "./Authentication";

let req = axios.create({
    baseURL: "https://cigout-backend.herokuapp.com",
    responseType: "json"
})

export function AxiosGet(url, authenticated=true) {
    let custom_headers = null
    if (authenticated) {
        let token = authenticationManager.currentUserValue.token
        custom_headers = {"Authorization": `Bearer ${token}`}
    }
    return req.get(
        url,
        {headers: custom_headers}
    )
        .then(response => {
            return response
        })
        .catch(error =>{
            throw error
        })
}

export function AxiosPost(url, body=null, authenticated=true) {
    let custom_headers = null
    if (authenticated) {
        let token = authenticationManager.currentUserValue.token
        custom_headers = {"Authorization": `Bearer ${token}`}
    }
    return req.post(
        url,
        body,
        {headers: custom_headers}
    )
        .then(response => {
            return response
        })
        .catch(error =>{
            throw error
        })
}