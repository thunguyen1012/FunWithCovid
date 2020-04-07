import StackedAreaChart from './components/StackedAreaChart';
import StackedBarChart from './components/StackedBarChart';

import { GET_COUNTRIES, GET_HISTORICAL } from './services/CovidServices';

const COLORS = ['#F37022', '#0072BB', '#565554', '#2E86AB', '#AED5BB'];

export const VisualizationOptions = {
  summary: {
    Component: StackedBarChart,
    query: GET_COUNTRIES,
    config: {
      bars: [
        {
          dataKey: 'tests',
          stackId: 'a',
          fill: COLORS[0],
        },
        {
          dataKey: 'cases',
          stackId: 'a',
          fill: COLORS[1],
        },
        {
          dataKey: 'deaths',
          stackId: 'a',
          fill: COLORS[2],
        },
        {
          dataKey: 'active',
          stackId: 'a',
          fill: COLORS[3],
        },
        {
          dataKey: 'recovered',
          stackId: 'a',
          fill: COLORS[4],
        },
      ],
      xAxis: {
        dataKey: 'country',
      },
    },
  },
  historical: {},
};
