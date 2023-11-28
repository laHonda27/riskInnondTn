import React from 'react';
import PieChart from '../../charts/PieChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard09() {
  
  const chartData = {
    labels: ['Juin', 'Juillet', 'Août', 'Septembre'], 
    datasets: [
      {
        label: 'Nombre d\'inondations à Tunis par mois',
        data: [3, 5, 2, 4], 
        backgroundColor: [
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.red[400],
          tailwindConfig().theme.colors.green[400],
          tailwindConfig().theme.colors.orange[400],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.red[500],
          tailwindConfig().theme.colors.green[500],
          tailwindConfig().theme.colors.orange[500],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Inondations à Tunis par mois</h2>
      </header>
      <PieChart data={chartData} width={389} height={220} />
    </div>
  );
}

export default FintechCard09;
