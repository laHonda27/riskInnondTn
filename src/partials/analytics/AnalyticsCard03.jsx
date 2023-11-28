import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AnalyticsCard03() {

  const chartData = {
    labels: [
      'La Medina', 'La Marsa', 'Sidi Bou Said',
      'El Menzah', 'Les Berges du Lac', 'Carthage',
    ],
    datasets: [
      // Stack
      {
        label: 'Direct',
        data: [
          5000, 4000, 4500, 3800, 5200, 5100,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[800],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Referral',
        data: [
          2500, 2700, 2800, 3100, 2800, 3300,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Organic Search',
        data: [
          2300, 2000, 2200, 2400, 2500, 2300,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[400],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Social',
        data: [
          2200, 2100, 2300, 2000, 2200, 2100,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[100],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[200],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Traffic par Zone à Tunis</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default AnalyticsCard03;
