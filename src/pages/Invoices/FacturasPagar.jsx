import React, { useEffect, useState } from 'react';
import { getInvoices } from '../../api/invoices';

const AccountsPayable = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices('accounts-payable');
      setInvoices(data);
    };
    fetchInvoices();
  }, []);

  return (
    <div>
      <h1>Facturas por Pagar</h1>
      <table>
        <thead>
          <tr>
            <th>Número de Factura</th>
            <th>Proveedor</th>
            <th>Monto</th>
            <th>Fecha de Vencimiento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.supplier}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.due_date}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsPayable;
