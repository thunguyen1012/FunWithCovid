import React, { useState } from 'react';

import { Button, Select, Space } from 'antd';
import { VisualizationOptions } from '../chartConfig';
import { GET_COUNTRY_NAMES } from "../services/CovidServices";

import Visualization from '../components/Visualization';

const { Option } = Select;
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
          onClick={() =>
            setVisualizationOption(VisualizationOptions['summary'])
          }>
          Summary View
        </Button>
        <Button
          size='large'
          type='primary'
          onClick={() =>
            setVisualizationOption(VisualizationOptions['historical'])
          }>
          Historical View
        </Button>
        <Button
          size='large'
          type='primary'
          onClick={() =>
            setVisualizationOption(VisualizationOptions['vaccineHistorical'])
          }>
          Vaccine Historical View
        </Button>
      </Space>
      <Visualization
        visualizationOption={visualizationOption}
        selectingCountries={selectingCountries}
      />
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
