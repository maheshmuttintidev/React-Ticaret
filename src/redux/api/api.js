import axios from "axios"

export const loginResponse = async (user) => {
    try {
        return axios.post('https://ticaret-001.herokuapp.com/user/login', user)
    } catch(err) {
        console.log(err)
    }
}

export const forgotPasswordResponse = async (user) => {
    try {
        return axios.post('http://localhost:5000/user/forgot-password', user)
    } catch(err) {
        console.log(err)
    }
}