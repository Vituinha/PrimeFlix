import axios from 'axios'
//BASE URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=451034bf8e4604cf75fdb9931d262afd

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api