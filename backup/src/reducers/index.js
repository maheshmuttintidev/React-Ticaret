import {combineReducers} from 'redux'
import userReducer from './user'

const rootReducer = combineReducers({
    isUserLoggedIn: userReducer
})

export default rootReducer