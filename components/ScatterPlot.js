import React from 'react';
import moment from 'moment';
import {
  VictoryScatter,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLegend,
} from 'victory';
import theme from './victoryTheme';

import { DataContext } from '../pages/index';

const ScatterPlot = ({ dataContext, legendLabel }) => (

  <DataContext.Consumer>
    {data => (
      <VictoryChart
        theme={theme}
        domainPadding={{ x: [30, 10], y: [0, 5] }}
        minDomain={{ y: 0 }}
      >

        <VictoryLegend x={50}
          data={[
            { name: legendLabel },
          ]}
        />

        <VictoryAxis
          fixLabelOverlap
          tickFormat={(label) => `${moment(label).format('YYYY')}\n${moment(label).format('MMMM')}`}
          tickCount={(data[dataContext].length / 3)}
        />

        <VictoryAxis
          dependentAxis
          crossAxis={false}
          style={{
            axis: { stroke: "white" },
            grid: { stroke: "#D8D8D8" },
          }}
        />


        <VictoryLine
          interpolation="monotoneX"
          style={{
            data: { stroke: '#2FD89F' },
            parent: { border: '1px solid #ccc' },
          }}
          data={data[dataContext]}
          x={0}
          y={1}
        />

        {/* <VictoryLine
          interpolation="linear"
          style={{
            data: { stroke: 'red', strokeWidth: 1, },
            parent: { border: '1px solid #ccc' },
          }}
          data={data[dataContext]}
          x={0}
          y={1}
        /> */}

        {/* <VictoryScatter
      size={1}
      data={data}
      x={0}
      y={1}
    /> */}

      </VictoryChart>

    )}
  </DataContext.Consumer>

);
export default ScatterPlot;
