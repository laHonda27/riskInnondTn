import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';
import FintechIntro from '../partials/fintech/FintechIntro';
import FintechCard01 from '../partials/fintech/FintechCard01';
import FintechCard02 from '../partials/fintech/FintechCard02';
import FintechCard03 from '../partials/fintech/FintechCard03';
import FintechCard04 from '../partials/fintech/FintechCard04';
import FintechCard05 from '../partials/fintech/FintechCard05';
import FintechCard06 from '../partials/fintech/FintechCard06';
import FintechCard07 from '../partials/fintech/FintechCard07';
import StatCards from '../pages/StatCards';
import FintechCard09 from '../partials/fintech/FintechCard09';
import FintechCard10 from '../partials/fintech/FintechCard10';
import FintechCard11 from '../partials/fintech/FintechCard11';
import FintechCard12 from '../partials/fintech/FintechCard12';
import FintechCard13 from '../partials/fintech/FintechCard13';
import FintechCard14 from '../partials/fintech/FintechCard14';
import AnalyticsCard09 from '../partials/analytics/AnalyticsCard09';
import AnalyticsCard08 from '../partials/analytics/AnalyticsCard08';
import AnalyticsCard03 from '../partials/analytics/AnalyticsCard03';
import AnalyticsCard04 from '../partials/analytics/AnalyticsCard04';
import AnalyticsCard11 from '../partials/analytics/AnalyticsCard11';

function Metriques() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-[100dvh] overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Métriques</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />

              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
            <StatCards Title="Zones les plus touchées" Value="La Marsa, Carthage"/>
            <StatCards Title="Habitations affectées" Value="15,000"/>
            <StatCards Title="Personnes évacuées" Value="5,200"/>
            <StatCards Title="Foyers sans électricité" Value="8,000"/>

              <FintechCard09 />
              <AnalyticsCard09/>
              <AnalyticsCard08/>
              <AnalyticsCard04/>
              <FintechCard01 />
              <FintechCard03 />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Metriques;