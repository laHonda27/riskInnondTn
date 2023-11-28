import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AnalyticsCard08() {

  const chartData = {
    labels: ['Dommages aux maisons', 'Routes endommagées', 'Pertes agricoles'], 
    datasets: [
      {
        label: 'Type de dégâts dus aux inondations à Tunis',
        data: [50, 30, 20], 
        backgroundColor: [
          tailwindConfig().theme.colors.red[500],
          tailwindConfig().theme.colors.orange[500],
          tailwindConfig().theme.colors.green[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.red[600],
          tailwindConfig().theme.colors.orange[600],
          tailwindConfig().theme.colors.green[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Type de dégâts dus aux inondations à Tunis</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default AnalyticsCard08;
