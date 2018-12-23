import React from 'react';
import {
  VictoryBar, VictoryAxis, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';


const ReportsPerUniqueSiteVis = ({ data }) => (

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

      data={data}
      x={0}
      y={1}
    />

  </VictoryChart>
);

export default ReportsPerUniqueSiteVis;
