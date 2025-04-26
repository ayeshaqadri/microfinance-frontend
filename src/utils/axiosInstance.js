import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://microfinance-backend-production.up.railway.app/api', // <-- HTTPS important
  withCredentials: true,
});

export default axiosInstance;
