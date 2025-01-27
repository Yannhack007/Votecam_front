/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmptyState from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
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
import { ComboboxDemo } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import departments_data from '@/components/Map/departments_data.json';
const VotingOffices = () => {
  const [selectedCenter, setSelectedCenter] = useState<string>('');
  const [form, setFormData] = useState({
    votingOffice: '',
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const handleOnChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  const [offices, setOffices] = useState([
    {
      id: 1,
      centre: 'Centre I',
      office: 'Bureau I',
    },
    {
      id: 2,
      centre: 'Centre II',
      office: 'Bureau II',
    },
    {
      id: 3,
      centre: 'Centre III',
      office: 'Bureau II',
    },
  ]);

  const centres = [
    { id: 1, name: 'Centre I' },
    { id: 2, name: 'Centre II' },
    { id: 3, name: 'Centre III' },
    { id: 4, name: 'Centre IV' },
    { id: 5, name: 'Centre V' },
    { id: 6, name: 'Centre VI' },
    { id: 7, name: 'Centre VII' },
    { id: 8, name: 'Centre VIII' },
    { id: 9, name: 'Centre IX' },
    { id: 10, name: 'Centre X' },
  ];


  const handleSubmit = () => {
    const data = {
      id: offices.length + 1,
      centre: selectedCenter,
      office: form.votingOffice,
    };

    setOffices((prev) => [...prev, data]);
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">Bureaux de vote</p>
        <p className="paragraph-medium-regular black">
          Créer et gérer des bureaux de vote pour faciliter le processus de
          collecte et de validation des résultats. de collecte et de validation
          des résultats.
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center gap-8">
          {/* empty state */}
          <div className="flex flex-col items-center gap-8">
            <EmptyState />

            {/* <Button className="w-[220px]">
          <Plus strokeWidth={2.5} size={28} /> Créer un bureau de vote
        </Button> */}
          </div>

          <div className="w-full flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="mt-8" asChild>
                <Button className="w-[220px]">
                  <Plus strokeWidth={2.5} size={28} /> Créer un bureau de vote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="">
                  <DialogTitle>Créer un bureau de vote</DialogTitle>
                  <DialogDescription>
                    Une fois créée, le système sera initialisé avec les données
                    du bureau.
                  </DialogDescription>
                  <div
                    style={{
                      borderBottom: '1px solid var(--grey-100) !important',
                    }}
                  />
                </DialogHeader>
                <form className="flex flex-col gap-4">
                  {/* centre de vote */}
                  <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="department" className="form-label">
                      Centre de vote
                    </label>
                    <ComboboxDemo
                      dropdownData={departments_data}
                      setDropdownValue={setSelectedCenter}
                      dropdownValue={selectedCenter}
                      error=""
                      type="arrondissement"
                    />
                  </div>

                  <div className="grid flex-1 gap-2">
                    <label htmlFor="votingCenter" className="form-label">
                      Nom du bureau de vote
                    </label>
                    <Input
                      type="text"
                      id="centre de vote"
                      name="votingCenter"
                      value={form.votingOffice}
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
        </div>
      ) : (
        <div className="flex flex-col gap4">
          {/* dialog */}
          <div className="w-full flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="mt-8" asChild>
                <Button className="w-[220px]">
                  <Plus strokeWidth={2.5} size={28} /> Créer un bureau de vote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="">
                  <DialogTitle>Créer un bureau de vote</DialogTitle>
                  <DialogDescription>
                    Une fois créée, le système sera initialisé avec les données
                    du bureau.
                  </DialogDescription>
                  <div
                    style={{
                      borderBottom: '1px solid var(--grey-100) !important',
                    }}
                  />
                </DialogHeader>
                <form className="flex flex-col gap-4">
                  {/* centre de vote */}
                  <div className="w-full h-full flex flex-col gap-2">
                    <label htmlFor="department" className="form-label">
                      Centre de vote
                    </label>
                    <ComboboxDemo
                      dropdownData={centres}
                      setDropdownValue={setSelectedCenter}
                      dropdownValue={selectedCenter}
                      error=""
                      type="arrondissement"
                    />
                  </div>

                  <div className="grid flex-1 gap-2">
                    <label htmlFor="votingCenter" className="form-label">
                      Nom du bureau de vote
                    </label>
                    <Input
                      type="text"
                      id="centre de vote"
                      name="votingCenter"
                      value={form.votingOffice}
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

          <div className="w-[60%] mt-10">
            <table className="w-full">
              <thead className="w-full">
                <tr className="bg-[#f0f0f0] w-full  rounded-md">
                  <th className="w-[50%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-l-[8px]">
                    Nom du centre
                  </th>
                  {/* <th className="w-[33%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6">
                    Nom du départment
                  </th> */}
                  <th className="w-[50%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6 rounded-r-[8px] ">
                    Nom du bureau
                  </th>
                </tr>
              </thead>
              <tbody>
                {offices &&
                  offices.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-b-customGrey-100 "
                    >
                      <td className="px-6 py-4 black paragraph-medium-medium  text-start">
                        {data?.centre}
                      </td>
                      <td className="px-6 py-4 text-start">{data?.office}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* empty state */}
    </div>
  );
};

export default VotingOffices;
