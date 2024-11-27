import React, { useEffect, useState } from 'react';
import { getSupplierInvoices } from '../../api/suppliers';

const SupplierInvoices = ({ supplierId }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getSupplierInvoices(supplierId);
      setInvoices(data);
    };
    fetchInvoices();
  }, [supplierId]);

  return (
    <div>
      <h1>Facturas del Proveedor</h1>
      <table>
        <thead>
          <tr>
            <th>Número de Factura</th>
            <th>Fecha de Emisión</th>
            <th>Fecha de Vencimiento</th>
            <th>Monto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.issue_date}</td>
              <td>{invoice.due_date}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierInvoices;
