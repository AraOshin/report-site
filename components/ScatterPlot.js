import React from 'react';
import {
  VictoryScatter, VictoryAxis, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const ScatterPlot = ({ data, x, y }) => (
  <VictoryChart
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
      axisLabelComponent={<VictoryLabel dy={-3} />}
      label="Public Campsite Reports Filed"
    />

    <VictoryScatter
      size={2}
      data={data}
      x={x}
      y={y}
    />
  </VictoryChart>
);
export default ScatterPlot;
