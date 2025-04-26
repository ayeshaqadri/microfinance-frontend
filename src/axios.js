// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // 👈 Correct backend URL
  withCredentials: true, // only needed if using cookies/sessions
});

export default instance;
