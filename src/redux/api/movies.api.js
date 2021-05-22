import axios from 'axios'

export const getMoviesResponse = async () => {
    try {
        return axios.get('https://ticaret-001.herokuapp.com/movies-list')
    } catch(e) {
        console.log(e)
    }
}