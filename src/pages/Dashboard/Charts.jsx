import React, { useEffect, useState } from 'react';
import { getCharts } from '../../api/dashboard';
import { Bar } from 'react-chartjs-2';

const Charts = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const data = await getCharts();
      setChartData(data);
    };
    fetchChartData();
  }, []);

  const data = {
    labels: chartData.labels || [],
    datasets: [
      {
        label: 'Montos',
        data: chartData.data || [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <h2>Gráfico de Montos por Mes</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Charts;
