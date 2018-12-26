import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryBar, VictoryAxis, VictoryChart, VictoryLabel, VictoryClipContainer,
} from 'victory';
import theme from './victoryTheme';
import { DataContext } from '../../pages/index';


const BarChart = ({ dataContext, subsectionId }) => (

  <DataContext.Consumer>
    {data => (
      <VictoryChart
        domainPadding={3}
        theme={theme}
        groupComponent={<VictoryClipContainer clipId={`barChart${subsectionId}`} />}
      >
        <VictoryAxis
          groupComponent={<VictoryClipContainer clipId={`barChart${subsectionId}`} />}
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
          groupComponent={<VictoryClipContainer clipId={`barChart${subsectionId}`} />}
          dependentAxis
          crossAxis
          label="Number of Sites Swept"
        />

        <VictoryBar
          groupComponent={<VictoryClipContainer clipId={`barChart${subsectionId}`} />}
          data={data[dataContext]}
          x={0}
          y={1}
        />

      </VictoryChart>
    )}
  </DataContext.Consumer>
);

BarChart.propTypes = {
  dataContext: PropTypes.object,
  subsectionId: PropTypes.string,
};

export default BarChart;
