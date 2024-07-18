import { humidityData } from './humidity-data';
import { temperatureData } from './temperature-data';
import { AreaChartPropsType } from '@/components/dashboard/my-area-chart';

export type ChartDataType<T> = {
  title: string;
  chartProps: T;
};

export type ChartValueDataType = {
  hour: string;
  value: number;
};

export const allChartData: ChartDataType<AreaChartPropsType>[] = [
  {
    title: 'Air Humidity Graph',
    chartProps: {
      data: humidityData,
      label: 'Kelembapan Udara',
      color: 'indigo',
      dataKey: 'hour',
      unit: '%',
      xAxisLabel: 'Jam',
      yAxisLabel: 'Kelembapan Udara (%)',
    },
  },
  {
    title: 'Temperature Graph',
    chartProps: {
      data: temperatureData,
      label: 'Suhu',
      color: 'red',
      dataKey: 'hour',
      unit: '°C',
      xAxisLabel: 'Jam',
      yAxisLabel: 'Suhu (°C)',
    },
  },
];
