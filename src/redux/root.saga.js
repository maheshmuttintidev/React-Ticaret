import {all} from 'redux-saga/effects'
import { getMoviesListSaga } from './sagas/movies.sagas'
import {watchForgotPasswordSaga, watchLoginSaga, watchLogoutSaga, watchRegisterSaga} from './sagas/user.sagas'

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchRegisterSaga(),
        watchLogoutSaga(),
        watchForgotPasswordSaga(),
        getMoviesListSaga()
    ])
}