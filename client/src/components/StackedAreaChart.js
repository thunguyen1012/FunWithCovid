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

const StackedAreaChart = ({ width, height, margin, data, config }) => {
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
      <Tooltip />
      <Legend />
      {Areas}
    </AreaChart>
  );
};

export default StackedAreaChart;
