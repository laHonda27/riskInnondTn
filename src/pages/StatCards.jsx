import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../charts/LineChart01';
import Icon from '../images/icon-02.svg';
import EditMenu from '../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../utils/Utils';

function StatCards(props) {


  return (
    <div className=" sm:col-span-6 xs:col-span-6  xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-4">
        <header className="flex justify-start items-start">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
          <div className="ml-4 ">{props.Title}</div>
        </header>
        <h2 className="ml-12 text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{props.Value}</h2>
      </div>
    </div>
  );
}

export default StatCards;
