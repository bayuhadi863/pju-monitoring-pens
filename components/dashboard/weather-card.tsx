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
        <div>
          <Text>{title}</Text>
          <Text>{subTitle}</Text>
          {icon}
          <Text>{value}</Text>
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