
import { FunctionComponent } from 'react';
import { House, Handshake } from 'lucide-react';
import { centeradmin, officeadmin, superadmin } from '@/constants/roles';

// Interface for sidebar data
interface SideBarData {
  title: string;
  url: string;
  role: string[];
  icon: FunctionComponent; // Icon component
}

// Define the sidebar data function
export const sideBarData = ({ role }: { role: string }): SideBarData[] => {
  return [
    {
      title: 'Tableau de bord',
      url: `/u/${role}/dashboard`,
      role : [superadmin, officeadmin, centeradmin],
      icon: House,
    },
    {
      title: 'Candidats Politiques',
      url: `/u/${role}/candidats`,
      role : [superadmin, officeadmin, centeradmin],
      icon: Handshake,
    },
    {
      title: 'Centres de vote',
      url: `/u/${superadmin}/centres`,
      role : [superadmin],
      icon: Handshake,
    },

  ];
};
