import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Cambia esto según la URL de tu backend
  timeout: 5000, // Tiempo máximo de espera
});

// Interceptor para agregar el token JWT a las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
