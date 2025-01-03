// app/login/[role]/page.tsx

import React from 'react';
import SuperAdminLogin from '@/components/LoginForms/superadmin';
import CenterAdminLogin from '@/components/LoginForms/centeradmin';
import OfficeAdminLogin from '@/components/LoginForms/officeadmin';
import NotFoundPage from '@/app/not-found';
import { centeradmin, officeadmin, superadmin } from '@/constants/roles';


const Login: React.FC<{ params: { role: string } }> = ({ params }) => {
  const { role } = params; 

  if (role === superadmin) {
    return <SuperAdminLogin />;
  }

  if (role === centeradmin) {
    return <CenterAdminLogin />;
  }

  if (role === officeadmin) {
    return <OfficeAdminLogin />;
  }
  return (
    <NotFoundPage/>
  );
};

export default Login;
