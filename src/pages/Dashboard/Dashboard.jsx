import React from 'react';
import Metrics from './Metrics';
import Charts from './Charts';
import Cashflow from './Cashflow';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Metrics />
      <Charts />
      <Cashflow />
    </div>
  );
};

export default Dashboard;
