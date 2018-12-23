import React from 'react';
import {
  VictoryPie, VictoryContainer,
} from 'victory';
import theme from './victoryTheme';

const PieChart = props => (

  <div className="pieChartsVis">
    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />

    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />
    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />

    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />
    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />

    <VictoryPie
      theme={theme}
      data={props.data}
      innerRadius={100}
      x={0}
      y={1}
    />


  </div>

);
export default PieChart;
