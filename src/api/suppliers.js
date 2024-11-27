import api from './api';

// Obtener lista de proveedores
export const getSuppliers = async () => {
  const response = await api.get('suppliers/');
  return response.data;
};

// Obtener detalles de un proveedor específico
export const getSupplierById = async (supplierId) => {
  const response = await api.get(`suppliers/${supplierId}`);
  return response.data;
};

// Crear un proveedor nuevo
export const createSupplier = async (supplierData) => {
  const response = await api.post('suppliers/', supplierData);
  return response.data;
};

// Actualizar un proveedor existente
export const updateSupplier = async (supplierId, supplierData) => {
  const response = await api.put(`suppliers/${supplierId}`, supplierData);
  return response.data;
};

// Eliminar un proveedor
export const deleteSupplier = async (supplierId) => {
  const response = await api.delete(`suppliers/${supplierId}`);
  return response.data;
};

// Obtener facturas asociadas a un proveedor
export const getSupplierInvoices = async (supplierId) => {
  const response = await api.get(`suppliers/${supplierId}/invoices`);
  return response.data;
};
