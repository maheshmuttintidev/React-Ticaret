import axios from 'axios'
import { LOGIN_USER, REGISTER_USER } from '../constants/user.constants'

export const login = async (user) => {
    try {
        const responseData = await axios.post('http://localhost:5000/user/login', user)
        return {
            type: LOGIN_USER,
            payload: responseData
        }
    } catch(err) {
        sessionStorage.setItem("errorMessage",err)
    }
}

export const register = async (user) => {
    try {
        const responseData = await axios.post('http://localhost:5000/user/register', user)
        return {
            type: REGISTER_USER,
            payload: responseData
        }
    } catch(err) {
        sessionStorage.setItem("errorMessage",err)
    }
}