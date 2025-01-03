/* eslint-disable @typescript-eslint/no-unused-vars */
const randomVoteData1 = [
  { candidateId: 1, votes: 120000, votePercentage: '30%' },
  { candidateId: 2, votes: 80000, votePercentage: '25%' },
  { candidateId: 3, votes: 50000, votePercentage: '15%' },
  { candidateId: 4, votes: 70000, votePercentage: '20%' },
];
const randomVoteData2 = [
  { candidateId: 4, votes: 200000, votePercentage: '30%' },
  { candidateId: 1, votes: 500000, votePercentage: '30%' },
  { candidateId: 2, votes: 300000, votePercentage: '25%' },
  { candidateId: 3, votes: 150000, votePercentage: '20%' },
  ,
];

export const candidates = [
  {
    id: 1,
    name: 'Paul Biya',
    imageSource: '/images/paulbiya.png',
    partyAbbreviation_en: 'CPDM',
    partyAbbreviation_fr: 'RDPC',
    party: "Cameroon People's Democratic Movement",
    colorCode: '#37A8FA',
  },
  {
    id: 2,
    name: 'Maigari Bello',
    imageSource: '/images/bello.png',
    partyAbbreviation_en: 'NUDP',
    partyAbbreviation_fr: 'UNDP',
    party: 'National Union for Democracy and Progress',
    colorCode: '#40B749',
  },
  {
    id: 3,
    name: 'Paul Kamga',
    imageSource: '/images/paul2.png',
    partyAbbreviation_en: 'SDF',
    partyAbbreviation_fr: 'FSD',
    party: 'Social Democratic Front',
    colorCode: '#1d48de',
  },
  {
    id: 4,
    name: 'Cabral Libii',
    imageSource: '/images/cabral.png',
    partyAbbreviation_en: 'CPNR',
    partyAbbreviation_fr: 'PCRN',
    party: 'Cameroonian Party for National Reconciliation',
    colorCode: '#ff0000',
  },
];

export const generalVotingResults = [
  {
    region: '',
    reportingPercentage: 90,
    voteData: [
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 3, votes: 800000, votePercentage: '15%' },
      { candidateId: 2, votes: 200000, votePercentage: '8%' },
    ],
  },
];

export const votingResultsByRegion = [
  {
    region: 'Adamaoua',
    reportingPercentage: 50,
    voteData: [
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 2, votes: 2000000, votePercentage: '25%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 1, votes: 500000, votePercentage: '30%' },
    ],
  },
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
    region: 'Est',
    reportingPercentage: 80,
    voteData: [
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
    ],
  },
  {
    region: 'Extrême-Nord',
    reportingPercentage: 90,
    voteData: [
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
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
  {
    region: 'Nord-Ouest',
    reportingPercentage: 60,
    voteData: [
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
    ],
  },
  {
    region: 'Ouest',
    reportingPercentage: 100,
    voteData: [
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
    ],
  },
  {
    region: 'Sud',
    reportingPercentage: 60,
    voteData: [
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
    ],
  },
  {
    region: 'Sud-Ouest',
    reportingPercentage: 100,
    voteData: [
      { candidateId: 2, votes: 500000, votePercentage: '25%' },
      { candidateId: 3, votes: 1000000, votePercentage: '15%' },
      { candidateId: 4, votes: 1560000, votePercentage: '20%' },
      { candidateId: 1, votes: 2000000, votePercentage: '30%' },
    ],
  },
];


