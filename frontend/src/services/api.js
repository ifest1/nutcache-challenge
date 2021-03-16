import axios from 'axios';

const api = axios.create({
  baseURL: ` https://nutcachebackend.herokuapp.com/api` 
});

export default api;