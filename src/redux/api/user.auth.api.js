import axios from "axios"
import { BASE_URI_DEV } from "./uris"

export const registerResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_DEV}user/register`, user, { withCredentials: true })
    } catch (err) {
        console.log("err", err)
    }
}

export const loginResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_DEV}user/login`, user)
    } catch (err) {
        console.log(err)
    }
}

export const forgotPasswordResponse = async (user) => {
    try {
        return axios.post(`${BASE_URI_DEV}user/forgot-password`, user)
    } catch (err) {
        console.log(err)
    }
}