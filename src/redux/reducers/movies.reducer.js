import { GET_MOVIES_LIST } from '../constants/movies.constants'

const initialState = {
    isLoading: true,
    moviesList: []
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST: {
            return {
                isLoading: false,
                movieList: action.payload
            }
        }
        default:
            return { ...state }
    }
}