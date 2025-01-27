/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmptyState from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
import Loader from '@/components/ui/Loader/Loader';
import { BASE_URL } from '@/components/constants/api';
const VotingCampaign = () => {
  const [form, setFormData] = useState({
    name: 'Campagne 2025',
    startDate: '',
    endDate: '',
    status: 'enable',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [campagneData, setCampagneData] = useState([
    {
      id: '',
      startingDate: '',
      endingDate: '',
      state: '',
    },
  ]);
  const handleOnChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

  useEffect(() => {
    console.log(typeof form.startDate[0]);
    console.log(form.startDate[0]);
  }, [form]);

  const handleSaveCampaign = async () => {
    const data = {
      name: form?.name,
      start: form?.startDate[0].toString(), // Correct date format (without the 'Z')
      end: form?.endDate[0].toString(),
      state: form?.status,
    };
    console.log(data, 'data');
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/campagnes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const result = await res.json();

      console.log(result);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      //throw new error(err)
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetAllCompaigns = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/campagnes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const result = await res.json();
      if (Array.isArray(result) && result.length === 0) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
      setCampagneData(result);
      //console.log(result);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllCompaigns();
  }, []);
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">Campagne de vote</p>
        <p className="paragraph-medium-regular black">
          Configurer et initialiser la campagne pour permettre la saisie et la
          validation des votes.
        </p>
      </div>

      {/* empty state */}
      {isEmpty ? (
        <div className="flex flex-col items-center gap-8">
          <EmptyState />
          <div className="w-full flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="mt-8" asChild>
                <Button className="w-[250px]">
                  <Plus strokeWidth={2.5} size={28} /> Créer une campagne de
                  vote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="">
                  <DialogTitle>Créer une campagne de vote</DialogTitle>
                  <DialogDescription>
                    Une fois créée, le système sera initialisé
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
                      Date de début
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      value={form.startDate}
                      name="startDate"
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                      className="custom-input"
                    />
                  </div>
                  <div className="grid flex-1 gap-2">
                    <label className="form-label" htmlFor="end-date">
                      Date de fin
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      name="endDate"
                      value={form.endDate}
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                      className="custom-input"
                    />
                  </div>
                  <div className="grid flex-1 gap-2">
                    <label className="form-label" htmlFor="status">
                      Statut
                    </label>
                    <select
                      id="status"
                      className="custom-input"
                      value={form.status}
                      name="status"
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="enable">Enable</option>
                      <option value="disable">Disable</option>
                    </select>
                  </div>
                </form>
                <DialogFooter className="justify-end">
                  <DialogClose className="mt-4" asChild>
                    <Button
                      type="button"
                      onClick={handleSaveCampaign}
                      variant="default"
                    >
                      {isLoading && <Loader />}
                      Créer
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="mt-8" asChild>
                <Button className="w-[250px]">
                  <Plus strokeWidth={2.5} size={28} /> Créer une campagne de
                  vote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="">
                  <DialogTitle>Créer une campagne de vote</DialogTitle>
                  <DialogDescription>
                    Une fois créée, le système sera initialisé
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
                      Date de début
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      value={form.startDate}
                      name="startDate"
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                      className="custom-input"
                    />
                  </div>
                  <div className="grid flex-1 gap-2">
                    <label className="form-label" htmlFor="end-date">
                      Date de fin
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      name="endDate"
                      value={form.endDate}
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                      className="custom-input"
                    />
                  </div>
                  <div className="grid flex-1 gap-2">
                    <label className="form-label" htmlFor="status">
                      Statut
                    </label>
                    <select
                      id="status"
                      className="custom-input"
                      value={form.status}
                      name="status"
                      onChange={(e) =>
                        handleOnChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="enable">Enable</option>
                      <option value="disable">Disable</option>
                    </select>
                  </div>
                </form>
                <DialogFooter className="justify-end">
                  <DialogClose className="mt-4" asChild>
                    <Button
                      type="button"
                      onClick={handleSaveCampaign}
                      variant="default"
                    >
                      {isLoading && <Loader />}
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
                    Date de début
                  </th>
                  <th className="w-[33%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-start px-6">
                    Date de fin
                  </th>
                  <th className="w-[33%] paragraph-medium-medium py-4 font-semibold text-customBlack-400 text-end px-6 rounded-r-[8px] ">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {campagneData &&
                  campagneData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-b-customGrey-100 "
                    >
                      <td className="px-6 py-4 black paragraph-medium-medium  text-start">
                        {data?.startingDate}
                      </td>
                      <td className="px-6 py-4 text-start">
                        {data?.endingDate}
                      </td>
                      <td className="px-6 py-4 text-end">{data?.state}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default VotingCampaign;
