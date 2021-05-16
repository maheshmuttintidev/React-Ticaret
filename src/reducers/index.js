import {combineReducers} from 'redux'
import {UserReducer} from './user.reducer'

const rootReducer = combineReducers({
    isUserLoggedIn: UserReducer
})

export default rootReducer