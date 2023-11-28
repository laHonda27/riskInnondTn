import React from 'react';
import BarChart from '../../charts/BarChart05';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard03() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021'
    ],
    datasets: [
      // Blue bars pour les précipitations normales
      {
        label: 'Précipitations Normales',
        data: [30, 45, 20, 10, 40, 30],
        backgroundColor: tailwindConfig().theme.colors.blue[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Grey bars pour les précipitations exceptionnelles
      {
        label: 'Précipitations Exceptionnelles',
        data: [0, 10, 70, 5, 80, 10],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Niveaux de Précipitations à Tunis</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default FintechCard03;
