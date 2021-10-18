import { format } from 'date-fns';

import StackedAreaChart from './components/StackedAreaChart';
import StackedBarChart from './components/StackedBarChart';
import SimpleLineChart from './components/SimpleLineChart';

import { GET_COUNTRIES, GET_HISTORICAL, GET_VACCINE_HISTORICAL } from './services/CovidServices';

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
      const seriesName = data.historical[0].country;
      const { cases, deaths, recovered } = data.historical[0].timeline;
      const length = cases.length;
      const parsedData = [];
      for (let i = 0; i < length; i++) {
        parsedData.push({
          seriesName,
          date: format(new Date(cases[i].date), 'yyyy-MM-dd'),
          cases: cases[i].value,
          deaths: deaths[i].value,
          recovered: recovered[i].value,
        });
      }
      return parsedData;
    },
  },
  vaccineHistorical: {
    Component: SimpleLineChart,
    query: GET_VACCINE_HISTORICAL,
    config: {
      lines: [
        {
          type: 'monotone',
          dataKey: 'doses',
          stroke: COLORS[1]
        }
      ],
      xAxis: {
        dataKey: 'date',
      },
    },
    parseData: (data) => {
      const seriesName = data.vaccineHistorical[0].country;
      const timeline = data.vaccineHistorical[0].timeline;
      const length = timeline.length;
      const parsedData = [];
      for (let i = 0; i < length; i++) {
        parsedData.push({
          seriesName,
          date: format(new Date(timeline[i].date), 'yyyy-MM-dd'),
          doses: timeline[i].value
        });
      }
      return parsedData;
    },
  },
};
