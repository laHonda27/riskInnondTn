import React, { useState, useRef } from 'react';
import { useNavigate , Routes, Route } from 'react-router-dom';

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




function Cartographie() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [center, setCenter] = useState({ lat: 33.8869, lng: 9.5375 });
    const ZOOM_LEVEL = 7;
    const mapRef = useRef();
    const navigate = useNavigate(); // Utilisez le hook useNavigate



    return (
        <div className="flex h-[100dvh] overflow-hidden">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/* Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="grow">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Page content */}
                <div className="mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                  {/* Content */}
                  <div style={{ flex: 2 }}>
                    <div>
                      <header className="mb-4">
                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Cartographie</h1>
                        <p className="dark:text-indigo-200">Choisissez la zone désirée</p>
                      </header>
                    </div>
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "700px", width: "100%", zIndex: 1 }}>
                          <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                          />
                          <GeoJSON 
                            data={tunisiaZones} 
                            style={() => ({
                              color: '#4a83ec',
                              weight: 2,
                              fillColor: "#1a1d62",
                              fillOpacity: 0.6,
                            })}
                            onEachFeature={(feature, layer) => {
                                if (feature.properties && feature.properties.gouv_fr) {
                                    layer.bindPopup(feature.properties.gouv_fr);
                                    layer.on('click', () => {
                                        const regionName = feature.properties.gouv_fr;
                                        const regionCenter = layer.getBounds().getCenter();
                                        navigate(`/cartographie/${regionName}?lat=${regionCenter.lat}&lng=${regionCenter.lng}`);
                                    });
                                                                    }
                            }}
                            
                          />
                        </MapContainer>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
}

export default Cartographie;


