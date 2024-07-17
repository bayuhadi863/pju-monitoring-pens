// react import
import React from 'react';
// mantine import
import { Card } from '@mantine/core';
// lib import
import { SensorCardPropsType } from '@/libs/prop-types';

const SensorCard = ({ data }: { data: SensorCardPropsType }) => {
  const generateTextColor = (color?: string) => {
    if (!color) return '';
    if (color === 'red') return 'text-red-600';
    if (color === 'green') return 'text-green-600';
    if (color === 'yellow') return 'text-yellow-400';
  };

  return (
    <Card
      shadow='sm'
      py='xs'
      px='sm'
      radius='md'
      withBorder
    >
      <div className='h-full flex flex-col justify-between'>
        <div>
          <h3 className='text-sm font-semibold'>{data.title}</h3>
          <p className='text-xs text-gray-500 font-light'>{data.subtitle}</p>
        </div>
        <div>
          <p className={`mt-3 font-semibold ${generateTextColor(data.color)}`}>
            {data.value} <span>{data.unit}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SensorCard;
