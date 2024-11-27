import api from './api';

// Iniciar sesión
export const login = async (credentials) => {
  const response = await api.post('auth/login', credentials);
  return response.data;
};

// Cerrar sesión (opcional, ya que solo elimina el token local)
export const logout = () => {
  localStorage.removeItem('token');
};

// Obtener información del perfil del usuario autenticado
export const getProfile = async () => {
  const response = await api.get('auth/profile');
  return response.data;
};
