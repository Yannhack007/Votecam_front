'use client'
import React, { useEffect, useState } from 'react';
import SuperAdminLogin from '@/components/LoginForms/superadmin';
import CenterAdminLogin from '@/components/LoginForms/centeradmin';
import OfficeAdminLogin from '@/components/LoginForms/officeadmin';
import NotFoundPage from '@/app/not-found';
import { centeradmin, officeadmin, superadmin } from '@/constants/roles';

const Login: React.FC<{ params: Promise<{ role: string }> }> = ({ params }) => {
  const [role, setRole] = useState<string | null>(null);

  // Resolving the params promise and setting the role
  useEffect(() => {
    const fetchRole = async () => {
      const resolvedParams = await params;
      setRole(resolvedParams.role);
    };
    fetchRole();
  }, [params]);

  // Wait for the role to load
  if (!role) return null;

  if (role === superadmin) {
    return <SuperAdminLogin />;
  }

  if (role === centeradmin) {
    return <CenterAdminLogin />;
  }

  if (role === officeadmin) {
    return <OfficeAdminLogin />;
  }

  return <NotFoundPage />;
};

export default Login;
