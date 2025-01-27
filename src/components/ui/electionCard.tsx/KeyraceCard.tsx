/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircleCheck } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import {
  displayData,
  getCandidateById,
  getColorCodeToDisplay,
  reportingPercentange,
} from '@/helper/manipulateElectionData';
import { generalVotingResults } from '@/components/Map/electiondata';
import { formatNumberWithCommas } from '@/helper/formatNumberWithCommas';
const KeyraceCard = () => {
  const keyRacesResults = [
    {
      region: 'Centre',
      reportingPercentage: 60,
      voteData: [
        { candidateId: 1, votes: 2000000, votePercentage: '30%' },
        { candidateId: 3, votes: 1000000, votePercentage: '15%' },
        { candidateId: 2, votes: 500000, votePercentage: '25%' },
        { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      ],
    },

    {
      region: 'Littoral',
      reportingPercentage: 20,
      voteData: [
        { candidateId: 3, votes: 1000000, votePercentage: '15%' },
        { candidateId: 2, votes: 500000, votePercentage: '25%' },
        { candidateId: 4, votes: 1560000, votePercentage: '20%' },
        { candidateId: 1, votes: 2000000, votePercentage: '30%' },
      ],
    },
    {
      region: 'Nord',
      reportingPercentage: 60,
      voteData: [
        { candidateId: 4, votes: 1560000, votePercentage: '20%' },
        { candidateId: 2, votes: 500000, votePercentage: '25%' },
        { candidateId: 3, votes: 1000000, votePercentage: '15%' },
        { candidateId: 1, votes: 2000000, votePercentage: '30%' },
      ],
    },
  ];

  return (
    <div className="flex justify-between w-full gap-8">
      {keyRacesResults.map((result, index) => (
        <div key={index} className="w-full shadow-md rounded-md">
          <div
            style={{
              backgroundColor: getColorCodeToDisplay(result.region),
            }}
            className="rounded-t-md px-4 py-2 flex flex-col gap-1"
          >
            <p className="h6-custom-medium text-white">
              {result.region
                ? `Résultats du ${result.region && result.region}`
                : 'Résultats Nationaux'}
            </p>
            <p className="paragraph-medium2-medium text-white">
              Est.{' '}
              <span className="font-bold">
                {' '}
                {reportingPercentange(result.region)}%{' '}
              </span>{' '}
              de bureaux de vote déclarants
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
              {result.voteData.map((voteData, index) => {
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
      ))}
    </div>
  );
};

export default KeyraceCard;
