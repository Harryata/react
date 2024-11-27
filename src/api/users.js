import api from './api';

// Obtener lista de usuarios
export const getUsers = async () => {
  const response = await api.get('users/');
  return response.data;
};

// Obtener roles de un usuario específico
export const getUserRoles = async (userId) => {
  const response = await api.get(`users/${userId}/roles`);
  return response.data;
};

// Actualizar roles de un usuario
export const updateUserRoles = async (userId, roles) => {
  const response = await api.put(`users/${userId}/roles`, { roles });
  return response.data;
};

// Obtener lista de permisos disponibles
export const getPermissions = async () => {
  const response = await api.get('users/permissions');
  return response.data;
};
