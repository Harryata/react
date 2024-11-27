import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = ({ isAuthenticated }) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
