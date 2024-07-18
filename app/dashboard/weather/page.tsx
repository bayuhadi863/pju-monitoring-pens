'use client';
// react import
import React from 'react';
// mantine import
import { Card, Grid } from '@mantine/core';
// component import
import ChartLineWeather from '@/components/dashboard/chart-line-weather';
import SensorCard from '@/components/dashboard/sensor-card';
import BlockTitle from '@/components/dashboard/block-title';
import MyAreaChart from '@/components/dashboard/my-area-chart';
// libs import
import { SensorCardPropsType } from '@/libs/prop-types';
import { humidityData } from '@/libs/chart-data/humidity-data';
import { allChartData } from '@/libs/chart-data/chart-data';
// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

const datas: SensorCardPropsType[] = [
  {
    title: 'Humidity',
    subtitle: 'Tingkat Kelembapan Udara Area',
    value: 90,
    unit: '%',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Temperature',
    subtitle: 'Suhu Area',
    value: 32,
    unit: '°C',
    color: 'red',
    icon: <RiErrorWarningFill className='text-red-600' />,
  },
  {
    title: 'Solar Radiation',
    subtitle: 'Tingkat Radiasi Matahari Area',
    value: 4.08,
    unit: 'MJ/m2',
    color: 'yellow',
    icon: <IoIosWarning className='text-yellow-400' />,
  },
  {
    title: 'Rainfall Level',
    subtitle: 'Tingkat Curah Hujan Area',
    value: 9,
    unit: 'mm',
    color: 'yellow',
    icon: <IoIosWarning className='text-yellow-400' />,
  },
  {
    title: 'Wind Speed',
    subtitle: 'Kecepatan Angin Area',
    value: 12,
    unit: 'm/s',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Water Level',
    subtitle: 'Tinggi Air Area',
    value: 32,
    unit: 'cm',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Wind Direction',
    subtitle: 'Arah Angin Area',
    value: 192,
    unit: '°',
    // color: 'green',
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

const WeatherPage = () => {
  return (
    <div className=''>
      <BlockTitle>Latest Weather Sensor Data</BlockTitle>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>{cards}</div>

      <div className='mt-4'>
        {allChartData.map((chartData, i) => (
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

export default WeatherPage;
