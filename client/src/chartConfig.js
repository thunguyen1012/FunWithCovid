import { format } from 'date-fns';

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
    parseData: ({ countries }) => countries,
  },
  historical: {
    Component: StackedAreaChart,
    query: GET_HISTORICAL,
    config: {
      areas: [
        {
          type: 'monotone',
          dataKey: 'cases',
          stackId: 'a',
          stroke: COLORS[1],
          fill: COLORS[1],
        },
        {
          type: 'monotone',
          dataKey: 'deaths',
          stackId: 'a',
          stroke: COLORS[2],
          fill: COLORS[2],
        },
        {
          type: 'monotone',
          dataKey: 'recovered',
          stackId: 'a',
          stroke: COLORS[4],
          fill: COLORS[4],
        },
      ],
      xAxis: {
        dataKey: 'date',
      },
    },
    parseData: (data) => {
      const { cases, deaths, recovered } = data.historical[0].timeline;
      const length = cases.length;
      const parsedData = [];
      for (let i = 0; i < length; i++) {
        parsedData.push({
          date: format(new Date(cases[i].date), 'yyyy-MM-dd'),
          cases: cases[i].value,
          deaths: deaths[i].value,
          recovered: recovered[i].value,
        });
      }
      return parsedData;
    },
  },
};
