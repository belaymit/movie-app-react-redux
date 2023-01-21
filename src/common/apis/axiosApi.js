import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export default axiosApi;
