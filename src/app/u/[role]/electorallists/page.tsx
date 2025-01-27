/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmptyState from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
const ElectoralLists = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [files, setFiles] = useState<
    { name: string; size: number; data: string }[]
  >([]);
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
  return (
    <div className="flex flex-col gap-12 mt-4">
      <div className="flex flex-col gap-2 ">
        <p className="black h5-custom-medium ">
          Importation des listes électorales
        </p>
        <p className="paragraph-medium-regular black">
          Téléchargez la liste des électeurs pour permettre l&apos;envoi de
          messages et de nouvelles élections aux électeurs inscrits.
        </p>
      </div>

      {/* empty state */}
      <div className="flex flex-col gap-12 w-[82%] items-start justify-start">
        <div className="flex flex-col gap-4 w-full">
          {/* <p className="black paragraph-medium-medium">
            Télécharger le procès-verbal des résultats
          </p> */}
          <div className="w-full h-[300px] bg-[rgba(230,248,244,0.3)] rounded-md border-dashed border-2 border-customGrey-300 flex items-center flex-col justify-center gap-6">
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
            disabled={files.length === 0}
            //onClick={goToNextStep}
            className="primary-btn w-[122px] disabled:bg-primaryGreen-600"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectoralLists;
