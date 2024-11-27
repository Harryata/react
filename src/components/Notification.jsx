import React from 'react';

const Notification = ({ message, type }) => {
  const styles = {
    success: { color: 'green' },
    error: { color: 'red' },
    info: { color: 'blue' },
  };

  return (
    <div style={styles[type] || {}}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
