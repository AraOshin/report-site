import React from 'react';
import {
  VictoryScatter, VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryLegend, LineSegment
} from 'victory';
import theme from './victoryTheme';
const moment = require('moment');

const ScatterPlot = ({ data }) => (

  <VictoryChart
    theme={theme}
  >

    <VictoryAxis
      crossAxis
      fixLabelOverlap
      tickLabelComponent={<VictoryLabel dy={10} />}
      style={{ tickLabels: { stroke: 'red' } }}
      tickFormat={(label) => `${moment(label).format('YYYY')} \n ${moment(label).format('MMMM')}`}
    />
    <VictoryAxis
      dependentAxis
      crossAxis
      axisLabelComponent={<VictoryLabel dy={-15} />}
      label="label"
    />

    <VictoryLegend />

    <VictoryLine
      style={{
        data: { stroke: '#2FD89F', },
        parent: { border: '1px solid #ccc' },
      }}
      data={data}
      x={0}
      y={1}
    />

    <VictoryScatter
      size={1}
      data={data}
      x={0}
      y={1}
    />
  </VictoryChart>
);
export default ScatterPlot;
