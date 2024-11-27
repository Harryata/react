import api from './api';

// Obtener métricas clave
export const getMetrics = async () => {
  const response = await api.get('dashboard/metrics');
  return response.data;
};

// Obtener datos para gráficos
export const getCharts = async () => {
  const response = await api.get('dashboard/charts');
  return response.data;
};

// Obtener proyecciones de flujo de caja
export const getCashflow = async () => {
  const response = await api.get('dashboard/cashflow');
  return response.data;
};
