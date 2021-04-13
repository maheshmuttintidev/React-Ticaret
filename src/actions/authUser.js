import axios from 'axios'
import * as USER_API_CONSTANTS from '../constants/userBackendApis'
import * as USER_AUTH_ACTIONS from '../constants/userActions'

export async function registerUser(user) {
    try {
        const promise = await axios.post(USER_API_CONSTANTS.REGISTER_URI, user)
        return {
            type: USER_AUTH_ACTIONS.REGISTER_USER,
            payload: promise
        }
    } catch(error) {
        console.log(error)
    }
    
}

export async function loginUser(user) {
    try {
        const promise = await axios.post(USER_API_CONSTANTS.LOGIN_URI, user)
        return {
            type: USER_AUTH_ACTIONS.LOGIN_USER,
            payload: promise
        }
    } catch(error) {
        console.log(error)
    }
}


// export function changePassword(user, password) {
//     const promise = axios.post(CONSTANTS.CHANGE_PASSWORD_URI, user, password)

//     return {
//         type: 'CHANGE_PASSWORD',
//         payload: promise
//     }
// }
