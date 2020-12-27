import axios from 'axios';

// Get ready to use with back-end API
const api = axios.create({
    baseURL: ''
});

export default api;
