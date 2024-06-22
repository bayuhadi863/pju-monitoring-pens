// react import
import React from 'react';
// component import
import ThemeSwitch from './theme-switch';

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1>Dashboard</h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
