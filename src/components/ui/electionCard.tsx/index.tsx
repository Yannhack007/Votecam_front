/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';

import { MapComponentProps } from '@/types/mapComponentProps';
import { CircleCheckBig, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { formatNumberWithCommas } from '@/helper/formatNumberWithCommas';
import Regions_data from '@/components/Map/region_data.json';
import { ComboboxDemo } from '../combobox';
import { cameroonGeoJsonData1 } from '@/components/Map/geoJsonData1/GeoJsonData1';
import { candidates } from '@/components/Map/electiondata';
import {
  generalVotingResults,
  votingResultsByRegion,
} from '@/components/Map/electiondata';
import {
  displayData,
  getColorCodeToDisplay,
  reportingPercentange,
} from '@/helper/manipulateElectionData';

const ElectionCard: React.FC<MapComponentProps> = ({
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
  const handleDropdownSelectRegion: React.Dispatch<
    React.SetStateAction<string>
  > = (value) => {
    if (typeof value === 'string') {
      setSelectedRegion(value); // Update the region
      if (value) {
        handleFilterByRegion(value); // Trigger additional behavior
      } else if (value === '') {
        setCurrentGeoData(cameroonGeoJsonData1);
      }
    }
  };

  function getCandidateById(id: number) {
    return candidates.find((candidate) => candidate.id === id);
  }

  const displayDataForComponent = selectedRegion
    ? displayData(selectedRegion)
    : generalVotingResults[0].voteData;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <p className="paragraph-medium2-medium text-customBlack-500">
          Filtrer par:{' '}
        </p>
        <ComboboxDemo
          dropdownData={Regions_data}
          setDropdownValue={handleDropdownSelectRegion}
          dropdownValue={selectedRegion}
          error={''}
          type="région"
        />
      </div>
      <div className="w-[492px] shadow-md rounded-md">
        <div
          style={{
            backgroundColor: getColorCodeToDisplay(selectedRegion),
          }}
          className="rounded-t-md px-4 py-2 flex flex-col gap-1"
        >
          <p className="h6-custom-medium text-white">
            {selectedRegion
              ? `Résultats du ${selectedRegion && selectedRegion}`
              : 'Résultats Nationaux'}
          </p>
          <p className="paragraph-medium2-medium text-white">
            Est.{' '}
            <span className="font-bold">
              {' '}
              {reportingPercentange(selectedRegion && selectedRegion)}%{' '}
            </span>{' '}
            {selectedRegion !== ''
              ? 'de bureaux de vote déclarants'
              : 'de centres de vote déclarants'}{' '}
          </p>
        </div>
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full border-b border-b-customGrey-100">
              <th className="w-[45%] px-4 py-2 text-start paragraph-medium2-medium text-customBlack-500">
                Candidat
              </th>
              <th className="w-[35%] text-center px-3  py-2 paragraph-medium2-medium text-customBlack-500">
                Décompte des Votes
              </th>
              <th className="w[20%] px-4 py-2 text-end paragraph-medium2-medium text-customBlack-500">
                % Vote
              </th>
            </tr>
          </thead>
          <tbody>
            {displayDataForComponent.map((voteData, index) => {
              const candidate = getCandidateById(voteData.candidateId);
              return (
                <tr
                  key={candidate?.id}
                  className="h-[78px] border-b border-b-customGrey100"
                >
                  <td className="h-full m-0 p-0">
                    <div className="h-full p-0 m-0 flex items-center gap-3">
                      <div
                        className={`h-[78px] w-2`}
                        style={{ backgroundColor: candidate?.colorCode }}
                      />
                      <div
                        className={` flex items-center justify-center h-[50px] w-[50px] z-50 rounded-full`}
                        style={{ backgroundColor: candidate?.colorCode }}
                      >
                        <Image
                          src={candidate?.imageSource || ''}
                          alt="candidate pic"
                          width={50}
                          height={50}
                          className="object-cover object-center w-[50px] h-[50px] rounded-full"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <div className="flex gap-1 items-center">
                          <p className="paragraph-medium-bold text-customBlack-500">
                            {candidate?.name}
                          </p>
                          {index === 0 && (
                            <CircleCheck
                              size={26}
                              fill={candidate?.colorCode}
                              color="white"
                            />
                          )}
                        </div>
                        <p className="paragraph-medium2-medium text-customBlack-300">
                          {candidate?.partyAbbreviation_fr}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 text-center paragraph-medium-bold py-2">
                    {formatNumberWithCommas(voteData.votes)}
                  </td>
                  <td className="bpx-4 py-2 text-center paragraph-medium-bold">
                    {voteData.votePercentage}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ElectionCard;
