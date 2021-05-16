import {LOGIN_USER, REGISTER_USER} from '../constants/user.constants'

export const UserReducer = (state = false, action) => {
    switch(action.type) {
        case LOGIN_USER:
            if(action.payload.data.token) {
                sessionStorage.setItem("userData", JSON.stringify(action.payload.data))
                return true
            }
            else {
                sessionStorage.setItem("userMessage", JSON.stringify(action.payload.data))
                return false
            }
        case REGISTER_USER:
            if(action.payload.data.token) {
                sessionStorage.setItem("userData", JSON.stringify(action.payload.data))
                return true
            } else {
                sessionStorage.setItem("userMessage", JSON.stringify(action.payload.data))
                return false
            }
        default:
            return state
    }
}