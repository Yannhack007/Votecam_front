/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-boundary-canvas';
import { Feature1 } from './geoJsonData1/map.interface';
import { Feature2 } from './geoJsonData2/map.interface2';
import { Feature3 } from './geoJsonData3/map.interface3';
import { GeoJsonObject1 } from './geoJsonData1/map.interface';
import { GeoJsonObject2 } from './geoJsonData2/map.interface2';
import { GeoJsonObject3 } from './geoJsonData3/map.interface3';
import geoJsonData1 from './geoJsonData1/gadmCMR.json';
import geoJsonData2 from './geoJsonData2/gadm41_CMR_2.json';
import geoJsonData3 from './geoJsonData3/gadm41_CMR_3.json';
import { cameroonGeoJsonData1 } from './geoJsonData1/GeoJsonData1';
import { cameroonGeoJsonData2 } from './geoJsonData2/GeoJsonData2';
import { cameroonGeoJsonData3 } from './geoJsonData3/GeoJsonData3';
import { MapComponentProps } from '@/types/mapComponentProps';

// Define the position and map style
const position: [number, number] = [6.848, 11.502]; // Coordinates for Cameroon
const mapStyle: React.CSSProperties = {
  width: '700px',
  height: '700px',
};

const politicalCandidates = [
  {
    candidateName: 'Joshua',
    politicalParty: 'CPDM',
    colorCode: '#ff0000',
    candidatePhoto: '',
  },
];

const electionVotes = {
  Centre: {
    CPDM: 50000,
    percentage: 12000,
  },
};

// Map component
const Map: React.FC<MapComponentProps> = ({
  currentLevel,
  selectedRegion,
  setSelectedRegion,
  selectedDepartment,
  setSelectedDepartment,
  setCurrentLevel,
  currentGeoData,
  setCurrentGeoData,
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [details, setDetails] = useState<string>('');

  const getStyle = () => {
    switch (currentLevel) {
      case 'regions':
        return { color: 'blue', weight: 2 };
      case 'departments':
        return { color: 'green', weight: 2 };
      case 'arrondissements':
        return { color: 'red', weight: 2 };
      default:
        return { color: 'black', weight: 1 };
    }
  };

  const onMapReady = (map: L.Map) => {
    mapRef.current = map; // Set the map reference

    // Tile layer with boundary canvas
    const osm = L.TileLayer.boundaryCanvas(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        boundary: cameroonGeoJsonData1, // Use the boundary GeoJSON data for tile clipping
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      }
    );
    osm.addTo(map);

    // Add GeoJSON data directly to the map
    const geoJsonLayer = L.geoJSON(cameroonGeoJsonData1, {
      // style: style,
      //onEachFeature: onEachFeature,
    }).addTo(map);

    // Fit the map bounds to the GeoJSON data
    map.fitBounds(geoJsonLayer.getBounds());
  };

  // Handle click to transition to departments
  const handleRegionClick = (regionName: string) => {
    console.log(regionName + ' clicked');
    const filteredDepartments = {
      ...cameroonGeoJsonData2,
      features: cameroonGeoJsonData2.features.filter(
        (feature) => feature.properties.NAME_1 === regionName
      ),
    };
    console.log(
      'region and their department: ' + regionName + '=' + filteredDepartments
    );
    setCurrentGeoData(filteredDepartments);
    setCurrentLevel('departments');
    setSelectedRegion(regionName);
  };

  // Handle click to transition to arrondissements
  const handleDepartmentClick = (departmentName: string) => {
    const filteredArrondissements = {
      ...cameroonGeoJsonData3,
      features: cameroonGeoJsonData3.features.filter(
        (feature) => feature.properties.NAME_2 === departmentName
      ),
    };
    console.log(
      'department and their arrondissement:' +
        departmentName +
        '=' +
        filteredArrondissements
    );
    setCurrentGeoData(filteredArrondissements);
    setCurrentLevel('arrondissements');
    setSelectedDepartment(departmentName);
  };

  //Navigate back to regions
  const handleBackToRegions = () => {
    setCurrentGeoData(cameroonGeoJsonData1);
    setCurrentLevel('regions');
    setSelectedRegion(null);
    setSelectedDepartment(null);
  };

  // Navigate back to departments
  const handleBackToDepartments = () => {
    const filteredDepartments = {
      ...cameroonGeoJsonData2,
      features: cameroonGeoJsonData2.features.filter(
        (feature) => feature.properties.NAME_1 === selectedRegion
      ),
    };
    setCurrentGeoData(filteredDepartments);
    setCurrentLevel('departments');
    setSelectedDepartment(null);
  };

  useEffect(() => {
    console.log(currentGeoData, 'currentGeoData');
  }, [currentGeoData]);

  const handleRegionHover = (e: L.LeafletEvent) => {
    const regionName = e.target.feature.properties?.NAME_1 || 'Unknown region';
    setHoveredRegion(regionName);
  };

  // Handle hover out event
  const handleRegionOut = () => {
    setHoveredRegion(null);
  };

  useEffect(() => {
    if (mapRef.current && currentGeoData) {
      const geoJsonLayer = L.geoJSON(currentGeoData);
      mapRef.current.fitBounds(geoJsonLayer.getBounds());
    }
  }, [currentGeoData]);

  return (
    <div>
      <div>
        <h1>{details}</h1>
        <div>
          {currentLevel === 'departments' && (
            <button onClick={handleBackToRegions}>Back to Regions</button>
          )}
          {currentLevel === 'arrondissements' && (
            <>
              <button onClick={handleBackToDepartments}>
                Back to Departments
              </button>
              <button onClick={handleBackToRegions}>Back to Regions</button>
            </>
          )}
        </div>

        <MapContainer
          center={position}
          zoom={6}
          style={mapStyle}
          ref={mapRef}
          //whenReady={setMap}
          // whenReady={onMapReady}
          // whenReady={(e) => onMapReady(e.target)}
          minZoom={3}
        >
          {' '}
          <GeoJSON
            key={JSON.stringify(currentGeoData)} // Ensure a new instance is created on data change
            data={currentGeoData}
            style={getStyle}
            onEachFeature={(feature, layer) => {
              if (currentLevel === 'regions') {
                layer.on('click', () =>
                  handleRegionClick(
                    (feature.properties as Feature1['properties']).NAME_1
                  )
                );
              } else if (currentLevel === 'departments') {
                layer.on('click', () =>
                  handleDepartmentClick(
                    (feature.properties as Feature2['properties']).NAME_2
                  )
                );
              } else if (currentLevel === 'arrondissements') {
                layer.bindPopup(
                  `<b>${
                    (feature.properties as Feature3['properties']).NAME_3
                  }</b>`
                );
              }
            }}
          />
        </MapContainer>
      </div>

      {/* Hovered region details */}
      {hoveredRegion && (
        <div className="bg-black text-white w-full h-full w- text-center">
          <p>{`Hovered over: ${hoveredRegion}`}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
