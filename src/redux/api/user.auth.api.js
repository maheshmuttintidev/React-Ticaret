import axios from "axios"

export const registerResponse = async (user) => {
    try {
        return axios.post('https://ticaret-001.herokuapp.com/user/register', user)
    } catch(err) {
        console.log(err)
    }
}

export const loginResponse = async (user) => {
    try {
        return axios.post('https://ticaret-001.herokuapp.com/user/login', user)
    } catch(err) {
        console.log(err)
    }
}

export const forgotPasswordResponse = async (user) => {
    try {
        return axios.post('https://ticaret-001.herokuapp.com/user/forgot-password', user)
    } catch(err) {
        console.log(err)
    }
}