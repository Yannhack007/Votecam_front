/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmptyState from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
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
import ImageUpload from '@/components/ui/lmageUpload';
import { error } from 'console';
import { BASE_URL } from '@/components/constants/api';
const CandidatsPolitiques = () => {
  const [selectedPoliticalname, setSelectedPoliticalname] =
    useState<string>('');
  const [form, setFormData] = useState({
    candidateName: '',
    candidateImage: '',
  });
  const handleOnChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  const politicalParties = [
    {
      name: 'Rassemblement Démocratique du Peuple Camerounais (RDPC)',
      id: 1,
    },
    {
      name: 'Front Social Démocratique (SDF)',
      id: 2,
    },
    {
      name: 'Union Nationale pour la Démocratie et le Progrès (UNDP)',
      id: 3,
    },
    {
      name: 'Mouvement pour la Renaissance du Cameroun (MRC)',
      id: 4,
    },
    {
      name: 'Union des Populations du Cameroun (UPC)',
      id: 5,
    },
    {
      name: 'Alliance des Forces Progressistes (AFP)',
      id: 6,
    },
  ];


  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">Candidats Politiques</p>
        <p className="paragraph-medium-regular black">
          Créer, metter à jour et gérer les informations des candidats
          politiques.
        </p>
      </div>

      {/* empty state */}
      <div className="flex flex-col items-center gap-8">
        <EmptyState />
      </div>

      <div className="w-full flex items-center justify-center">
        <Dialog>
          <DialogTrigger className="mt-8" asChild>
            <Button className="w-[250px]">
              <Plus strokeWidth={2.5} size={28} /> Créer un candidat politique
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="">
              <DialogTitle>Créer un candidat politique</DialogTitle>
              <DialogDescription>
                Une fois créée, le système sera initialisé avec les données du
                candidat.
              </DialogDescription>
              <div
                style={{
                  borderBottom: '1px solid var(--grey-100) !important',
                }}
              />
            </DialogHeader>
            <form className="flex flex-col gap-4">
              <div className="grid flex-1 gap-2">
                <label className="form-label" htmlFor="start-date">
                  Photo du candidat
                  <br />
                  <span className="text-muted-foreground text-sm paragraph-small-regular">
                    {' '}
                    L&apos;image doit être inférieure à 1024x1024px.
                  </span>
                </label>
                <ImageUpload />
              </div>
              <div className="grid flex-1 gap-2">
                <label className="form-label" htmlFor="start-date">
                  Parti politique
                </label>
                <ComboboxDemo
                  dropdownData={politicalParties}
                  setDropdownValue={setSelectedPoliticalname}
                  dropdownValue={selectedPoliticalname}
                  error=""
                  type=""
                />
              </div>
              <div className="grid flex-1 gap-2">
                <label className="form-label" htmlFor="candidateName">
                  Nom du candidat
                </label>
                <Input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  value={form.candidateName}
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
  );
};

export default CandidatsPolitiques;
