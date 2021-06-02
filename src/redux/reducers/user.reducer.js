import { LOGIN_USER, REGISTER_USER, LOGOUT, FORGOT_PASSWORD } from '../constants/user.constants'


export const UserReducer = (state = false, action) => {
    const isAuthenticated = JSON.parse(sessionStorage.getItem("userData"))?.token
    switch (action.type) {
        case LOGIN_USER:
            if (isAuthenticated) {
                return true
            }
            break
        case REGISTER_USER:
            if (isAuthenticated) {
                return true
            }
            break
        case FORGOT_PASSWORD:
            return false
        case LOGOUT:
            if (!isAuthenticated) {
                return false
            }
            break
        default:
            if (isAuthenticated) {
                return true
            }
    }
    return state
}