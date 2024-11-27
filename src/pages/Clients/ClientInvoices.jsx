import React, { useEffect, useState } from 'react';
import { getClientInvoices } from '../../api/clients';

const ClientInvoices = ({ clientId }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getClientInvoices(clientId);
      setInvoices(data);
    };
    fetchInvoices();
  }, [clientId]);

  return (
    <div>
      <h1>Facturas del Cliente</h1>
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

export default ClientInvoices;
