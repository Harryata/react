import React, { useEffect, useState } from 'react';
import { getNotifications } from '../../api/notifications';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notificaciones</h1>
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

export default NotificationsList;
