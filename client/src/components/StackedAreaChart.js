//https://jsfiddle.net/alidingling/c1rLyqj1/

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import AreaTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const StackedAreaChart = ({ width, height, margin, data, config }) => {
  const { seriesName } = data[0];

  const Areas = config.areas.map((i) => (
    <Area
      key={i.dataKey}
      type={i.type}
      dataKey={i.dataKey}
      stackId={i.stackId}
      stroke={i.stroke}
      fill={i.fill}
    />
  ));

  return (
    <AreaChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={config.xAxis.dataKey} />
      <YAxis />
      <Tooltip content={<AreaTooltip />} />
      <Legend content={<CustomLegend seriesName={seriesName} />} />
      {Areas}
    </AreaChart>
  );
};

export default StackedAreaChart;
