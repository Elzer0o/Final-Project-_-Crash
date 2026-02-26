// src/APi/axiosConfig.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // العنوان اللي حددناه
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor عشان يضيف الـ Token تلقائياً في الطلبات الجاية
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;