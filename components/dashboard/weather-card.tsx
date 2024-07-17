import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Text, Card } from '@mantine/core'

interface CardProps {
  title: string;
  subTitle: string;
  icon: React.ReactElement;
  value: any;
}

const WeatherCard: React.FC<CardProps> = ({ title, subTitle, icon, value }) => {
  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <div className='flex flex-row gap-2'>
        <div className='bg-red-600 w-1 min-h-full rounded-md'>
        </div>
        <div className='flex flex-row justify-between w-full p-2'>
          <div className='flex flex-col'>
            <span className='text-xl font-bold'>
              {title}
            </span>
            <span className='text-sm text-subTitle'>
              {subTitle}
            </span>
            <span className='text-2xl font-bold mt-4'>
              {value}
            </span>
          </div>
          <div>
            {icon}
          </div>
        </div>
      </div>
    </Card>
  )
}

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.string.isRequired,
//   icon: PropTypes.element.isRequired,
//   value: PropTypes.any
// };

export default WeatherCard