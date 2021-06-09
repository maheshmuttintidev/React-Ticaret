import { REGISTER_USER, LOGIN_USER, LOGOUT, REGISTER_USER_SAGA, LOGIN_USER_SAGA, LOGOUT_SAGA, FORGOT_PASSWORD, FORGOT_PASSWORD_SAGA } from '../constants/user.constants'
import { takeLatest, put, call } from 'redux-saga/effects'
import { forgotPasswordResponse, loginResponse, registerResponse } from '../api/user.auth.api'

// export function* registerSaga(action) {
//     // without call effect in redux saga
//     const url = 'http://localhost:5000/user/register'
//     const res = yield axios.post(url, action.payload)
//     let {data} = res
//     sessionStorage.setItem("userData", JSON.stringify(data))
//     yield put({
//         type: REGISTER_USER,
//         payload: {
//             data
//         }
//     })
// }


export function* registerSaga(action) {
    // do api call with call effect in redux saga
    const { data } = yield call(registerResponse, action.payload)
    sessionStorage.setItem("userData", JSON.stringify(data))
    yield put({
        type: REGISTER_USER,
        payload: data
    })
}


export function* loginSaga(action) {
    // do api call with call effect in redux saga
    let { data } = yield call(loginResponse, action.payload)
    sessionStorage.setItem("userData", JSON.stringify(data))
    yield put({
        type: LOGIN_USER,
        payload: data
    })
}

export function* forgotPasswordSaga(action) {
    // do api call with call effect in redux saga
    let { data } = yield call(forgotPasswordResponse, action.payload)
    console.log(data)
    sessionStorage.setItem("forgotMessage", JSON.stringify(data))
    yield put({
        type: FORGOT_PASSWORD,
        payload: {
            data
        }
    })
}

export function* logoutSaga() {
    // do api call with call effect in redux saga
    sessionStorage.removeItem("userData")
    yield put({
        type: LOGOUT
    })
}

export function* watchRegisterSaga() {
    yield takeLatest(REGISTER_USER_SAGA, registerSaga)
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_USER_SAGA, loginSaga)
}

export function* watchLogoutSaga() {
    yield takeLatest(LOGOUT_SAGA, logoutSaga)
}

export function* watchForgotPasswordSaga() {
    yield takeLatest(FORGOT_PASSWORD_SAGA, forgotPasswordSaga)
}