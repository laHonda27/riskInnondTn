import React from 'react';
import LineChart from '../../charts/LineChart05';
import BarChart from '../../charts/BarChart05';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function FintechCard01() {

  const chartData = {
    labels: [
      '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Blue bars pour Durée des pannes (heures)
      {
        label: 'Durée des pannes (heures)',
        data: [
          2, 4.5, 3, 5,  // ces valeurs représentent la durée cumulée des pannes chaque jour
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        categoryPercentage: 0.66,
      },
      // Light blue bars pour Quartiers affectés
      {
        label: 'Quartiers affectés',
        data: [
          3, 5, 7, 4,  // ces valeurs pourraient représenter le nombre de quartiers touchés chaque jour
        ],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Impact des Pannes d'Électricité dans le Grand Tunis</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}


export default FintechCard01;
