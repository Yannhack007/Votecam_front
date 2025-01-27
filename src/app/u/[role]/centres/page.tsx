/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmptyState from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import region_data from '@/components/Map/region_data.json';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import departments_data from '@/components/Map/departments_data.json';
import { ComboboxDemo } from '@/components/ui/combobox';
import CameroonData from '@/components/Map/cameroon_data.json';
import { Input } from '@/components/ui/input';
interface Arrondissement {
  name: string;
  id: string;
}
const VotingCentres = () => {
  const [selectedCenter, setSelectedCenter] = useState<string>('');
  const [selectedRegion, setSelectionRegion] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<string>('');
  const [votingOfficeData, setVotingOfficeData] = useState<Arrondissement[]>([
    {
      id: '',
      name: '',
    },
  ]);

  const [form, setFormData] = useState({
    votingCenter: '',
    name: '',
  });
  const handleOnChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  const handleFilterArrondissementsByDepartment = (selectedCenter: string) => {
    const selectedRegion = CameroonData.find((region) =>
      region.departments.some(
        (department) => department.departmentName === selectedCenter
      )
    );

    const selectedDepartment = selectedRegion?.departments.find(
      (department) => department.departmentName === selectedCenter
    );

    const arrondissements =
      selectedDepartment?.arrondissements.map((arr) => ({
        name: arr.name,
        id: arr.arrondissementId,
      })) || [];

    setVotingOfficeData(arrondissements);
  };
  // useEffect(() => {
  //   handleFilterArrondissementsByDepartment(selectedCenter);
  // }, [selectedCenter]);
  const [centers, setCenters] = useState([
    {
      id: 1,
      name: 'Centre I',
      region: 'Adamaoua',
      department: 'Djerem',
    },
    {
      id: 2,
      name: 'Centre II',
      region: 'Adamaoua',
      department: 'Faro et Déo',
    },
    {
      id: 3,
      name: 'Centre III',
      region: 'Adamaoua',
      department: 'Mayo Banyo',
    },
    {
      id: 4,
      name: 'Centre IV',
      region: 'Centre',
      department: 'Lekié',
    },
    {
      id: 5,
      name: 'Centre V',
      region: 'Est',
      department: 'Lom-et-Djérem',
    },
    {
      id: 6,
      name: 'Centre VI',
      region: 'Ouest',
      department: 'Noun',
    },
    {
      id: 7,
      name: 'Centre VII',
      region: 'Littoral',
      department: 'Wouri',
    },
    {
      id: 8,
      name: 'Centre VIII',
      region: 'Extrême-Nord',
      department: 'Mayo-Tsanaga',
    },
    {
      id: 9,
      name: 'Centre IX',
      region: 'Nord-Ouest',
      department: 'Mezam',
    },
    {
      id: 10,
      name: 'Centre X',
      region: 'Sud-Ouest',
      department: 'Fako',
    },
  ]);

  const handleSubmit = () => {
    const data = {
      id: centers.length + 1,
      name: form.name,
      region: selectedRegion,
      department: selectedCenter,
    };

    setCenters((prev) => [...prev, data]);
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">Centres de vote</p>
        <p className="paragraph-medium-regular black">
          Créer et gérer les centres de vote pour faciliter le processus de
          collecte et de validation des résultats.
        </p>
      </div>

      {/* empty state */}
      {isEmpty ? (
        <div className="flex flex-col items-center gap-8">
          <EmptyState />
          <Dialog>
            <DialogTrigger className="mt-8" asChild>
              <Button className="w-[220px]">
                <Plus strokeWidth={2.5} size={28} /> Créer un centre de vote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader className="">
                <DialogTitle>Créer un centre de vote</DialogTitle>
                <DialogDescription>
                  Une fois créée, le système sera initialisé avec les données du
                  centre.
                </DialogDescription>
                <div
                  style={{
                    borderBottom: '1px solid var(--grey-100) !important',
                  }}
                />
              </DialogHeader>
              <form className="flex flex-col gap-4">
                {/* region */}
                <div className="w-full h-full flex flex-col gap-2">
                  <label htmlFor="department" className="form-label">
                    Région
                  </label>
                  <ComboboxDemo
                    dropdownData={region_data}
                    setDropdownValue={setSelectionRegion}
                    dropdownValue={selectedRegion}
                    error=""
                    type=""
                  />
                </div>
                {/* department */}
                <div className="w-full h-full flex flex-col gap-2">
                  <label htmlFor="department" className="form-label">
                    Département
                  </label>
                  <ComboboxDemo
                    dropdownData={departments_data}
                    setDropdownValue={setSelectedCenter}
                    dropdownValue={selectedCenter}
                    error=""
                    type="département"
                  />
                </div>
                {/* arrondissement */}
                {/* <div className="w-full h-full flex flex-col gap-2">
                <label htmlFor="department" className="form-label">
                  Arrondissement
                </label>

                <ComboboxDemo
                  dropdownData={votingOfficeData}
                  setDropdownValue={setSelectedOffice}
                  dropdownValue={selectedOffice}
                  error=""
                  type="arrondissement"
                />
              </div> */}

                <div className="grid flex-1 gap-2">
                  <label htmlFor="votingCenter" className="form-label">
                    Nom du centre de vote
                  </label>
                  <Input
                    type="text"
                    id="centre de vote"
                    name="votingCenter"
                    value={form.votingCenter}
                    onChange={(e) =>
                      handleOnChange(e.target.name, e.target.value)
                    }
                    // className="custom-input"
                  />
                </div>
              </form>
              <DialogFooter className="justify-end">
                <DialogClose className="mt-4" asChild>
                  <Button type="button" variant="default">
                    Créer
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="flex flex-col gap4">
          <div className="w-full flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="mt-8" asChild>
                <Button className="w-[220px]">
                  <Plus strokeWidth={2.5} size={28} /> Créer un centre de vote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="">
                  <DialogTitle>Créer un centre de vote</DialogTitle>
                  <DialogDescription>
                    Une fois créée, le système sera initialisé avec les données
                    du centre.
                  </DialogDescription>
                  <div
                    style={{
                      borderBottom: '1px solid var(--grey-100) !important',
                    }}
                  />
                </DialogHeader>
                <form className="flex flex-col gap-4">
                  {/* region */}
                  <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="department" className="form-label">
                      Région
                    </label>
                    <ComboboxDemo
                      dropdownData={region_data}
                      setDropdownValue={setSelectionRegion}
                      dropdownValue={selectedRegion}
                      error=""
                      type=""
                    />
                  </div>
                  {/* department */}
                  <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="department" className="form-label">
                      Département
                    </label>
                    <ComboboxDemo
                      dropdownData={departments_data}
                      setDropdownValue={setSelectedCenter}
                      dropdownValue={selectedCenter}
                      error=""
                      type="département"
                    />
                  </div>

                  <div className="grid flex-1 gap-2">
                    <label htmlFor="name" className="form-label">
                      Nom du centre de vote
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                      // className="custom-input"
                    />
                  </div>
                </form>
                <DialogFooter className="justify-end">
                  <DialogClose className="mt-4" asChild>
                    <Button
                      onClick={handleSubmit}
                      type="button"
                      variant="default"
                    >
                      Créer
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-[60%] mt-10">
            <table className="w-full">
              <thead className="w-full">
                <tr className="bg-[#f0f0f0] w-full  rounded-md">
                  <th className="w-[40%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-l-[8px]">
                    Nom de la région
                  </th>
                  <th className="w-[33%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6">
                    Nom du départment
                  </th>
                  <th className="w-[33%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-center px-6 rounded-r-[8px] ">
                    Nom du centre
                  </th>
                </tr>
              </thead>
              <tbody>
                {centers &&
                  centers.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-b-customGrey-100 "
                    >
                      <td className="px-6 py-4 black paragraph-medium-medium  text-start">
                        {data?.region}
                      </td>
                      <td className="px-6 py-4 text-start">
                        {data?.department}
                      </td>
                      <td className="px-6 py-4 text-center">{data?.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingCentres;
