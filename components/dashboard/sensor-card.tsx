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
    if (color === 'blue') return 'text-blue-400';
  };

  const generateBackgroundColor = (color?: string) => {
    if (!color) return 'bg-blue-600';
    if (color === 'red') return 'bg-red-600';
    if (color === 'green') return 'bg-green-600';
    if (color === 'yellow') return 'bg-yellow-400';
    if (color === 'blue') return 'bg-blue-400';
  };

  return (
    <Card
      shadow='sm'
      py='xs'
      px='sm'
      radius='md'
      withBorder
    >
      <div className='flex h-full gap-3 w-full '>
        <div className={`${generateBackgroundColor(data.color)} w-1 min-h-full rounded-md`}></div>
        <div className='h-full flex flex-col justify-between gap-3 w-full'>
          <div>
            <h3 className='text-sm font-semibold'>{data.title}</h3>
            <p className='text-xs text-gray-500 font-light'>{data.subtitle}</p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <p className={`font-semibold ${generateTextColor(data.color)}`}>
              {data.value} <span>{data.unit}</span>
            </p>
            <div>{data.icon}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SensorCard;
