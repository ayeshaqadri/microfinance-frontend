import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // backend ka base url
  withCredentials: true, // agar cookies ya tokens bhejne ho
});

export default axiosInstance;