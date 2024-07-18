import { ChartDataType } from './chart-data';
import { AreaChartPropsType } from '@/components/dashboard/my-area-chart';
import { carbonMonoxideDatas } from './carbon-monoxide-data';
import { ozonDatas } from './ozon-data';

export const airChartDatas: ChartDataType<AreaChartPropsType>[] = [
  {
    title: 'Carbon Dioxide (CO2) Levels Graph',
    chartProps: {
      data: carbonMonoxideDatas,
      label: 'Karbon Monoksida',
      color: 'indigo',
      dataKey: 'hour',
      unit: 'ppm',
      xAxisLabel: 'Jam',
      yAxisLabel: 'Kadar Karbon Dioksida (ppm)',
    },
  },
  {
    title: 'Ozone Gas (O3) Levels Graph',
    chartProps: {
      data: ozonDatas,
      label: 'Gas Ozon',
      color: 'red',
      dataKey: 'hour',
      unit: 'ppm',
      xAxisLabel: 'Jam',
      yAxisLabel: 'Kadar Gas Ozon (ppm)',
    },
  },
];
