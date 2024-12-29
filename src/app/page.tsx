/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Header from '@/components/Header';
import Map from '@/components/Map';
import React, { useState, useEffect } from 'react';
import ElectionCard from '@/components/ui/electionCard.tsx';
import { GeoJsonObject } from 'geojson';
import { cameroonGeoJsonData1 } from '@/components/Map/geoJsonData1/GeoJsonData1';
export default function Home() {
  const [currentLevel, setCurrentLevel] = useState<
    'regions' | 'departments' | 'arrondissements'
  >('regions');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [currentGeoData, setCurrentGeoData] =
    useState<GeoJsonObject>(cameroonGeoJsonData1);
  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-12 h-full main-layout-body text-customBlack-500">
        <h4 className="h4-custom-bold text-center ">
          Cameroon 2025: Live Presidential Election Results
        </h4>
        <section className="flex items-center gap-12">
          <ElectionCard
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            currentGeoData={currentGeoData}
            setCurrentGeoData={setCurrentGeoData}
          />
          {/* <Map
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            currentGeoData={currentGeoData}
            setCurrentGeoData={setCurrentGeoData}
          /> */}
        </section>
      </main>
    </>
  );
}
