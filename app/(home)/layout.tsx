import React from 'react';
import HomeNavbar from '@/components/home/home-navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <HomeNavbar>{children}</HomeNavbar>;
};

export default HomeLayout;
