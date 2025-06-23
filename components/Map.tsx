"use client";

import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<any>(null);
  const neutralPosition: [number, number] = [20, 0];
  
  // Major tech hubs with custom icons
  const techHubs = [
    { name: "North America", coords: [39.8283, -98.5795] },
    { name: "Europe", coords: [54.5260, 15.2551] },
    { name: "Asia", coords: [34.0479, 100.6197] },
  ];

  useEffect(() => {
    if (mapRef.current && typeof window !== 'undefined') {
      const L = require('leaflet');
      
      techHubs.forEach(hub => {
        const marker = L.circleMarker(hub.coords, {
          radius: 12,
          fillColor: "#3b82f6",
          color: "#1d4ed8",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
          className: "region-marker"
        }).addTo(mapRef.current);
        
        marker.bindTooltip(hub.name, {
          permanent: true,
          direction: 'top',
          className: 'region-tooltip',
          offset: [0, -10]
        });
      });

      // Prevent map from being dragged outside world bounds
      mapRef.current.setMaxBounds([
        [-90, -180],
        [90, 180]
      ]);
    }
  }, []);

  return (
    <div className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 mt-14">
      <div className="relative group">
        <MapContainer
          center={neutralPosition}
          zoom={2}
          minZoom={2}
          maxZoom={4} // Limited zoom to prevent empty spaces
          scrollWheelZoom={true}
          style={{
            height: '450px',
            borderRadius: '1rem',
            zIndex: 10,
          }}
          zoomControl={false}
          attributionControl={false}
          className="seamless-world-map"
          ref={mapRef}
          worldCopyJump={true} // Seamless world wrapping
        >
          {/* Seamless base layer */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            noWrap={false} 
            continuousWorld={true}
          />

          {/* Custom Zoom Controls */}
          <ZoomControl position="bottomright" />

          {/* Subtle watermark */}
          <div className="leaflet-bottom leaflet-left">
            <div className="leaflet-control bg-white/90 px-3 py-1.5 rounded text-xs font-medium text-gray-600 shadow-sm border border-gray-100">
              Worldwide Coverage
            </div>
          </div>
        </MapContainer>

        {/* Info Card */}
        <div className="absolute top-6 left-6 z-[1000] bg-white/95 px-4 py-3 rounded-lg shadow-lg border border-gray-100">
          <h3 className="font-medium text-gray-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Global Presence
          </h3>
          <p className="text-sm text-gray-600 mt-1 max-w-[240px]">
            Serving clients across all continents with flexible engagement models
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;