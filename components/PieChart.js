import React from 'react';
import {
  VictoryPie, VictoryChart,
} from 'victory';
import theme from './victoryTheme';

const PieChart = props => (


  <VictoryPie
    theme={theme}
    data={props.data}
    x={0}
    y={1}
  />

);
export default PieChart;
