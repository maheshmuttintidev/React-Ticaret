import { combineReducers } from 'redux'
import { UserReducer } from './user.reducer'
import { moviesReducer } from './movies.reducer'

const rootReducer = combineReducers({
    isLoggedin: UserReducer,
    moviesList: moviesReducer
})

export default rootReducer