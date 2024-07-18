// react import
import React from 'react';
// mantine import
import { AreaChart } from '@mantine/charts';
// libs import

export type AreaChartPropsType = {
  data: Record<string, any>[];
  label: string;
  color: string;
  dataKey: string;
  unit: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
};

const MyAreaChart = ({ areaChartProps }: { areaChartProps: AreaChartPropsType }) => {
  return (
    <AreaChart
      h={200}
      data={areaChartProps.data}
      dataKey={areaChartProps.dataKey}
      valueFormatter={(value: number) => {
        // format to k if greater than 1000
        if (value > 1000) {
          return `${value / 1000}k`;
        }
        return value.toString();
      }}
      unit={areaChartProps.unit}
      series={[{ name: 'value', label: areaChartProps.label, color: areaChartProps.color }]}
    />
  );
};

export default MyAreaChart;
