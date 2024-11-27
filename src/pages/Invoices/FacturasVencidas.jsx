import React, { useEffect, useState } from 'react';
import { getInvoices } from '../../api/invoices';

const InvoiceOverdue = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchOverdueInvoices = async () => {
      const data = await getInvoices('overdue');
      setInvoices(data);
    };
    fetchOverdueInvoices();
  }, []);

  return (
    <div>
      <h1>Facturas Vencidas</h1>
      <table>
        <thead>
          <tr>
            <th>Número de Factura</th>
            <th>Cliente/Proveedor</th>
            <th>Monto</th>
            <th>Fecha de Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.entity}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.due_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceOverdue;
