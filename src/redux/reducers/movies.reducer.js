import { GET_MOVIES_LIST } from '../constants/movies.constants'

const initialState = []

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST: {
            return action.payload
        }
        default:
            return { ...state }
    }
}