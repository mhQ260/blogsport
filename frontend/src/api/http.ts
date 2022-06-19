import axios from 'axios';

export const getAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
});

// baseURL: process.env.VUE_APP_API,