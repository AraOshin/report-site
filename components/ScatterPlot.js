import React from 'react';
import {
  VictoryScatter, VictoryAxis, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const ScatterPlot = props => (
  <VictoryChart
    theme={theme}
  >
    <VictoryScatter
      size={5}
      data={props.data}
      x={0}
      y={1}
    />
  </VictoryChart>
);
export default ScatterPlot;
