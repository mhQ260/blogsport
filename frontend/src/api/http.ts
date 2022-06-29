//zdefiniowanie defaultowych ustawień do połączenia z serverem backendowym
import axios from 'axios';

export const getAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 1000,
});

// baseURL: process.env.VUE_APP_API,