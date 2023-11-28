import React, { useState, useRef ,useEffect} from 'react';
import { useNavigate , Routes, Route } from 'react-router-dom';
import axios from 'axios';
import L from 'leaflet';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';
import { MapContainer, TileLayer, GeoJSON, Popup ,Circle,Marker} from 'react-leaflet';
import osm from "./../providers/osm-providers";

import 'leaflet/dist/leaflet.css';
import tunisiaZones from './../data/TN-delegations.json';
import zoneArisqueTunis from './../data/zoneArisqueTunis.json';


function Alert() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [center, setCenter] = useState({ lat: 36.8065, lng: 10.1815 });
    const ZOOM_LEVEL = 12;
    const navigate = useNavigate(); // Utilisez le hook useNavigate
    const [data, setData] = useState(null);
    const [risk, setRisk] = useState(false);
    const mapRef = useRef();
    const [events, setEvents] = useState([]);


    useEffect(() => {
        // Récupération des données de l'API
        fetch("https://www.infoclimat.fr/public-api/gfs/json?_ll=36.833333,10.233333&_auth=BR8AF1QqByVRfAQzD3lQeVI6BDEJfwkuCnYGYlgzUC0JYgdgA2MDYl8zUzJVelF6VGYDYwsqV21TMwNnDWMCYgVlAHtUKAdjUT4EYQ8%2BUGFSfgR7CSsJMAp2Bn5YPVAzCXQHYQNhA2RfLlMyVW1Re1RmA2sLNldwUy8DZQ1mAmgFYwBkVDEHZ1E%2FBGAPOlB7Un4EYgkzCTEKYQZoWD1QOglvB2oDaANgXzZTNVVtUXtUbgNgCzxXalMwA2ANYAJiBXkAe1ROBxZRIwQmD31QMVInBHkJYwlvCj0%3D&_c=6f8a1558ed10a8ec21d6cb03a92e20bf")
        .then(response => response.json())
        .then(data => {
            setData(data);
            // Analyse des prévisions pour les 2 prochains jours
            let riskDetected = false;
            for (let key in data) {
                if (new Date(key) <= new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)) {
                    if (data[key]['pluie'] > 20) {
                        riskDetected = true;
                        break;
                    }
                }
            }
            console.log("Risk detected:", riskDetected);

            setRisk(true);
        });
    }, []);

    const customIcon = new L.DivIcon({
        className: 'custom-icon',
        iconSize: [30, 30], // Vous pouvez ajuster la taille ici
        html: `
        <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path class="fill-current text-slate-500" d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="stroke-current text-slate-100" d="M12 9v4"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="stroke-current text-slate-100" d="M12 17h.01"></path></svg>        `
    });
    

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:5000/getEventAlert');
            setEvents(response.data);
          } catch (err) {
            console.error("Error fetching data", err);
          }
        }
        fetchData();
    }, []);

    
    const onEachFeature = (feature, layer) => {
        if (risk && feature.properties.gouv_fr === "Ben Arous") {
            layer.setStyle({
                fillColor: "transparent", // Pas de couleur de remplissage
                weight: 2,                // Épaisseur de la bordure
                opacity: 1,
                color: 'transparent',            // Couleur de la bordure
                fillOpacity: 0.6
            });
            
            // // Ajout d'un Popup avec des informations de l'API
            // const forecast = data["2023-09-19 00:00:00"];
            // layer.bindPopup(`
            //     <strong>Prévisions pour Tunis:</strong><br>
            // `);
        } else {
            // Style par défaut pour les autres zones
            layer.setStyle({
                fillColor: "transparent",
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.6
            });
        }
    }

     // Convertir zoneArisqueTunis en format GeoJSON
     const dataToGeoJSON = zoneArisqueTunis.map(item => ({
        type: "Feature",
        properties: { FID: item.FID },
        geometry: {
            type: "Point",
            coordinates: [item.x, item.y]
        }
    }));

    const geoJSONData = {
        type: "FeatureCollection",
        features: dataToGeoJSON
    };
    

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
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    {/* Title */}
                                    <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Alerte Météo à Tunis</h1>
                                    <p className="dark:text-indigo-200">Consultez les prévisions météorologiques et les risques d'inondation pour les prochains jours.</p>
                                    <p className="dark:text-indigo-200">Aucune alerte innondation prévu</p>
                                </div>
                                <Datepicker align="right" />
                            </div>
                            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "700px", width: "100%", zIndex: 1  }}>
                                <TileLayer
                                    url={osm.maptiler.url}
                                    attribution={osm.maptiler.attribution}
                                />
                                {risk && <GeoJSON data={tunisiaZones} onEachFeature={onEachFeature} />}
                                
                                {geoJSONData.features.map((feature, index) => (
                                    <Circle
                                        key={index}
                                        center={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                                        fillColor="transparent"
                                        color="red"
                                        radius={200} 
                                        stroke={true}
                                        weight={2} 
                                        fillOpacity={0}
                                    >
                                        <Popup>Zone à risques</Popup>
                                    </Circle>
                                ))}

                                {events.map(event => (
                                    <Marker 
                                        key={event.id} 
                                        position={[parseFloat(event.lat), parseFloat(event.long)]} 
                                        icon={customIcon}>
                                            
                                        <Popup>{event.type_event}</Popup>
                                    
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </main>
    </div>
        </div>
    );
    }

export default Alert;