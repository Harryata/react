import React, { useEffect, useState } from 'react';
import { getOverdueNotifications } from '../../api/notifications';

const OverdueNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getOverdueNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notificaciones de Facturas Vencidas</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} - {notification.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverdueNotifications;
