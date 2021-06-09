
import { REGISTER_USER_SAGA,
         LOGIN_USER_SAGA,
         FORGOT_PASSWORD_SAGA,
         LOGOUT_SAGA
       } from '../constants/user.constants'

export const register = (user) => {
    return ({
        type: REGISTER_USER_SAGA,
        payload: user
    })
}

export const login = (user) => {
    return ({
        type: LOGIN_USER_SAGA,
        payload: user
    })
}

export const forgotPassword = (user) => {
    return ({
        type: FORGOT_PASSWORD_SAGA,
        payload: user
    })
}

export const logout = () => {
    return ({
        type: LOGOUT_SAGA
    })
}