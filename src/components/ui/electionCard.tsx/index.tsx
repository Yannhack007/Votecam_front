/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import FilterMapMenu from './filterMapMenu';
import { MapComponentProps } from '@/types/mapComponentProps';
import { CircleCheckBig, CircleCheck } from 'lucide-react';
import Image from 'next/image';

const ElectionCard: React.FC<MapComponentProps> = ({
  currentLevel,
  selectedRegion,
  setSelectedRegion,
  selectedDepartment,
  setSelectedDepartment,
  setCurrentLevel,
  currentGeoData,
  setCurrentGeoData,
}) => {
  const politicalCandidates = [
    {
      region: 'Adamoua',
      voteData: [{
        candidateImageSource: '',
        candidateName: '',
        politicalPartyAbbrev_en: '',
        politicalPartyAbbrev_fr: '',
        politicalParty: '',
        votes: '',
        votePercentage: '',
      }],
    },
  ];
  return (
    <section className="flex flex-col gap-6">
      <FilterMapMenu />
      <div className="w-[492px] h-[444px] shadow-md rounded-md">
        <div className="bg-secondaryGreen-400 rounded-t-md px-4 py-2 flex flex-col gap-1">
          <p className="h6-custom-medium text-white">Nation Wide Results</p>
          <p className="paragraph-medium2-medium text-white">
            Est. <span className="font-bold"> 88% </span>Reporting Polling
            Stations
          </p>
        </div>
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full border-b border-b-customGrey-100">
              <th className="w-[45%] px-4 py-2 text-start paragraph-medium2-medium text-customBlack-500">
                Candidate
              </th>
              <th className="w-[35%] text-center px-3  py-2 paragraph-medium2-medium text-customBlack-500">
                Vote Count
              </th>
              <th className="w[20%] px-4 py-2 text-end paragraph-medium2-medium text-customBlack-500">
                Vote %
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[78px] border-b border-b-customGrey100">
              <td className="h-full m-0 p-0">
                <div className="h-full p-0 m-0 flex items-center gap-3">
                  <div className="h-[78px] bg-blue-700 w-2" />
                  <div className="bg-blue-700 flex items-center justify-center h-[50px] w-[50px] z-50 rounded-full">
                    <Image
                      src="/images/trumpf.png"
                      alt="candidate pic"
                      width={50}
                      height={50}
                      className="object-cover object-center w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-center">
                      <p className="paragraph-medium-bold text-customBlack-500">
                        Kamga Fotso
                      </p>
                      <CircleCheck size={26} fill="#1d48de" color="white" />
                    </div>
                    <p className="paragraph-medium2-medium text-customBlack-300">
                      CPDM
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-3 text-center paragraph-medium-bold py-2">
                1,200,000{' '}
              </td>
              <td className="bpx-4 py-2 text-center paragraph-medium-bold">
                {' '}
                60%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ElectionCard;
