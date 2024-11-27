import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/suppliers">Proveedores</Link></li>
        <li><Link to="/invoices/accounts-receivable">Facturas por Cobrar</Link></li>
        <li><Link to="/invoices/accounts-payable">Facturas por Pagar</Link></li>
        <li><Link to="/logout">Cerrar Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
