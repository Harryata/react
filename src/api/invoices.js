import api from './api';

// Obtener lista de facturas (por cobrar o por pagar)
export const getInvoices = async (type) => {
  const response = await api.get(`invoices/${type}/`);
  return response.data;
};

// Obtener detalles de una factura específica
export const getInvoiceById = async (type, invoiceId) => {
  const response = await api.get(`invoices/${type}/${invoiceId}`);
  return response.data;
};

// Crear una factura nueva
export const createInvoice = async (type, invoiceData) => {
  const response = await api.post(`invoices/${type}/`, invoiceData);
  return response.data;
};

// Actualizar una factura existente
export const updateInvoice = async (type, invoiceId, invoiceData) => {
  const response = await api.put(`invoices/${type}/${invoiceId}`, invoiceData);
  return response.data;
};

// Eliminar una factura
export const deleteInvoice = async (type, invoiceId) => {
  const response = await api.delete(`invoices/${type}/${invoiceId}`);
  return response.data;
};

// Importar facturas desde un archivo
export const importInvoices = async (fileData) => {
  const response = await api.post('invoices/import', fileData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Exportar facturas a CSV o PDF
export const exportInvoices = async (format) => {
  const response = await api.get(`invoices/export?format=${format}`, {
    responseType: 'blob',
  });
  return response.data;
};
