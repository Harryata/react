import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './PublicRoutes.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';

// Páginas
import Login from '../pages/Auth/Login.jsx';
import Logout from '../pages/Auth/Logout.jsx';
import Profile from '../pages/Auth/Profile.jsx';

import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import ClientList from '../pages/Clients/ClientList.jsx';
import ClientInvoices from '../pages/Clients/ClientInvoices.jsx';
import SupplierList from '../pages/Suppliers/SupplierList.jsx';
import SupplierInvoices from '../pages/Suppliers/SupplierInvoices.jsx';

import AccountsReceivable from '../pages/Invoices/AccountsReceivable.jsx';
import AccountsPayable from '../pages/Invoices/AccountsPayable.jsx';
import InvoiceOverdue from '../pages/Invoices/InvoiceOverdue.jsx';
import InvoiceUpcoming from '../pages/Invoices/InvoiceUpcoming.jsx';
import Import from '../pages/Invoices/Import.jsx';
import Export from '../pages/Invoices/Export.jsx';

import UserList from '../pages/Users/UserList.jsx';
import UserRoles from '../pages/Users/UserRoles.jsx';
import Permissions from '../pages/Users/Permissions.jsx';

// Simulación de autenticación
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const AppRoutes = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    const checkAuth = () => {
      setAuth(isAuthenticated());
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route element={<PublicRoutes isAuthenticated={auth} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rutas Protegidas */}
        <Route element={<PrivateRoutes isAuthenticated={auth} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />

          {/* Gestión de Clientes */}
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/:id/invoices" element={<ClientInvoices />} />

          {/* Gestión de Proveedores */}
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/suppliers/:id/invoices" element={<SupplierInvoices />} />

          {/* Gestión de Facturas */}
          <Route path="/invoices/accounts-receivable" element={<AccountsReceivable />} />
          <Route path="/invoices/accounts-payable" element={<AccountsPayable />} />
          <Route path="/invoices/overdue" element={<InvoiceOverdue />} />
          <Route path="/invoices/upcoming" element={<InvoiceUpcoming />} />
          <Route path="/invoices/import" element={<Import />} />
          <Route path="/invoices/export" element={<Export />} />

          {/* Gestión de Usuarios */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id/roles" element={<UserRoles />} />
          <Route path="/permissions" element={<Permissions />} />
        </Route>

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to={auth ? '/dashboard' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
