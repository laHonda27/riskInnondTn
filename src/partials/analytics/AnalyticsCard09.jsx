import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AnalyticsCard09() {
  
  const chartData = {
    labels: ['La Marsa', 'Carthage', 'Medina', 'Bardo'],
    datasets: [
      {
        label: 'Impact des inondations par quartier',
        data: [60, 75, 50, 40], 
        backgroundColor: [
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.red[500],
          tailwindConfig().theme.colors.yellow[500],
          tailwindConfig().theme.colors.green[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.blue[600],
          tailwindConfig().theme.colors.red[600],
          tailwindConfig().theme.colors.yellow[600],
          tailwindConfig().theme.colors.green[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Impact des inondations à Tunis par quartier</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default AnalyticsCard09;
