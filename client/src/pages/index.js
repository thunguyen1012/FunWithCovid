import React, { useState } from 'react';
import gql from 'graphql-tag';

import { Button, Select, Space } from 'antd';
const { Option } = Select;

const GET_COUNTRY_NAMES = gql`
  query {
    countries {
      country
    }
  }
`;

const GET_COUNTRIES = gql`
  query {
    countries {
      country
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      tests
    }
  }
`;

const GET_HISTORICAL = gql`
  query {
    historical {
      country
      timeline {
        cases {
          date
          value
        }
        deaths {
          date
          value
        }
        recovered {
          date
          value
        }
      }
    }
  }
`;

const VisualizationOptions = {
  summary: 0,
  historical: 1,
};

const Index = ({ data }) => {
  // set debugger to debug at server
  // debugger
  const [selectingCountries, setSelectingCountries] = useState([]);
  const [visualizationOption, setVisualizationOption] = useState(
    VisualizationOptions['summary']
  );

  const options = [];
  for (let i = 0; i < data.countries.length; i++) {
    const country = data.countries[i].country;
    options.push(<Option key={country}>{country}</Option>);
  }

  return (
    <div className='container' style={{ width: '75vw', margin: '20px auto' }}>
      <div>Covid Statistic</div>
      <div style={{ marginTop: 8 }}>
        <Select
          mode='multiple'
          style={{ width: '100%' }}
          placeholder='Please select countries...'
          onChange={setSelectingCountries}>
          {options}
        </Select>
      </div>
      <Space style={{ marginTop: 8 }}>
        <Button
          size='large'
          type='primary'
          disabled={visualizationOption === VisualizationOptions['summary']}
          onClick={() =>
            setVisualizationOption(VisualizationOptions['summary'])
          }>
          Summary View
        </Button>
        <Button
          size='large'
          type='primary'
          disabled={visualizationOption === VisualizationOptions['historical']}
          onClick={() =>
            setVisualizationOption(VisualizationOptions['historical'])
          }>
          Historical View
        </Button>
      </Space>
      <div style={{ marginTop: 8 }} className='chartContainer'>
        Chart goes here - {visualizationOption} - {selectingCountries}
      </div>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  // set debugger to debug at server
  // debugger
  try {
    const { data, loading } = await ctx.apolloClient.query({
      query: GET_COUNTRY_NAMES,
    });
    return { data, loading };
  } catch (error) {
    return { error };
  }
};

export default Index;
