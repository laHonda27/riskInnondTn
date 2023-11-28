import React, { useState } from 'react';
import axios from 'axios';
import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';
import ModalBasic from '../components/ModalBasic';

import ModalAction from '../components/ModalAction';
import DropdownEditMenu from '../components/DropdownEditMenu';


function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)

  
  const handleGeolocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }

  const showPosition = (position) => {
      // Ici, vous pouvez utiliser une API comme OpenStreetMap ou Google Maps pour obtenir une adresse à partir des coordonnées.
      // Pour cet exemple, nous allons simplement remplir le champ avec les coordonnées.
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("position").value = `Lat: ${lat}, Lon: ${lon}`;
  }

  const showError = (error) => {
      switch(error.code) {
          case error.PERMISSION_DENIED:
              alert("L'utilisateur a refusé la demande de géolocalisation.");
              break;
          case error.POSITION_UNAVAILABLE:
              alert("Les informations de localisation ne sont pas disponibles.");
              break;
          case error.TIMEOUT:
              alert("La demande de localisation de l'utilisateur a expiré.");
              break;
          case error.UNKNOWN_ERROR:
              alert("Une erreur inconnue s'est produite.");
              break;
      }
  }


  const handleSubmit = async () => {
    const position = document.getElementById('position').value;
    const [lat, long] = position.split(',').map(coord => coord.split(':')[1].trim());
    const type_event = document.getElementById('type-alerte').value;
  
    try {
      const response = await axios.post('http://localhost:5000/addAlert', {
        lat,
        long,
        type_event
      });
      setFeedbackModalOpen(true);
      
      console.log('Alert added:', response.data);
    } catch (err) {
      console.error('Error adding alert:', err);
    }
  };

  
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>


          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
         
            <div>
              <DropdownEditMenu className="relative inline-flex">
                <li>
                <a
                  className="font-medium text-sm text-rose-500 hover:text-rose-600 dark:hover:text-slate-200 flex py-1 px-3"
                  href="#0"
                  onClick={(e) => { e.stopPropagation(); setNewsletterModalOpen(true); }}
                >
                  Être alerté en cas d'intempéries
                </a>
                </li>
                <li>
                  <a className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800  dark:hover:text-slate-200 flex py-1 px-3" href="#0">Carte alerte</a>
                </li>
                <li>
                  <a  onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }} className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800  dark:hover:text-slate-200 flex py-1 px-3" href="#0">Publier alerte</a>
                  <ModalBasic id="alerte-localisation-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen}title="Publier une Alerte">
                      {/* Modal content */}
                      <div className="px-5 py-4">
                          <div className="text-sm">
                              <div className="font-medium text-slate-800 dark:text-slate-100 mb-3">Aidez la communauté en signalant une situation d'urgence près de vous 🚨</div>
                              <p className="mb-4">Votre alerte peut aider d'autres personnes à éviter des zones à risque et à prendre des mesures de précaution. Veuillez fournir des informations précises.</p>
                          </div>
                          <div className="space-y-3">
                              <div>
                                  <div className="flex items-center">
                                    <input id="position" className="form-input flex-grow px-2 py-1" type="text" placeholder="Ex: Rue de la Liberté, Tunis" required />
                                    <button onClick={handleGeolocation} className="ml-2 btn-sm text-gray-500 border border-gray-500 bg-white hover:bg-gray-100">📍</button>
                                  </div>
                                  <small className="text-xs text-slate-600">Si possible, activez la géolocalisation pour une précision maximale.</small>
                              </div>
                              <div>
                                  <label className="block text-sm font-medium mb-1" htmlFor="type-alerte">Type d'alerte</label>
                                  <div>
                                      <select id="type-alerte" className="form-select w-full">
                                          <option>Route coupée</option>
                                          <option>Maison immergée</option>
                                          <option>Cours d'eau débordé</option>
                                          <option>Voiture emportée</option>
                                          <option>Canaux d'évacuation ouverts</option>
                                          <option>Risque d'électrocution</option>
                                      </select>
                                  </div>
                              </div>
                              <div>
                                  <label className="block text-sm font-medium mb-1" htmlFor="description">Description supplémentaire (optionnel)</label>
                                  <textarea id="description" className="form-textarea w-full px-2 py-1" rows="3" placeholder="Donnez plus de détails sur la situation..."></textarea>
                              </div>
                          </div>
                      </div>
                    <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex flex-wrap justify-end space-x-2">
                      <button type="button" onClick={handleSubmit} className="btn-sm text-white bg-red-500 hover:bg-red-600 ml-3">Publier l'alerte</button>
                      </div>
                    </div>
                  </ModalBasic>

                </li>
              </DropdownEditMenu>
            </div>
            {/* faire une pop up custome pour recuper la positio en fonction de l'ip puis afficher la liste delement
            créer une bdd postgree envoyer les données la bas
            recuperer les données dans la carte
            type de sinistre route couper , maison submergé  , court d'au deborder , voiture emporter , canaux d'évacuation ouvert, risque d'élec */}
            <ModalAction id="newsletter-modal"   style={{ zIndex: 1000 }} modalOpen={newsletterModalOpen} setModalOpen={setNewsletterModalOpen}>
                  {/* Modal header */}
                  <div className="mb-2 text-center">
                    {/* Icon */}
                    <div className="mb-3">
                      <svg className="inline-flex w-12 h-12 rounded-full shrink-0 fill-current" viewBox="0 0 48 48">
                        <rect className="text-indigo-100 dark:text-indigo-500/30" width="48" height="48" rx="24" />
                        <path className="text-indigo-300" d="M19 16h7a8 8 0 110 16h-7V16z" />
                        <path className="text-indigo-500" d="M26 24l-7-6v5h-8v2h8v5z" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Inscription aux Alertes Intempéries</div>
                  </div>
                  {/* Modal content */}
                  <div className="text-center">
                    <div className="text-sm mb-6">
                    Inscrivez-vous pour recevoir des alertes en temps réel en cas d'intempéries dans votre région. Restez informé et préparez-vous à l'avance pour garantir votre sécurité et celle de vos proches. Entrez votre adresse e-mail ci-dessous pour commencer l'inscription.
                    </div>
                    {/* Submit form */}
                    <form className="flex max-w-sm m-auto">
                      <div className="grow mr-2">
                        <label htmlFor="subscribe-form" className="sr-only">Leave your Email</label>
                        <input id="subscribe-form" className="form-input w-full px-2 py-1" type="email" />
                      </div>
                      <button type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Je m'inscris</button>
                    </form>
                    <div className="text-xs text-slate-500 italic mt-3">
                      Nous respectons votre vie privée. Pas de spam. Désabonnez-vous à tout moment !
                    </div>
                  </div>
                </ModalAction>


            <Notifications align="right" />
            {/* <Help align="right" /> */}
            {/* <ThemeToggle /> */}
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
            {/* <UserMenu align="right" /> */}

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;