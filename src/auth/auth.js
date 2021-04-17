// import {loginUser} from '../actions/authUser'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
class Authentication {
    constructor() {
        this.authenticated = false
    }

    logout(callback) {
        if(sessionStorage.clear()) {
            this.authenticated = false
        }
        callback()
    }

    isAuthenticated() {
        return this.authenticated
    }
}
export default new Authentication()