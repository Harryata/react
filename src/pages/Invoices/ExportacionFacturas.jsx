import React from 'react';
import { exportInvoices } from '../../api/invoices';

const Export = () => {
  const handleExport = async (format) => {
    const data = await exportInvoices(format);
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `facturas.${format}`;
    link.click();
  };

  return (
    <div>
      <h1>Exportar Facturas</h1>
      <button onClick={() => handleExport('csv')}>Exportar a CSV</button>
      <button onClick={() => handleExport('pdf')}>Exportar a PDF</button>
    </div>
  );
};

export default Export;
