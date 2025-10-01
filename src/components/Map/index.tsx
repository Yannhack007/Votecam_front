/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';
import 'leaflet-boundary-canvas';
import { Feature1 } from './geoJsonData1/map.interface';
import { Feature2 } from './geoJsonData2/map.interface2';
import { Feature3 } from './geoJsonData3/map.interface3';
import { cameroonGeoJsonData1 } from './geoJsonData1/GeoJsonData1';
import { cameroonGeoJsonData2 } from './geoJsonData2/GeoJsonData2';
import { cameroonGeoJsonData3 } from './geoJsonData3/GeoJsonData3';
import { MapComponentProps } from '@/types/mapComponentProps';
import { ChevronsRight, CircleCheck } from 'lucide-react';
import {
  candidates,
  generalVotingResults,
  votingResultsByRegion,
} from './electiondata';
import { LatLng, Layer } from 'leaflet';
import { formatNumberWithCommas } from '@/helper/formatNumberWithCommas';
import { generateLighterColor } from '@/helper/generateLighterColor';
import TooltipElectionCard from '../ui/electionCard.tsx/tooltipElectionCard';
import { getCandidateById } from '@/helper/manipulateElectionData';
// Define the position and map style
const position: [number, number] = [6.848, 11.502]; // Coordinates for Cameroon
const mapStyle: React.CSSProperties = {
  width: '700px',
  height: '700px',
};

