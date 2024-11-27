import React, { useEffect, useState } from 'react';
import { getMetrics } from '../../api/dashboard';

const Metrics = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await getMetrics();
      setMetrics(data);
    };
    fetchMetrics();
  }, []);

  return (
    <div>
      <h2>Métricas Clave</h2>
      <p>Total por Cobrar: {metrics.total_receivable || 0}</p>
      <p>Total por Pagar: {metrics.total_payable || 0}</p>
      <p>Facturas Vencidas: {metrics.overdue_invoices || 0}</p>
    </div>
  );
};

export default Metrics;
