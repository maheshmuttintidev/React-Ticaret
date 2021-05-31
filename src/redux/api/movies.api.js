import axios from 'axios'
import { BASE_URI_PRODUCTION } from './uris'

export const getMoviesResponse = async () => {
    try {
        return axios.get(`${BASE_URI_PRODUCTION}movies-list`)
    } catch (e) {
        console.log(e)
    }
}