'use client';
// react import
import React from 'react';
// component import
import ThemeSwitch from './theme-switch';
// next js import
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const generatePageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/dashboard/weather') return 'Sensor Cuaca';
    if (pathname === '/dashboard/air') return 'Sensor Kualitas Udara';
    if (pathname === '/dashboard/cctv') return 'Live CCTC';
    if (pathname === '/dashboard/chatbot') return 'Chatbot AI';
  };

  return (
    <header className='flex justify-between items-center'>
      <h1>{generatePageTitle()}</h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
