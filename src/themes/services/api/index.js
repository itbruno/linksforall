import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000' // TO-DO change this
});

export default api;
