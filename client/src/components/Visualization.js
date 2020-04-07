import React from 'react';
import { Space } from 'antd';
import { useQuery } from '@apollo/react-hooks';

const Visualization = ({ visualizationOption, selectingCountries }) => {
  const { Component, query, config } = visualizationOption;

  const { loading, data } = useQuery(query, {
    variables: { selectingCountries },
  });
  if (loading) return null;

  return (
    <Space>
      <Component
        width={1400}
        height={700}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        data={data.countries}
        config={config}
      />
    </Space>
  );
};

export default Visualization;
