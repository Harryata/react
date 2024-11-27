import React, { useEffect, useState } from 'react';
import { getPermissions } from '../../api/users';

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      const data = await getPermissions();
      setPermissions(data);
    };
    fetchPermissions();
  }, []);

  return (
    <div>
      <h1>Lista de Permisos</h1>
      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>{permission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
