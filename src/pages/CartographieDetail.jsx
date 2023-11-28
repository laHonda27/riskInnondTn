import React, { useState } from 'react';
import { useRef ,useMap } from "react";

import { Link , useParams, useLocation} from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DateSelect from '../components/DateSelect';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';


import UserImage01 from '../images/user-32-01.jpg';
import UserImage02 from '../images/user-32-02.jpg';
import UserImage03 from '../images/user-32-03.jpg';
import UserImage04 from '../images/user-32-04.jpg';
import UserImage05 from '../images/user-32-05.jpg';
import UserImage06 from '../images/user-32-06.jpg';
import UserImage08 from '../images/user-32-08.jpg';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import osm from "./../providers/osm-providers";

import 'leaflet/dist/leaflet.css';
import tunisiaZones from './../data/TN-delegations.json';




function CartographieDetail() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { regionName } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lat = parseFloat(searchParams.get('lat'));
  const lng = parseFloat(searchParams.get('lng'));
  
  const [center, setCenter] = useState({ lat: lat || 33.8869, lng: lng || 9.5375 });
  const ZOOM_LEVEL = 9; 
  const mapRef = useRef();

  const [activeTab, setActiveTab] = useState('dynamique');
  

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                
              {/* Content */}
              <div style={{ flex: 2 }}>

              <div className="mb-6">
                  <Link className="btn-sm px-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" to="/cartographie">
                    <svg className="fill-current text-slate-400 dark:text-slate-500 mr-2" width="7" height="12" viewBox="0 0 7 12">
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>Retour au choix de la region</span>
                  </Link>
                </div>

              <div>
                    <header className="mb-4">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Cartographie - Detail</h1>
                    <p className="dark:text-indigo-200">Consulter les indicateurs clés liés aux innondations en Tunisie</p>

                    </header>
                  {/* Start */}
                  <div className="relative mb-8">
                    <div className="absolute bottom-0 w-full h-px bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                    <div className="flex items-center justify-between space-x-4">
                        <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                <a className={`block pb-3 ${activeTab === 'dynamique' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'} whitespace-nowrap`} href="#0" onClick={() => setActiveTab('dynamique')}>Carte dynamique</a>
                            </li>
                            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                <a className={`block pb-3 ${activeTab === 'statique' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'} whitespace-nowrap`} href="#0" onClick={() => setActiveTab('statique')}>Carte statique</a>
                            </li>
                        </ul>
                        <div className="flex items-center space-x-4">
                            <DateSelect />
                            <FilterButton align="right" />
                        </div>
                    </div>
                </div>




                </div>

                

                {activeTab === 'dynamique' && (
                    <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "550px", width: "100%", zIndex: 1}}>
                    <TileLayer
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                    />
                    <GeoJSON 
                        data={tunisiaZones} 
                        style={(feature) => {
                            if (feature.properties.gouv_fr === regionName) {
                                return {
                                    color: '#ff0000', // couleur de mise en évidence
                                    weight: 5, // contour plus épais pour la région sélectionnée
                                    fillOpacity: 0, // Pas de remplissage pour la région sélectionnée
                                };
                            } else {
                                return {
                                    color: 'transparent',
                                    weight: 2,
                                    fillOpacity: 0, // Pas de remplissage pour les autres régions
                                };
                            }
                        }}
                        onEachFeature={(feature, layer) => {
                            if (feature.properties && feature.properties.gouv_fr) {
                                layer.bindPopup(feature.properties.gouv_fr);
                            }
                        }}
                    />



                </MapContainer>
                )}

                {activeTab === 'statique' && (
                    <MapContainer 
                    center={center} 
                    zoom={9} 
                    ref={mapRef} 
                    style={{ height: "550px", width: "100%", zIndex: 1}}
                    dragging={false}
                    zoomControl={false}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    touchZoom={false}
                    eventHandlers={{
                        click: () => {}, 
                        dblclick: () => {}, 
                        mousedown: () => {}, 
                        mouseup: () => {}, 
                        mouseover: () => {}, 
                        mouseout: () => {}, 
                        mousemove: () => {}, 
                        contextmenu: () => {}
                    }}>
                    <TileLayer
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                    />
                    <GeoJSON 
                        data={tunisiaZones} 
                        style={(feature) => {
                            if (feature.properties.gouv_fr === regionName) {
                                return {
                                    color: '#ff0000', // couleur de mise en évidence
                                    weight: 5, // contour plus épais pour la région sélectionnée
                                    fillOpacity: 0, // Pas de remplissage pour la région sélectionnée
                                };
                            } else {
                                return {
                                    color: '#4a83ec',
                                    weight: 2,
                                    fillOpacity: 0, // Pas de remplissage pour les autres régions
                                };
                            }
                        }}
                    />

                </MapContainer>
                )}


              </div>

              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CartographieDetail;