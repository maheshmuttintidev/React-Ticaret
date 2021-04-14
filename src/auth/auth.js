class Authentication {
    constructor() {
        this.authenticated = false
    }

    login(callback) {
        if(sessionStorage.getItem("token")) {
            this.authenticated = true
        }
        callback()
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

export default  new Authentication()