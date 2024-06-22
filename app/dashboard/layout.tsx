// react import
import React from 'react';
// mantine import
// components import
import Sidebar from '@/components/layout/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default DashboardLayout;
