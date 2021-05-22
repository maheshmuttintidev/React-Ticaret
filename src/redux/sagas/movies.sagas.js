import { takeLatest, call, put } from 'redux-saga/effects'
import {GET_MOVIES_LIST, GET_MOVIES_LIST_SAGA} from '../constants/movies.constants'
import {getMoviesResponse} from '../api/movies.api'


export function* getMoviesList() {
    try {
        const {data} = yield call(getMoviesResponse)
        yield put({
            type: GET_MOVIES_LIST,
            payload: data
        })
    } catch(e) {
        console.log(e)
    }
}

export function* getMoviesListSaga() {
    yield takeLatest(GET_MOVIES_LIST_SAGA, getMoviesList)
}