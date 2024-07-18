'use client';
// react import
import React from 'react';
// mantine import
import { Card } from '@mantine/core';
// libs import
import { SensorCardPropsType } from '@/libs/prop-types';
import { airChartDatas } from '@/libs/chart-data/air-chart-data';
// component import
import SensorCard from '@/components/dashboard/sensor-card';
import BlockTitle from '@/components/dashboard/block-title';
import MyAreaChart from '@/components/dashboard/my-area-chart';
// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

const datas: SensorCardPropsType[] = [
  {
    title: 'Carbon Monoxide',
    subtitle: 'Kadar Karbon Monoksida (CO) Area',
    icon: <RiErrorWarningFill className='text-red-600' />,
    value: 9000,
    unit: 'ppm',
    color: 'red',
  },
  {
    title: 'Ozone Gas',
    subtitle: 'Kadar Gas Ozon (O3) Area',
    icon: <IoIosWarning className='text-yellow-400' />,
    value: 10.0,
    unit: 'ppm',
    color: 'yellow',
  },
  {
    title: 'Particulate Matter',
    subtitle: 'Partikulat Udara Area',
    icon: <GoCheckCircleFill className='text-green-600' />,
    value: 20,
    unit: 'μg/m3',
    color: 'green',
  },
  {
    title: 'Nitrogren Dioxide',
    subtitle: 'Kadar Nitrogren Dioksida (NO2) Area',
    icon: <GoCheckCircleFill className='text-green-600' />,
    value: 3,
    unit: 'μg/m3',
    color: 'green',
  },
];

const cards = datas.map((data, index) => {
  return (
    <SensorCard
      key={index}
      data={data}
    />
  );
});

const AirQualityPage = () => {
  return (
    <div>
      <BlockTitle>Latest Air Quality Sensor Data</BlockTitle>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>{cards}</div>

      <div className='mt-4'>
        {airChartDatas.map((chartData, i) => (
          <div key={i}>
            <BlockTitle>{chartData.title}</BlockTitle>
            <Card
              radius='md'
              p='md'
              shadow='sm'
              withBorder
              className='mt-2 mb-4'
            >
              <MyAreaChart areaChartProps={chartData.chartProps} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityPage;
