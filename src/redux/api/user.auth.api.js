import axios from "axios"
import { BASE_URI_PRODUCTION } from "./uris"

export const registerResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_PRODUCTION}user/register`, user)
    } catch (err) {
        console.log("err", err)
    }
}

export const loginResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_PRODUCTION}user/login`, user)
    } catch (err) {
        console.log(err)
    }
}

export const forgotPasswordResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_PRODUCTION}user/forgot-password`, user)
    } catch (err) {
        console.log(err)
    }
}