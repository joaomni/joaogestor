import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fastifydeploy-myapi.onrender.com'
})

export default api