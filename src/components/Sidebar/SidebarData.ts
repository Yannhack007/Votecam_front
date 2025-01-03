import { FunctionComponent } from 'react';
import {
  House,
  Handshake,
  MapPin,
  LayoutDashboard,
  UserRoundCog,
  CalendarClock,
  SquareCheckBig,
  Send,
} from 'lucide-react';
import { centeradmin, officeadmin, superadmin } from '@/constants/roles';

// Interface for sidebar data

interface SubNav {
  title: string;
  role: string[];
  url: string;
}
interface SideBarData {
  title: string;
  url: string;
  role: string[];
  icon: FunctionComponent; // Icon component
  subnav: SubNav[];
}

// Define the sidebar data function
export const sideBarData = ({ role }: { role: string }): SideBarData[] => {
  return [
    {
      title: 'Tableau de bord',
      url: `/u/${role}`,
      role: [superadmin, officeadmin, centeradmin],
      icon: LayoutDashboard,
      subnav: [],
    },
    {
      title: 'Campagne de vote',
      url: `/u/${superadmin}/votingcampaign`,
      role: [superadmin],
      icon: CalendarClock,
      subnav: [],
    },
    {
      title: 'Entrée des votes',
      url: `/u/${officeadmin}/recordvotes`,
      role: [officeadmin],
      icon: SquareCheckBig,
      subnav: [],
    },
    {
      title: 'Publication des votes',
      url: `/u/${centeradmin}/publishvotes`,
      role: [centeradmin],
      icon: Send,
      subnav: [],
    },
    {
      title: 'Candidats politiques',
      url: `/u/${superadmin}/candidats`,
      role: [superadmin],
      icon: Handshake,
      subnav: [],
    },
    {
      title: 'Centres de vote',
      url: `/u/${superadmin}/centres`,
      role: [superadmin],
      icon: House,
      subnav: [],
    },
    {
      title: 'Bureaux de vote',
      url: `/u/${superadmin}/offices`,
      role: [superadmin],
      icon: MapPin,
      subnav: [],
    },
    {
      title: 'Gestion des administrateurs',
      url: `/`,
      role: [superadmin],
      icon: UserRoundCog,
      subnav: [
        {
          title: 'Admins de centres',
          role: [superadmin],
          url: `/u/${superadmin}/usermanagement/centeradmin`,
        },
        {
          title: 'Admins de bureaux',
          role: [superadmin],
          url: `/u/${superadmin}/usermanagement/officeadmin`,
        },
      ],
    },
  ];
};
