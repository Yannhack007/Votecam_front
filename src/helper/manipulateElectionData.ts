import {
  candidates,
  votingResultsByRegion,
} from '@/components/Map/electiondata';

export const displayData = (region: string) =>
  region
    ? votingResultsByRegion.find((result) => result.region === region)
        ?.voteData || []
    : [];

export const reportingPercentange = (region: string) =>
  region
    ? votingResultsByRegion.find((result) => result.region === region)
        ?.reportingPercentage || []
    : 0;

export function getCandidateById(id: number) {
  return candidates.find((candidate) => candidate.id === id);
}

export const getColorCodeToDisplay = (region: string) =>
  region && region !== ''
    ? getCandidateById(displayData(region)[0].candidateId)?.colorCode
    : '#007A5E';
