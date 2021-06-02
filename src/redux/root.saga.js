import { all } from 'redux-saga/effects'
import { watchForgotPasswordSaga, watchLoginSaga, watchLogoutSaga, watchRegisterSaga } from './sagas/user.sagas'
import { watchGetMoviesListSaga } from './sagas/movies.sagas'

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchRegisterSaga(),
        watchLogoutSaga(),
        watchForgotPasswordSaga(),
        watchGetMoviesListSaga()
    ])
}