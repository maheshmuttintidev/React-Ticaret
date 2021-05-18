import {combineReducers} from 'redux'
import {UserReducer} from './user.reducer'

const rootReducer = combineReducers({
    isLoggedin: UserReducer
})

export default rootReducer