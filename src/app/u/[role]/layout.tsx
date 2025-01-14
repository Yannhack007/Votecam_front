/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { AppSidebar } from '@/app/sidebar';
import AdminsHeader from '@/components/Admins/Header';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { sideBarData } from '@/components/Sidebar/SidebarData';
import NotFoundPage from '@/app/not-found';
import { usePathname } from 'next/navigation';

const RoleLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ role: string }>;
}) => {
  const { role } = React.use(params);
  const pathname = usePathname();

  //function to check roles before rendering sidebar
  const isValidPathForRole = (role: string, pathname: string) => {
    return sideBarData({ role }).some((item) => {
      // Check if the item's URL or any subnav URL matches the pathname
      if (item.url === pathname) return true;
      if (item.subnav) {
        return item.subnav.some((subItem) => subItem.url === pathname);
      }
      return false;
    });
  };


  if (!isValidPathForRole(role, pathname)) {
    return <NotFoundPage />;
  } else {
    return (
      <>
        <SidebarProvider>
          <AppSidebar role={role} />
          <main className="w-full px-4 py-3">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </>
    );
  }
};

export default RoleLayout;
