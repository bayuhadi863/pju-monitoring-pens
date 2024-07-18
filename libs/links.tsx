// react import
import React from 'react';
// icons import
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillCloudsFill, BsChatTextFill } from 'react-icons/bs';
import { FaWind } from 'react-icons/fa';
import { BiSolidCctv } from 'react-icons/bi';

export type HomeNavbarLinksType = {
  label: string;
  href: string;
};

export type DashboardSidebarLinksType = {
  label: string;
  href: string;
  icon: any;
};

export const homeNavbarLinks: HomeNavbarLinksType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Features',
    href: '/#features',
  },
];

export const dashboardSidebarLinks: DashboardSidebarLinksType[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <RiDashboardFill />,
  },
  {
    label: 'Weather',
    href: '/dashboard/weather',
    icon: <BsFillCloudsFill />,
  },
  {
    label: 'Air Quality',
    href: '/dashboard/air',
    icon: <FaWind />,
  },
  {
    label: 'Live CCTC',
    href: '/dashboard/cctv',
    icon: <BiSolidCctv />,
  },
  {
    label: 'Chatbot AI',
    href: '/dashboard/chatbot',
    icon: <BsChatTextFill />,
  },
];
