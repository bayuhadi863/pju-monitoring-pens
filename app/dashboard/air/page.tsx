'use client';

import React from 'react'
import { Grid } from '@mantine/core'
import WeatherCard from '@/components/dashboard/weather-card';
import { Icon, Icon123 } from '@tabler/icons-react';

const datas = [
  {
    title: 'Temperature',
    subTitle: 'Temperature in Celsius',
    icon: <Icon123 />,
    value: '10°C'
  },
  {
    title: 'Humidity',
    subTitle: 'Humidity in percentage',
    icon: <Icon123 />,
    value: '50%'
  },
  {
    title: 'Wind',
    subTitle: 'Wind in km/h',
    icon: <Icon123 />,
    value: '10 km/h'
  },
  {
    title: 'Pressure',
    subTitle: 'Pressure in hPa',
    icon: <Icon123 />,
    value: '10 hPa'
  },
]

const cards = datas.map((data, index) => {
  return <WeatherCard key={index} {...data} />
  
})

const AirQualityPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {cards}
    </div>
  )
}

export default AirQualityPage
