import React from 'react';
// mantine import
import { Card, Switch, Slider } from '@mantine/core';
// component import
import SensorCard from '@/components/dashboard/sensor-card';
import BlockTitle from '@/components/dashboard/block-title';
// lib import
import { SensorCardPropsType } from '@/libs/prop-types';

const DashboardPage = () => {
  const pjuMonitoringDatas: SensorCardPropsType[] = [
    {
      title: 'Tegangan',
      subtitle: 'Volt (V)',
      value: 6,
      unit: 'V',
      color: 'yellow',
    },
    {
      title: 'Arus',
      subtitle: 'Ampere (A)',
      value: 3,
      unit: 'A',
      color: 'green',
    },
    {
      title: 'Daya',
      subtitle: 'Watt (W)',
      value: 18,
      unit: 'W',
      color: 'green',
    },
    {
      title: 'Frekuensi',
      subtitle: 'Herz (Hz)',
      value: 144,
      unit: 'Hz',
      color: 'green',
    },
    {
      title: 'Cosphi',
      // subtitle: 'Sensor 3 subtitle',
      value: 0.977,
      // unit: 'W',
      color: 'red',
    },
    {
      title: 'Suhu',
      subtitle: 'Celcius (C)',
      value: 40,
      unit: 'C',
      color: 'red',
    },
    {
      title: 'Cahaya',
      subtitle: 'Lumen',
      value: 400,
      unit: 'Lumen',
      color: 'green',
    },
  ];

  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:basis-2/3'>
          <BlockTitle>Monitoring PJU</BlockTitle>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
            {pjuMonitoringDatas.map((data, i) => (
              <SensorCard
                key={i}
                data={data}
              />
            ))}
          </div>
        </div>
        <div className='lg:basis-1/3'>
          <BlockTitle>Kontrol PJU</BlockTitle>
          <div className='mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4'>
            <Card
              shadow='sm'
              p='sm'
              radius='md'
              withBorder
            >
              <div className='h-full flex justify-between items-center'>
                <div>
                  <h3 className='text-sm font-semibold'>Status Lampu</h3>
                  <p className='text-xs text-gray-500 font-light'>Turn On/Off</p>
                </div>
                <div>
                  <Switch
                    size='md'
                    onLabel='ON'
                    offLabel='OFF'
                  />
                </div>
              </div>
            </Card>
            <Card
              shadow='sm'
              p='sm'
              radius='md'
              withBorder
            >
              <div>
                <h3 className='text-sm font-semibold'>Tingkat Kecerahan</h3>
                <p className='text-xs text-gray-500 font-light'>Atur tingkat kecerahan lampu</p>
              </div>
              <div className='mt-3 mb-6'>
                <Slider
                  // color="blue"
                  marks={[
                    { value: 20, label: '20%' },
                    { value: 50, label: '50%' },
                    { value: 80, label: '80%' },
                  ]}
                />
              </div>
            </Card>
            <Card
              shadow='sm'
              p='sm'
              radius='md'
              withBorder
            >
              <div className='h-full flex justify-between items-center'>
                <div>
                  <h3 className='text-sm font-semibold'>Mode Auto</h3>
                  <p className='text-xs text-gray-500 font-light'>Turn On/Off otomatis</p>
                </div>
                <div>
                  <Switch
                    size='md'
                    onLabel='ON'
                    offLabel='OFF'
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
