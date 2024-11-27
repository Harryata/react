import React, { useEffect, useState } from 'react';
import { getCashflow } from '../../api/dashboard';

const Cashflow = () => {
  const [cashflow, setCashflow] = useState([]);

  useEffect(() => {
    const fetchCashflow = async () => {
      const data = await getCashflow();
      setCashflow(data);
    };
    fetchCashflow();
  }, []);

  return (
    <div>
      <h2>Proyección de Flujo de Caja</h2>
      <ul>
        {cashflow.map((item, index) => (
          <li key={index}>
            {item.date}: {item.amount > 0 ? '+' : ''}{item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cashflow;
