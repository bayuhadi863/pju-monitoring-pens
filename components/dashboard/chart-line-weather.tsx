import { LineChart } from '@mantine/charts';
import React from 'react';

const data = [
  { name: '10.06.19', Humidity: 100, Temperature: 24 },
  { name: '11.06.19', Humidity: 60, Temperature: 19 },
  { name: '12.06.19', Humidity: 100, Temperature: 11 },
  { name: '13.06.19', Humidity: 20, Temperature: 29 },
  { name: '14.06.19', Humidity: 40, Temperature: 20 },
  { name: '15.06.19', Humidity: 90, Temperature: 18 },
  { name: '16.06.19', Humidity: 30, Temperature: 32 },
];

function ChartLineWeather() {
  return (
    <LineChart
      h={100}
      data={data}
      dataKey='name'
      withRightYAxis
      yAxisLabel='Humidity [rH %]'
      rightYAxisLabel='Temperature [°C]'
      series={[
        { name: 'Humidity', color: 'red.6' },
        { name: 'Temperature', color: 'cyan.4', yAxisId: 'right' },
      ]}
    />
  );
}

export default ChartLineWeather;
