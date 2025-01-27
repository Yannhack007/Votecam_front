/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const PublishVotes = () => {
  const listOfVotingOffices = [
    {
      name: 'Nsimeyong Bureau I',
      voteStatus: 'Non soumis',
    },
    {
      name: 'Mendong Bureau II',
      voteStatus: 'À valider',
    },
    {
      name: 'Simbock Bureau III',
      voteStatus: 'Publié',
    },
    {
      name: 'Jouvence Bureau IV',
      voteStatus: 'Non soumis',
    },
  ];
  return (
    <div className="w-full mt-4 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">
          Gestion des Bureaux de Vote - Centre de vote III, Yaoundé II
        </p>
        <p className="paragraph-medium-regular black">
          Consultez l’état des votes soumis par les bureaux de vote, validez-les
          et publiez les résultats.
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
              <tr key={index} className="border-b border-b-customGrey-100 ">
                <td className="px-6 py-4 black paragraph-medium-medium text-start">
                  {item.name}
                </td>
                <td className="px-6 py-4 black paragraph-medium-medium w-fit text-start">
                  <p className="flex justify-center items-center w-[150px] px-2 py-[6px] bg-yellow-600 rounded-md">
                    {item.voteStatus}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end">
          <button className="primary-btn w-[122px]">Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default PublishVotes;
