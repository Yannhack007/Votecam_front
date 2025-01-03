/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppSidebar } from '@/app/sidebar';
import AdminsHeader from '@/components/Admins/Header';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

const RoleLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { role: string };
}) => {
  const { role } = params;
  return (
    <>
      <SidebarProvider>
        <AppSidebar role={role} />
        <main className='w-full'>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default RoleLayout;
