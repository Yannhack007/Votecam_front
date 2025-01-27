/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { File } from 'lucide-react';
const PublishVotes = () => {
  const router = useRouter();
  const [validatePageOpen, setValidatePageOpen] = useState(false);
  const listOfVotingOffices = [
    {
      name: 'Nsimeyong Bureau I',
      voteStatus: 'Non soumis',
      status: 'not available',
    },
    {
      name: 'Mendong Bureau II',
      voteStatus: 'À valider',
      status: 'available',
    },
    {
      name: 'Simbock Bureau III',
      voteStatus: 'Publié',
      status: 'published',
    },
    {
      name: 'Jouvence Bureau IV',
      voteStatus: 'Non soumis',
      status: 'not available',
    },
  ];

  const handleClick = () => {
    setValidatePageOpen(true);
  };

  const getTagStyling = (status: string, voteStatus: string) => {
    return (
      <div
        className={`px-3 py-[6px] w-fit flex justify-center items-center rounded-[6px] paragraph-medium-small ${
          status === 'available'
            ? `bg-[#EBF3FE] text-[#2A5CAF]`
            : status === 'not available'
            ? `text-[#866300] bg-[#FCE8B0] `
            : status === 'published'
            ? `bg-[#C0EECC] text-[#258D3F]`
            : ``
        }`}
      >
        <p>{voteStatus}</p>
      </div>
    );
  };

  const politicalParties = [
    {
      partyId: 1,
      party: 'Rassemblement Démocratique du Peuple Camerounais (RDPC)',
      candidate: 'Jean-Claude Mbarga',
      votes: 15000,
    },
    {
      partyId: 2,
      party: 'Front Social Démocratique (SDF)',
      candidate: 'Emmanuel Nkou',
      votes: 1300,
    },
    {
      partyId: 3,
      party: 'Union Nationale pour la Démocratie et le Progrès (UNDP)',
      candidate: 'Clarisse Ngono',
      votes: 20000,
    },
    {
      partyId: 4,
      party: 'Mouvement pour la Renaissance du Cameroun (MRC)',
      candidate: 'Pauline Ekane',
      votes: 500,
    },
    {
      partyId: 5,
      party: 'Union des Populations du Cameroun (UPC)',
      candidate: 'Thomas Abega',
      votes: 6000,
    },
    {
      partyId: 6,
      party: 'Alliance des Forces Progressistes (AFP)',
      candidate: 'Martine Ngassa',
      votes: 2000,
    },
  ];
  return (
    <div className="w-full mt-4 flex flex-col gap-12">
      {!validatePageOpen ? (
        <>
          <div className="flex flex-col gap-2">
            <p className="black h5-custom-medium ">
              Gestion des Bureaux de Vote - Centre de vote III, Yaoundé II
            </p>
            <p className="paragraph-medium-regular black">
              Consultez l’état des votes soumis par les bureaux de vote,
              validez-les et publiez les résultats.
            </p>
          </div>

          <div className="flex flex-col gap-12 w-[70%] items-center justify-center ">
            <table className="w-full">
              <thead className="w-full">
                <tr className="bg-[#f0f0f0] w-full  rounded-md">
                  <th className="w-[50%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-l-[8px] ">
                    Nom du bureau de vote
                  </th>
                  <th className="flex paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-r-[8px] ">
                    Statut des votes
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfVotingOffices.map((item, index) => (
                  <tr
                    key={index}
                    onClick={handleClick}
                    className="border-b border-b-customGrey-100 hover:bg-[#f0f0f0] transition"
                  >
                    <td className="px-6 py-4 black paragraph-medium-medium text-start">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 black paragraph-medium-medium w-fit text-start">
                      {getTagStyling(item.status, item.voteStatus)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="w-full flex justify-end">
          <button className="primary-btn w-[122px]">Suivant</button>
        </div> */}
          </div>
        </>
      ) : (
        // validate page
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="black h5-custom-medium ">
              Validation des votes - Mendong Bureau II
            </p>
            <p className="paragraph-medium-regular text-customBlack-400">
              Avant de valider un vote, comparez le formulaire et le processus
              verbal à la recherche d&apos;incohérences, apportez les
              modifications nécessaires, puis faites un rapport.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="paragraph-large-medium">I. Décompte des voix</p>
            <div className="flex flex-col gap-12 w-[82%] items-center justify-center ">
              <table className="w-full">
                <thead className="w-full">
                  <tr className="bg-[#f0f0f0] w-full  rounded-md">
                    <th className="w-[48%] paragraph-medium-medium  py-4 font-semibold text-customBlack-400 text-start px-6 rounded-l-[8px] ">
                      Partie politique
                    </th>
                    <th className="w-[30%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 ">
                      Candidat
                    </th>
                    <th className="paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-end px-6 rounded-r-[8px] ">
                      Décompte des Voix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {politicalParties.map((party, index) => (
                    <tr
                      key={index}
                      className="border-b border-b-customGrey-100 "
                    >
                      <td className="px-6 py-4 black font-normal paragraph-medium-medium text-start">
                        {party.party}
                      </td>
                      <td className="px-6 py-4 black font-normal paragraph-medium-medium  text-start">
                        {party.candidate}
                      </td>
                      <td className="px-6 py-4 text-end">
                        <input
                          type="number"
                          min={0}
                          readOnly
                          value={party.votes}
                          placeholder="0"
                          className="black font-normal paragraph-medium-medium border border-primaryGreen-500 rounded-lg py-2 px-2 w-[126px] outline-none
                  focus:ring-1 focus:ring-primaryGreen-500  "
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <p className="paragraph-large-medium">
              II. Procès-verbal des résultats
            </p>
            <div className="w-[82%] flex items-center justify-between px-3 py-4 border border-input rounded-md">
              <div className="flex items-center gap-2">
                <File />
                <span className="paragraph-medium-medium font-normal normal-case">
                  Pv Simbock III
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(24 / 1024)} Ko
                </span>
              </div>
              <button className="bg-[#f2f2f2] text-customBlack-400 rounded-md py-[10px] px-[16px] paragraph-medium-medium">
                Ouvrir
              </button>
            </div>
          </div>

          <div className="w-[82%] flex justify-end items-center gap-3 mt-3">
            <button className="rounded-md paragraph-medium-bold font-medium w-fit text-primaryGreen-500 border border-primaryGreen-500 px-[16px] py-[10px]">
              Modifier
            </button>
            <button className="font-medium w-fit primary-btn px-[16px] py-[10px]">
              Valider et Publier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishVotes;
