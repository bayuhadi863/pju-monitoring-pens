'use client';

import React from 'react'
import { Card, Grid } from '@mantine/core'
import WeatherCard from '@/components/dashboard/weather-card';
import { Icon, Icon123 } from '@tabler/icons-react';
import ChartLineWeather from '@/components/dashboard/chart-line-weather';

const datas = [
  {
    title: 'Humidity',
    subTitle: 'Tingkat Kelembapan Udara',
    icon: <Icon123 />,
    value: '90 %'
  },
  {
    title: 'Temperature',
    subTitle: 'Suhu Area',
    icon: <Icon123 />,
    value: '32 °C'
  },
  {
    title: 'Solar Radiation',
    subTitle: 'Solar Radiation',
    icon: <Icon123 />,
    value: '4.08 MJ/m2'
  },
  {
    title: 'Rainfall Level',
    subTitle: 'Rainfall Measurement',
    icon: <Icon123 />,
    value: 'Light | 9mm'
  },
  {
    title: 'Wind Speed',
    subTitle: 'Tingkat Kecepatan Udara',
    icon: <Icon123 />,
    value: '12 m/s'
  },
  {
    title: 'Water Level',
    subTitle: 'Water Level',
    icon: <Icon123 />,
    value: '32 °C'
  },
  {
    title: 'Wind Direction',
    subTitle: 'Arah Mata Angin',
    icon: <Icon123 />,
    value: '192 °'
  }
]

const cards = datas.map((data, index) => {
  return <WeatherCard key={index} {...data} />

})

const WeatherPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cards}
      </div>
      <div>
        <Card shadow="sm" p="xs" radius="md" withBorder>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
              <span className='text-xl font-bold'>Humidity & Temperature Graph</span>
              <span className='text-sm text-subTitle'>Grafik Tingkat Kelembapan Udara dan Temperatur Area</span>
            </div>
            <div className='px-4 border border-spacing-1 rounded-md flex flex-col gap-4'>
              <div className='flex justify-center gap-6 pt-8'>
                <div className='flex gap-2 items-center'>
                  <div className='w-10 h-1 bg-cyan-400 rounded-md'></div>
                  <span>Humidity</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-10 h-1 bg-red-500 rounded-md'></div>
                  <span>Temperature</span>
                </div>
              </div>
              <div className='py-6'>
                <ChartLineWeather />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default WeatherPage
