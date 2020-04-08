import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ResponsiveContainer } from 'recharts';

const Visualization = ({ visualizationOption, selectingCountries }) => {
  const { Component, query, config, parseData } = visualizationOption;

  const { loading, data } = useQuery(query, {
    variables: { selectingCountries },
  });
  if (loading) return null;

  return (
    <ResponsiveContainer width='100%' height={700}>
      <Component
        width={1400}
        height={700}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        data={parseData(data)}
        config={config}
      />
    </ResponsiveContainer>
  );
};

export default Visualization;