const Map: React.FC<MapComponentProps> = ({
  currentLevel,
  selectedRegion,
  setSelectedRegion,
  selectedDepartment,
  setSelectedDepartment,
  setCurrentLevel,
  currentGeoData,
  setCurrentGeoData,
  handleFilterByDepartment,
  handleBackToDepartments,
  handleBackToRegions,
  handleFilterByRegion,
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [details, setDetails] = useState<string>('');
  const [hoverInfo, setHoverInfo] = useState<{
    region: string | '';
    position: { top: number; left: number } | { top: 0; left: 0 };
  }>({ region: '', position: { top: 0, left: 0 } });

  const defaultStyle = {
    fillColor: '#gray',
    weight: 1,
    opacity: 1,
    color: 'black', // Border color
    fillOpacity: 1, // Adjust transparency of the fill color
  };

  const getStyle = (feature: Feature1 | Feature2 | Feature3) => {
    if (!feature || !feature.properties) {
      return defaultStyle;
    }
    let region: string | '';
    let department: string | '';
    let arrondissement: string | '';

    // Determine the region or area name based on the current level and feature type
    if (currentLevel === 'regions' && 'NAME_1' in feature.properties) {
      region = feature.properties.NAME_1;
      const resultsForRegion =
        votingResultsByRegion.find((result) => result.region === region)
          ?.voteData || [];

      // Determine the color based on the top candidate in the region
      const fillColor =
        resultsForRegion.length > 0
          ? getCandidateById(resultsForRegion[0].candidateId)?.colorCode ||
            '#gray' // Default to gray if no colorCode
          : '#gray'; // Default to gray if no results

      return {
        fillColor: fillColor,
        weight: 1,
        opacity: 1,
        color: 'black', // Border color
        //dashArray: '3',
        fillOpacity: 1, // Adjust transparency of the fill color
      };
    } else if (
      currentLevel === 'departments' &&
      'NAME_2' in feature.properties
    ) {
      department = feature.properties.NAME_2;
    } else if (
      currentLevel === 'arrondissements' &&
      'NAME_3' in feature.properties
    ) {
      arrondissement = feature.properties.NAME_3;
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

  const handleMapCreated = (mapInstance: L.Map) => {
    mapRef.current = mapInstance;
  };
 const onEachFeature = useCallback(
   (feature: Feature1 | Feature2 | Feature3, layer : Layer) => {
     if (currentLevel === 'regions') {
       layer.on('click', () => handleFilterByRegion(feature.properties.NAME_1));
     } else if (currentLevel === 'departments') {
       layer.on('click', () =>
         handleFilterByDepartment(feature.properties.NAME_1)
       );
     } else if (currentLevel === 'arrondissements') {
       layer.bindPopup(`<b>${feature.properties.NAME_3}</b>`);
     }

     // Event handling for mouse interactions
     layer.on({
       mouseover: (e) => {
         const regionName = feature.properties.NAME_1;
         const { x, y } = e.originalEvent;
         const mapWidth = e.target._map.getSize().x;
         const mapHeight = e.target._map.getSize().y;

         const position = getTooltipPosition(x, y, mapWidth, mapHeight);
         setHoverInfo({
           region: regionName,
           position: position,
         });
       },
       mousemove: (e) => {
         const { x, y } = e.originalEvent;
         const mapWidth = e.target._map.getSize().x;
         const mapHeight = e.target._map.getSize().y;

         const position = getTooltipPosition(x, y, mapWidth, mapHeight);
         setHoverInfo((prev) => ({
           ...prev,
           position: position,
         }));
       },
       mouseout: () => {
         setHoverInfo({ region: '', position: { top: 0, left: 0 } });
       },
     });
   },
   [currentLevel, handleFilterByRegion, handleFilterByDepartment, setHoverInfo]
 );

  const getTooltipPosition = (mouseX:number, mouseY:number, mapWidth:number, mapHeight:number) => {
    // Define boundaries
    console.log(mapWidth + 'mapwidth' , mapHeight + 'mapheight')
    const buffer = 30; // Distance from edges to adjust the tooltip

    // Determine the position based on mouseX and mouseY relative to map bounds
    let position = { top: mouseY, left: mouseX };

    if (mouseX < buffer) {
      position.left = 0; // Tooltip will be to the right
    } else if (mouseX > mapWidth - buffer) {
      position.left = mouseX + 20; // Tooltip will be to the left
    }

    if (mouseY < buffer) {
      position.top = 0; // Tooltip will be below
    } else if (mouseY > mapHeight - buffer) {
      position.top = mapHeight - 230; // Tooltip will be above
    }

    return position;
  };

  useEffect(() => {
    if (mapRef.current && currentGeoData) {
      const geoJsonLayer = L.geoJSON(currentGeoData);
      mapRef.current.fitBounds(geoJsonLayer.getBounds());
    }
  }, [currentGeoData]);

  return (
    <div>
      <div className="">
        <h1>{details}</h1>
        <div className="my-3">
          {currentLevel === 'departments' && (
            <button
              className="paragraph-medium-regular underline text-customBlack-500 hover:text-customBlack-300 transition"
              onClick={handleBackToRegions}
            >
              {selectedRegion !== '' && 'Afficher toutes les régions'}
            </button>
          )}
          {currentLevel === 'arrondissements' && (
            <div className="flex items-center gap-1">
              <button
                className="paragraph-medium-regular underline text-customBlack-500 hover:text-customBlack-300 transition"
                onClick={handleBackToRegions}
              >
                Afficher toutes les régions
              </button>
              <ChevronsRight />
              <button
                onClick={handleBackToDepartments}
                className="paragraph-medium-regular underline text-customBlack-500 hover:text-customBlack-300 transition"
              >
                Retour au département
              </button>
            </div>
          )}
        </div>

        <MapContainer
          center={position}
          zoom={6}
          style={mapStyle}
          ref={mapRef}
         // whenCreated={handleMapCreated}
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
            // onEachFeature={(feature, layer) => {
            //   if (currentLevel === 'regions') {
            //     layer.on('click', () =>
            //       handleFilterByRegion(
            //         (feature.properties as Feature1['properties']).NAME_1
            //       )
            //     );
            //   } else if (currentLevel === 'departments') {
            //     layer.on('click', () =>
            //       handleFilterByDepartment(
            //         (feature.properties as Feature2['properties']).NAME_2
            //       )
            //     );
            //   } else if (currentLevel === 'arrondissements') {
            //     layer.bindPopup(
            //       `<b>${
            //         (feature.properties as Feature3['properties']).NAME_3
            //       }</b>`
            //     );
            //   }

            //   layer.on({
            //     mouseover: (e) => {
            //       const regionName = feature.properties.NAME_1;
            //       // Get the mouse position
            //       const { x, y } = e.originalEvent;
            //       const mapWidth = e.target._map.getSize().x;
            //       const mapHeight = e.target._map.getSize().y;

            //       const position = getTooltipPosition(
            //         x,
            //         y,
            //         mapWidth,
            //         mapHeight
            //       );
            //       setHoverInfo({
            //         region: regionName,
            //         position: position,
            //       });
            //     },
            //     mousemove: (e) => {
            //       const { x, y } = e.originalEvent;
            //       const mapWidth = e.target._map.getSize().x;
            //       const mapHeight = e.target._map.getSize().y;

            //       const position = getTooltipPosition(
            //         x,
            //         y,
            //         mapWidth,
            //         mapHeight
            //       );
            //       setHoverInfo((prev) => ({
            //         ...prev,
            //         position: position,
            //       }));
            //     },
            //     mouseout: () => {
            //       setHoverInfo({ region: '', position: { top: 0, left: 0 } });
            //     },
            //   });
            // }}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>

      {hoverInfo.position && hoverInfo.region && (
        <TooltipElectionCard
          hoverInfo={hoverInfo}
          setHoverInfo={setHoverInfo}
        />
      )}
    </div>
  );
};

export default Map;
