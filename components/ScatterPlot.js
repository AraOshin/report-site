import React from 'react';
import {
  VictoryScatter, VictoryAxis, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const ScatterPlot = props => (
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
      data={props.data}
      x={0}
      y={1}
    />
  </VictoryChart>
);
export default ScatterPlot;
