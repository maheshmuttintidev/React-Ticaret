import axios from 'axios'
import * as CONSTANTS from '../constants/matcher'

export function registerUser(user) {
    const promise = axios.post(CONSTANTS.REGISTER_URI, user)

    return {
        type: 'REGISTER_USER',
        payload: promise
    }

}

export function loginUser(user) {
    const promise = axios.post(CONSTANTS.LOGIN_URI, user)

    return {
        type: 'LOGIN_USER',
        payload: promise
    }
}


export function changePassword(user, password) {
    const promise = axios.post(CONSTANTS.CHANGE_PASSWORD_URI, user, password)

    return {
        type: 'CHANGE_PASSWORD',
        payload: promise
    }
}
