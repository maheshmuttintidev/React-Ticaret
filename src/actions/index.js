import axios from 'axios'
import { LOGIN_USER, REGISTER_USER } from '../constants/user.constants'

export const login = async (user) => {
    try {
        const responseData = await axios.post('https://ticaret-001.herokuapp.com/user/login', user)
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
        const responseData = await axios.post('https://ticaret-001.herokuapp.com/user/register', user)
        return {
            type: REGISTER_USER,
            payload: responseData
        }
    } catch(err) {
        sessionStorage.setItem("errorMessage",err)
    }
}