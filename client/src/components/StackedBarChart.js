// https://jsfiddle.net/alidingling/90v76x08/

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const StackedBarChart = ({ width, height, margin, data, config }) => {
  const Bars = config.bars.map((b) => (
    <Bar
      key={b.dataKey}
      dataKey={b.dataKey}
      stackId={b.stackId}
      fill={b.fill}
    />
  ));

  return (
    <BarChart width={width} height={height} margin={margin} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={config.xAxis.dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {Bars}
    </BarChart>
  );
};

export default StackedBarChart;
