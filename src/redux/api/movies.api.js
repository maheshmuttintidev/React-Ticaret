import axios from 'axios'
import { BASE_URI_DEV } from './uris'

export const getMoviesResponse = async () => {
    try {
        return axios.get(`${BASE_URI_DEV}movies-list`)
    } catch (e) {
        console.log(e)
    }
}