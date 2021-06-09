import {GET_MOVIES_LIST_SAGA} from '../constants/movies.constants'

export const getMoviesList = () => {
    return {
        type: GET_MOVIES_LIST_SAGA
    }
}