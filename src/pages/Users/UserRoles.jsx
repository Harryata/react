import React, { useEffect, useState } from 'react';
import { getUserRoles, updateUserRoles } from '../../api/users';

const UserRoles = ({ userId }) => {
  const [roles, setRoles] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const userRoles = await getUserRoles(userId);
      const allRoles = ['Admin', 'Manager', 'Accountant']; // Define los roles disponibles
      setRoles(userRoles);
      setAvailableRoles(allRoles);
    };
    fetchRoles();
  }, [userId]);

  const handleRoleChange = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleSubmit = async () => {
    await updateUserRoles(userId, selectedRoles);
    alert('Roles actualizados con éxito');
  };

  return (
    <div>
      <h1>Gestión de Roles para el Usuario</h1>
      <ul>
        {availableRoles.map((role) => (
          <li key={role}>
            <input
              type="checkbox"
              checked={selectedRoles.includes(role)}
              onChange={() => handleRoleChange(role)}
            />
            {role}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Guardar Roles</button>
    </div>
  );
};

export default UserRoles;
