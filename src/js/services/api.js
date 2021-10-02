import axios from "axios";

export const api = axios.create({
    baseURL: 'http://0.0.0.0:8000/',
    timeout: 2000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    
  });