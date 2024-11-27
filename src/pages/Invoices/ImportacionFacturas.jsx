import React, { useState } from 'react';
import { importInvoices } from '../../api/invoices';

const Import = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImport = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await importInvoices(formData);
    alert('Facturas importadas con éxito');
  };

  return (
    <div>
      <h1>Importar Facturas</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImport}>Importar</button>
    </div>
  );
};

export default Import;
