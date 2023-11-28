import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function Home() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Contenu principal */}
      <div className="relative flex flex-col flex-1 overflow-y-auto">

        {/* En-tête du site */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Contenu central */}
        <div className="flex justify-center items-center grow">
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 mx-auto text-center">

            {/* Bandeau d'accueil */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">Bienvenue</h1>
              <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">Portail de Gestion des Risques d'Inondation du Grand Tunis</h1>
              <p className="text-gray-600 text-lg">
                Notre mission est de fournir à la communauté tunisienne un accès en temps réel à des informations critiques sur les risques d'inondation, des systèmes d'alerte et des ressources éducatives proactives.
              </p>
            </div>

            {/* Barre de recherche contextuelle */}
            <div className="mb-8">
              <input
                type="search"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Rechercher des alertes, des conseils, des zones à risque..."
              />
            </div>

            {/* Autres contenus et fonctionnalités */}
            {/* Ajoutez ici d'autres composants pour les alertes, conseils, etc. */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
