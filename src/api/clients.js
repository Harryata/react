import api from './api';

// Obtener lista de clientes
export const getClients = async () => {
  const response = await api.get('clients/');
  return response.data;
};

// Obtener detalles de un cliente específico
export const getClientById = async (clientId) => {
  const response = await api.get(`clients/${clientId}`);
  return response.data;
};

// Crear un cliente nuevo
export const createClient = async (clientData) => {
  const response = await api.post('clients/', clientData);
  return response.data;
};

// Actualizar un cliente existente
export const updateClient = async (clientId, clientData) => {
  const response = await api.put(`clients/${clientId}`, clientData);
  return response.data;
};

// Eliminar un cliente
export const deleteClient = async (clientId) => {
  const response = await api.delete(`clients/${clientId}`);
  return response.data;
};

// Obtener facturas asociadas a un cliente
export const getClientInvoices = async (clientId) => {
  const response = await api.get(`clients/${clientId}/invoices`);
  return response.data;
};
