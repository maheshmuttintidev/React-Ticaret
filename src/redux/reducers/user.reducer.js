import {LOGIN_USER, REGISTER_USER, LOGOUT, FORGOT_PASSWORD} from '../constants/user.constants'

export const UserReducer = (state = false, action) => {
    switch(action.type) {
        case LOGIN_USER:
            if(JSON.parse(sessionStorage.getItem("userData"))?.token) {
                return true
            }
            break
        case REGISTER_USER:
            if(JSON.parse(sessionStorage.getItem("userData"))?.token) {
                return true
            }
            break
        case FORGOT_PASSWORD:
            return false
        case LOGOUT:
            if(!JSON.parse(sessionStorage.getItem("userData"))) {
                return false
            }
            break
        default:
            if(JSON.parse(sessionStorage.getItem("userData"))?.token) {
                return true
            }
        }
    return state
}