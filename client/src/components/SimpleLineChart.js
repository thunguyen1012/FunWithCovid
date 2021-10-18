// https://jsfiddle.net/alidingling/90v76x08/

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SimpleLineChart = ({ width, height, margin, data, config }) => {
  const Lines = config.lines.map((b) => (
    <Line
      key={b.dataKey}
      dataKey={b.dataKey}
      stackId={b.stackId}
      fill={b.fill}
    />
  ));

  return (
    <LineChart width={width} height={height} margin={margin} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={config.xAxis.dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {Lines}
    </LineChart>
  );
};

export default SimpleLineChart;
