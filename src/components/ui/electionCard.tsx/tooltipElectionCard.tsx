/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { formatNumberWithCommas } from '@/helper/formatNumberWithCommas';
import { CircleCheck } from 'lucide-react';
import { generateLighterColor } from '@/helper/generateLighterColor';
import {
  displayData,
  getCandidateById,
  reportingPercentange,
} from '@/helper/manipulateElectionData';

interface HoverInfo {
  region: string | '';
  position: { top: number; left: number } | { top: 0; left: 0 };
}

interface TooltipProps {
  hoverInfo: HoverInfo;
  setHoverInfo: React.Dispatch<React.SetStateAction<HoverInfo>>;
}
const TooltipElectionCard: React.FC<TooltipProps> = ({
  hoverInfo,
  setHoverInfo,
}) => {
  if (!hoverInfo.region) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: hoverInfo?.position.top,
        left: hoverInfo?.position.left,
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        pointerEvents: 'none', // Prevent the card from interfering with mouse events
        zIndex: 1000,
      }}
    >
      <div className="rounded-t-md px-4 py-2 flex flex-col gap-0">
        <p className="paragraph-medium-bold text-customBlack-500">
          {hoverInfo.region}
        </p>
        <p className="paragraph-small-medium text-customBlack-300">
          Est.{' '}
          <span className="font-bold">
            {' '}
            {reportingPercentange(hoverInfo.region)}%{' '}
          </span>{' '}
          de bureaux de vote déclarants{' '}
        </p>
      </div>
      <table className="w-full">
        <thead className="w-full">
          <tr className="w-full border-b border-b-customGrey-100">
            <th className="w-[40%] px-4 py-2 text-start paragraph-small-medium text-customBlack-500">
              Candidat
            </th>
            <th className="w-[40%] text-center px-3  py-2 paragraph-small-medium text-customBlack-500">
              Décompte des Votes
            </th>
            <th className="w[20%] px-4 py-2 text-end paragraph-small-medium text-customBlack-500">
              % Vote
            </th>
          </tr>
        </thead>
        <tbody>
          {displayData(hoverInfo.region).map((voteData, index) => {
            const candidate = getCandidateById(voteData.candidateId);
            return (
              <tr
                key={candidate?.id}
                style={{
                  backgroundColor:
                    index === 0
                      ? generateLighterColor(
                          candidate?.colorCode ?? '#ffffff',
                          0.4
                        )
                      : 'transparent',
                }}
                className="h-[48px] border-b border-b-customGrey100 m-0 p-0"
              >
                <td className="h-full m-0 p-0">
                  <div className="h-full p-0 m-0 flex items-center gap-3">
                    <div
                      className={`h-[48px] w-2 p-0 m-0`}
                      style={{ backgroundColor: candidate?.colorCode }}
                    />
                    <div className="flex flex-col ">
                      <div className="flex gap-1 items-center">
                        <p className="paragraph-small-bold text-customBlack-500 font-bold">
                          {candidate?.name}
                        </p>
                        {index === 0 && (
                          <CircleCheck
                            size={24}
                            fill={candidate?.colorCode}
                            color="white"
                          />
                        )}
                      </div>
                      <p className="paragraph-small-medium text-customBlack-300">
                        {candidate?.partyAbbreviation_fr}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-3 text-center text-customBlack-500 paragraph-small-semibold py-2">
                  {formatNumberWithCommas(voteData.votes)}
                </td>
                <td className="px-4 py-2 text-customBlack-500 text-center paragraph-small-semibold">
                  {voteData.votePercentage}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TooltipElectionCard;
