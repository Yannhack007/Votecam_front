/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Logo from '@/components/logo';
import { ComboboxDemo } from '@/components/ui/combobox';
import Image from 'next/image';
import departments_data from '@/components/Map/departments_data.json';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface Errors {
  username: string;
  password: string;
}
const SuperAdminLogin = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [error, setError] = useState<Errors>({
    username: '',
    password: '',
  });
  const handlePasswordVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formDataToSend = {
      username: formData.username,
      password: formData.password,
    };
    console.log(formDataToSend);
    const newError: Errors = { password: '', username: '' };

    if (formDataToSend.password === '') {
      newError.password = 'Le mot de passe ne peut être vide';
    }

    if (formDataToSend.username === '') {
      newError.username = "Le nom d'utilisateur ne peut être vide";
    }

    // Only update state if there are errors
    if (newError.password || newError.username) {
      setError(newError);
    } else {
      setError({ password: '', username: '' });
    }
  };

  return (
    <div className="main-layout w-full min-h-screen bg-secondaryGreen-500 flex flex-col items-center">
      <main className="flex flex-col items-center mt-20 gap-14">
        <Logo fill="white" />
        <form
          onSubmit={handleSubmit}
          className="py-8 w-[460px] max-sm:w-full bg-white rounded-[8px] px-8 flex justify-center flex-col gap-10"
        >
          <h4 className="h4-custom-bold text-customBlack-500 text-center">
            Connexion
          </h4>
          <div className="flex flex-col gap-8">
            <div className="w-full h-full flex flex-col gap-2">
              <label htmlFor="username" className="form-label">
                Nom d&apos;Utilisateur
              </label>
              <Input
                type="text"
                placeholder=""
                name="username"
                className={`${
                  error.password && `border-redTheme focus-visible:ring-0`
                }`}
                value={formData.username}
                onChange={handleInputChange}
              />
              {error.username && (
                <p className="text-redTheme paragraph-medium2-medium">
                  {error.username}
                </p>
              )}
            </div>

            <div className="w-full h-full flex flex-col gap-2 relative">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <Input
                type={passwordIsVisible ? 'text' : 'password'}
                //placeholder="Password"
                name="password"
                className={`${
                  error.password && `border-redTheme focus-visible:ring-0`
                }`}
                value={formData.password}
                onChange={handleInputChange}
              />
              {passwordIsVisible && (
                <div className="absolute right-3 top-11">
                  <Eye
                    color="#6C757D"
                    size={20}
                    onClick={handlePasswordVisibility}
                  />
                </div>
              )}
              {!passwordIsVisible && (
                <div className="absolute right-3 top-11">
                  <EyeOff
                    size={20}
                    color="#6C757D"
                    onClick={handlePasswordVisibility}
                  />
                </div>
              )}
              {error.password && (
                <p className="text-redTheme paragraph-medium2-medium">
                  {error.password}
                </p>
              )}
            </div>

            <button type="submit" className="primary-btn">
              Connexion
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SuperAdminLogin;
