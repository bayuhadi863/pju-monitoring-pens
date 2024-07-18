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
    if (pathname === '/dashboard/weather') return 'Weather';
    if (pathname === '/dashboard/air') return 'Air Quality';
    if (pathname === '/dashboard/cctv') return 'Live CCTC';
    if (pathname === '/dashboard/chatbot') return 'Chatbot AI';
  };

  const generatePageSubTitle = () => {
    if (pathname === '/dashboard') return 'Pemantau Penerangan Jalan Umum (PJU)';
    if (pathname === '/dashboard/weather') return 'Pemantau Sensor Cuaca';
    if (pathname === '/dashboard/air') return 'Pemantau Sensor Kualitas Udara';
    if (pathname === '/dashboard/cctv') return 'Pemantau Rekaman Live Kamera CCTV';
    if (pathname === '/dashboard/chatbot') return 'Aplikasi Chatbot Berbasis AI';
  };

  return (
    <header className='flex justify-between items-center gap-2'>
      <div>
        <h1 className='text-lg font-semibold'>{generatePageTitle()}</h1>
        <p className='text-xs text-gray-500'>{generatePageSubTitle()}</p>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
