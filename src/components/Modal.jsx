import React from 'react';

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <header>
          <h2>{title}</h2>
          <button onClick={onClose}>Cerrar</button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Modal;
