/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Header from '@/components/Header';
import Map from '@/components/Map';
import React, { useState, useEffect } from 'react';
import ElectionCard from '@/components/ui/electionCard.tsx';
import { GeoJsonObject } from 'geojson';
import { cameroonGeoJsonData1 } from '@/components/Map/geoJsonData1/GeoJsonData1';
import { cameroonGeoJsonData2 } from '@/components/Map/geoJsonData2/GeoJsonData2';
import { cameroonGeoJsonData3 } from '@/components/Map/geoJsonData3/GeoJsonData3';
export default function Home() {
  const [currentLevel, setCurrentLevel] = useState<
    'regions' | 'departments' | 'arrondissements'
  >('regions');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [currentGeoData, setCurrentGeoData] =
    useState<GeoJsonObject>(cameroonGeoJsonData1);

  // Handle click to transition to departments
  const handleFilterByRegion = (regionName: string) => {
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
  const handleFilterByDepartment = (departmentName: string) => {
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
    setSelectedDepartment('');
  };

    //Navigate back to regions
    const handleBackToRegions = () => {
      setCurrentGeoData(cameroonGeoJsonData1);
      setCurrentLevel('regions');
      setSelectedRegion('');
      setSelectedDepartment("");
    };

    

  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-12 h-full main-layout-body text-customBlack-500">
        <h4 className="h4-custom-bold text-center ">
          Cameroun 2025 : Résultats de L&apos;Élection Présidentielle en Direct
          {/* Cameroon 2025: Live Presidential Election Results */}
        </h4>
        <section className="flex gap-12">
          <ElectionCard
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            currentGeoData={currentGeoData}
            setCurrentGeoData={setCurrentGeoData}
            handleFilterByDepartment={handleFilterByDepartment}
            handleBackToDepartments={handleBackToDepartments}
            handleBackToRegions={handleBackToRegions}
            handleFilterByRegion={handleFilterByRegion}
          />
          <Map
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            currentGeoData={currentGeoData}
            setCurrentGeoData={setCurrentGeoData}
            handleFilterByDepartment={handleFilterByDepartment}
            handleBackToDepartments={handleBackToDepartments}
            handleBackToRegions={handleBackToRegions}
            handleFilterByRegion={handleFilterByRegion}
          />
        </section>
      </main>
    </>
  );
}
