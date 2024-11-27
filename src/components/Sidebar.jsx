import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <h3>Menú</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Usuarios</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/suppliers">Proveedores</Link></li>
        <li><Link to="/invoices/accounts-receivable">Facturas por Cobrar</Link></li>
        <li><Link to="/invoices/accounts-payable">Facturas por Pagar</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
