import React, { useState  } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import MeetupsPosts from '../partials/community/MeetupsPosts';
import PaginationNumeric from '../components/PaginationNumeric';

import innond1 from '../images/innond/1.jpg';
import innond2 from '../images/innond/2.jpg';
import innond3 from '../images/innond/3.jpg';
import innond4 from '../images/innond/4.jfif';
import innond5 from '../images/innond/INOND1.jfif';
import innond6 from '../images/innond/INOND2.jfif';


function DocScientifique() {
  
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
        <div className="flex h-[100dvh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Page header */}
                <div className="sm:flex sm:justify-between sm:items-center mb-5">

                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Articles scientifique</h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                    {/* Search form */}
                    <SearchForm placeholder="Rechercher…" />


                </div>
                </div>

                {/* Filters */}
                <div className="mb-5">
                <ul className="flex flex-wrap -m-1">
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">
                        Tout Voir
                    </button>
                    </li>
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        En Ligne
                    </button>
                    </li>
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        Local
                    </button>
                    </li>
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        Cette Semaine
                    </button>
                    </li>
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        Ce Mois-ci
                    </button>
                    </li>
                    <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        Abonnements
                    </button>
                    </li>
                </ul>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">289 Articles</div>

                <div className="grid xl:grid-cols-2 gap-6">
                    
                <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Lun 27 Sept, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Analyse des Causes Sous-jacentes des Inondations en Tunisie</h3>
        </Link>
        <div className="text-sm">
            Cet article scientifique examine en profondeur les facteurs et les causes sous-jacentes des inondations en Tunisie, en se basant sur des données météorologiques et géographiques.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Recherche Scientifique</span>
        </div>
        </div>
    </div>
                </article>

                <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mar 15 Juin, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Impact des Inondations sur l'Écologie en Tunisie</h3>
        </Link>
        <div className="text-sm">
            Cette étude scientifique examine l'impact des inondations récentes sur l'écosystème en Tunisie, mettant en lumière les conséquences sur la faune, la flore et les ressources naturelles.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Écologie</span>
        </div>
        </div>
    </div>
</article>
<article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Jeu 10 Nov, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Modélisation des Risques d'Inondation en Tunisie</h3>
        </Link>
        <div className="text-sm">
            Cette recherche présente une modélisation avancée des risques d'inondation en Tunisie, utilisant des données climatiques et topographiques pour prédire les zones à haut risque.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Géologie</span>
        </div>
        </div>
    </div>
</article>

<article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Image */}
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mer 8 Fév, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">L'Évolution des Prévisions d'Inondations en Tunisie</h3>
        </Link>
        <div className="text-sm">
            Cet article analyse comment les méthodes de prévision des inondations en Tunisie ont évolué au fil du temps, en mettant l'accent sur les avancées technologiques récentes.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Climatologie</span>
        </div>
        </div>
    </div>
</article>
<article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Image */}
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Ven 14 Avr, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Les Inondations et la Santé Publique en Tunisie</h3>
        </Link>
        <div className="text-sm">
            Cette étude examine les conséquences des inondations sur la santé publique en Tunisie, y compris les risques sanitaires et les mesures préventives.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Santé Publique</span>
        </div>
        </div>
    </div>
</article>
<article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
    {/* Contenu */}
    <div className="grow p-5 flex flex-col">
        <div className="grow">
        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Dim 5 Mars, 2023</div>
        <Link className="inline-flex mb-2" to="/news/inondations-tunisie">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Adaptation au Changement Climatique en Réponse aux Inondations</h3>
        </Link>
        <div className="text-sm">
            Cet article scientifique examine les stratégies d'adaptation au changement climatique en Tunisie à la suite des inondations, mettant en évidence les approches durables.
        </div>
        </div>
        {/* Pied de page */}
        <div className="flex justify-between mt-3">
        {/* Tag */}
        <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
            <span>Changement Climatique</span>
        </div>
        </div>
    </div>
</article>

                </div>

                {/* Pagination */}
                <div className="mt-8">
                <PaginationNumeric />
                </div>
            </div>
            </main>
        </div>
        </div>
    );
  }
  

export default DocScientifique;