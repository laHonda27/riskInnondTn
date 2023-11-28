import React from 'react';

import UserImage from '../../images/user-64-14.jpg';
import deadIcon from '../../images/dead.svg';

function FintechIntro() {
  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 py-6">
        <div className="md:flex md:justify-between md:items-center">
          {/* Left side */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            <div className="mr-4 ">
              <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                  <svg class="icon icon-tabler icon-tabler-grave-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon2-a">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fillRule="nonzero" fill="none">
                    <path d="M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171" />
                    <path d="M12 7v5" />
                    <path d="M10 9h4" />
                    <path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" />
                    </g>
                  </svg>
                </div>
            </div>
            {/* User info */}
            <div>
              <div className="mb-2">
                Hey <strong className="font-medium text-slate-800 dark:text-slate-100">Mary</strong> 👋, this is your current balance:
              </div>
              <div className="text-3xl font-bold text-emerald-500">$47,347.09</div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
    
    
  );
}

export default FintechIntro;
