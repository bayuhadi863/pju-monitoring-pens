// react import
import React from 'react';
// components import
import CustomContainer from './custom-container';
// image import
import heroImage from '@/public/assets/hero-image.png';
// next js import
import Image from 'next/image';
import Link from 'next/link';
// mantine import
import { Button } from '@mantine/core';

const HeroSection = () => {
  return (
    <section className='h-[85vh] flex items-center'>
      <CustomContainer className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 lg:mt-0'>
        <div>
          <h1 className='text-4xl font-semibold'>SISTEM CERDAS PEMANTAU PENERANGAN JALAN UMUM (PJU) TERINTEGRASI</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci hic.</p>
          <Button
            className='mt-4'
            size='md'
            radius="md"
            component={Link}
            href='/dashboard'
          >
            Dashboard
          </Button>
        </div>
        <div className='flex justify-end'>
          <Image
            src={heroImage}
            alt='Hero Image'
            width={400}
            placeholder='blur'
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
