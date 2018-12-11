import React from 'react';
import {
  VictoryBar, VictoryAxis, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const BarChart = props => (
  <VictoryChart
    domainPadding={3}
    theme={theme}
  >
    <VictoryAxis
      crossAxis
      label="Date"
      fixLabelOverlap

      tickLabelComponent={(
        <VictoryLabel
          angle={30}
          textAnchor="start"
          verticalAnchor="end"
        />
      )}
    />
    <VictoryAxis
      dependentAxis
      crossAxis
      label="Number of Sites Swept"
    />
    <VictoryBar

      data={props.data}
      x={0}
      y={1}
    />
  </VictoryChart>
);

export default BarChart;
