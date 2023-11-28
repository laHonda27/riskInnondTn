import React from 'react';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function FintechCard14({ name, balance }) {
  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 py-6">
        <div className="md:flex md:justify-between md:items-center">
          {/* Left side */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* User info */}
            <div>
              <div className="mb-2">
                Hey <strong className="font-medium text-slate-800 dark:text-slate-100">{name}</strong> 👋, this is your current balance:
              </div>
              <div className="text-3xl font-bold text-emerald-500">${balance}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FintechCard14;
