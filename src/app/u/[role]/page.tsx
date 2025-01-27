/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import AdminsHeader from '@/components/Admins/Header';
import EmptyState from '@/components/EmptyState';
import { GlobalNotifier } from '@/components/GlobalNotifier';
import { Button } from '@/components/ui/button';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">Tableau de bord</p>
      </div>
      {/* <Button
        variant="outline"
        onClick={() =>
          GlobalNotifier(
            'Success!',
            'success',
            'Your operation was completed successfully.'
          )
        }
      ></Button>
      Show Positive Toast */}
      <div className="flex flex-col items-center gap-8">
        <EmptyState />
      </div>
    </div>
  );
};

export default Dashboard;
