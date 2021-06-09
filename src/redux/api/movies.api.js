import axios from 'axios'
import { BASE_URI_PRODUCTION } from './uris'

export const getMoviesResponse = async () => {
    try {
        return await axios.get(`${BASE_URI_PRODUCTION}movies-list`)
    } catch (e) {
        return
    }
}