/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
const RecordVotes = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepCount = 2;
  const [votes, setVotes] = useState<{ [key: number]: number }>({
    1: 0,
  });
  const [files, setFiles] = useState<
    { name: string; size: number; data: string }[]
  >([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const politicalParties = [
    {
      partyId: 1,
      party: 'Rassemblement Démocratique du Peuple Camerounais (RDPC)',
      candidate: 'Jean-Claude Mbarga',
    },
    {
      partyId: 2,
      party: 'Front Social Démocratique (SDF)',
      candidate: 'Emmanuel Nkou',
    },
    {
      partyId: 3,
      party: 'Union Nationale pour la Démocratie et le Progrès (UNDP)',
      candidate: 'Clarisse Ngono',
    },
    {
      partyId: 4,
      party: 'Mouvement pour la Renaissance du Cameroun (MRC)',
      candidate: 'Pauline Ekane',
    },
    {
      partyId: 5,
      party: 'Union des Populations du Cameroun (UPC)',
      candidate: 'Thomas Abega',
    },
    {
      partyId: 6,
      party: 'Alliance des Forces Progressistes (AFP)',
      candidate: 'Martine Ngassa',
    },
  ];
  const goToNextStep = () => {
    if (currentStep < stepCount) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleVoteChange = (partyId: number, value: number) => {
    const numericValue = Math.max(0, Number(value));
    setVotes((prevVotes) => ({
      ...prevVotes,
      [partyId]: numericValue,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    const maxFileSize = 300 * 1024; // 100 Ko
    const acceptedFormats = ['pdf', 'jpeg', 'png'];

    // Vérifier si l'utilisateur télécharge plus de 2 fichiers
    if (newFiles.length > 2) {
      setErrorMessage('Vous ne pouvez télécharger que 2 images ou fichiers.');
      return;
    }

    for (const file of newFiles) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!acceptedFormats.includes(fileExtension || '')) {
        setErrorMessage('Les formats acceptés sont PDF, JPEG, PNG.');
        return;
      }

      if (file.size > maxFileSize) {
        setErrorMessage('La taille du fichier doit être inférieure à 300 Ko.');
        return;
      }

      // Conversion du fichier en base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        setFiles((prevFiles) => [
          ...prevFiles,
          { name: file.name, size: file.size, data: base64Data },
        ]);
      };
      reader.readAsDataURL(file);
    }

    setErrorMessage('');
  };

  const handleDelete = (fileToDelete: { name: string; data: string }) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileToDelete.name)
    );
  };

  const handleSubmit = () => {
    // Logique de soumission des fichiers ici
    console.log('Fichiers soumis:', files);
  };

  const Step1 = () => {
    return (
      <div className="flex flex-col gap-12 w-[82%] items-center justify-center ">
        <table className="w-full">
          <thead className="w-full">
            <tr className="bg-[#f0f0f0] w-full  rounded-md">
              <th className="w-[48%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-l-[8px] ">
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
              <tr key={index} className="border-b border-b-customGrey-100 ">
                <td className="px-6 py-4 black paragraph-medium-medium text-start">
                  {party.party}
                </td>
                <td className="px-6 py-4 black paragraph-medium-medium  text-start">
                  {party.candidate}
                </td>
                <td className="px-6 py-4 text-end">
                  <input
                    type="number"
                    min={0}
                    value={votes[party.partyId] || ''}
                    onChange={(e) =>
                      handleVoteChange(party.partyId, Number(e.target.value))
                    }
                    placeholder="0"
                    className="black paragraph-medium-medium border border-primaryGreen-500 rounded-lg py-2 px-2 w-[126px] outline-none
                  focus:ring-1 focus:ring-primaryGreen-500  "
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end">
          <button onClick={goToNextStep} className="primary-btn w-[122px]">
            Suivant
          </button>
        </div>
      </div>
    );
  };

  // Step 2 content
  const Step2 = () => {
    return (
      <div className="flex flex-col gap-12 w-[82%] items-start justify-start">
        <div className="flex flex-col gap-4 w-full">
          <p className="black paragraph-medium-medium">
            Télécharger le procès-verbal des résultats
          </p>
          <div className="w-full h-[300px] bg-[rgba(230,248,244,0.5)] rounded-md border-dashed border-2 border-customGrey-300 flex items-center flex-col justify-center gap-6">
            <Image
              src="/upload.svg"
              alt="cloud upload"
              width={80}
              height={101}
            />
            <div className="flex flex-col gap-2 items-center">
              <label
                htmlFor="file-upload"
                className="cursor-pointer paragraph-medium-medium font-semibold text-primaryGreen-500 underline"
              >
                <input
                  type="file"
                  name=""
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                Parcourir les fichiers
              </label>
              <div className="flex flex-col item-center gap-2">
                <p className="text-center paragraph-small-medium text-[15px] text-customGrey-500 under">
                  Formats acceptés: PDF, JPEG, PNG
                </p>
                <p className="text-center paragraph-small-medium text-[15px] text-customGrey-500 under">
                  Vous ne pouvez télécharger que 2 images ou fichiers.
                </p>
              </div>
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          {files.length > 0 && (
            <div className="w-full flex flex-col gap-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="w-[50%] flex items-center justify-between px-3 py-2 border border-input rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium paragraph-medium-medium normal-case">
                      {file.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(file.size / 1024)} Ko
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(file)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full gap-4 flex justify-end">
          <button
            onClick={goToPreviousStep}
            className="w-[130px] secondary-btn disabled:hover:none "
          >
            Retourner
          </button>
          <button
            disabled={files.length === 0}
            //onClick={goToNextStep}
            className="primary-btn w-[122px]  disabled:bg-primaryGreen-600"
          >
            Soumettre
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mt-4 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">
          Bureau de vote de Nsimeyong - Centre de vote III, Yaoundé VI
        </p>
        <p className="paragraph-medium-regular black">
          Remplissez les décomptes des voix et téléchargez le procès verbal des
          résultats pour finaliser votre soumission.
        </p>
      </div>

      {/* stepper ui */}
      <div className="flex w-full items-center justify-center gap-3">
        <div
          className={`h-9 w-9 flex items-center justify-center transition-all duration-600 rounded-full text-white paragraph-medium-medium ${
            currentStep >= 1 ? 'bg-primaryGreen-500 ' : 'bg-customGrey-200'
          }`}
        >
          {currentStep > 1 ? <Check color="#fff" className="w-5 h-5" /> : 1}
        </div>
        <div
          className={`w-[50%] h-[4px] rounded-[2px] ${
            currentStep >= 2 ? 'bg-primaryGreen-500' : 'bg-customGrey-200'
          }`}
        />
        <div
          className={`h-9 w-9 flex items-center justify-center rounded-full text-white paragraph-medium-medium ${
            currentStep === 2 ? 'bg-primaryGreen-500' : 'bg-customGrey-200'
          }`}
        >
          2
        </div>
      </div>

      {/* Step Content */}
      <div className="flex justify-center">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
      </div>
    </div>
  );
};

export default RecordVotes;
