import React from 'react';
import moment from 'moment';
import {
  VictoryGroup,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLegend,
} from 'victory';
import theme from './victoryTheme';

import { DataContext } from '../pages/index';

const BarGroup = ({ data }) => (

  <VictoryChart
    theme={theme}
    domainPadding={{ x: [50, 50], y: [0, 5] }}
    minDomain={{ y: 0 }}
  >

    <VictoryLegend x={50}

      data={[
        { name: 'crime reports filed' },
        { name: 'crime reports filed in CES' },
      ]}
    />

    <VictoryAxis
      tickValues={[2016, 2017, 2018]}
      style={{
        axis: { stroke: "white" },
      }}
    />

    <VictoryAxis
      dependentAxis
      crossAxis={false}
      style={{
        axis: { stroke: "white" },
        grid: { stroke: "#D8D8D8" },
      }}
    />
    <VictoryGroup offset={31}>
      <VictoryBar
        data={data}
        x="year"
        y="totalReports"
      />

      <VictoryBar
        data={data}
        x="year"
        y="targetAreaTotalReports"
      />


    </VictoryGroup>
  </VictoryChart>

);
export default BarGroup;
