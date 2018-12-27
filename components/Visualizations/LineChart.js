import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryClipContainer,
} from 'victory';
import theme from './victoryTheme';

import { DataContext } from '../../pages/index';

const LineChart = ({ dataContext, legendLabel, subsectionId }) => (

  <DataContext.Consumer>
    {data => (
      <VictoryChart
        theme={theme}
        domainPadding={{ x: [30, 10], y: [0, 5] }}
        minDomain={{ y: 0 }}

        groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
      >

        <VictoryLegend
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
          x={50}
          y={10}
          data={[
            { name: legendLabel },
          ]}
        />

        <VictoryAxis
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
          fixLabelOverlap
          tickFormat={(label) => `${moment(label).format('YYYY')}\n${moment(label).format('MMM')}`}
        />

        <VictoryAxis
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
          dependentAxis
          crossAxis={false}
          style={{
            axis: { stroke: "white" },
            grid: { stroke: "#D8D8D8" },
          }}
        />


        <VictoryLine
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
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

LineChart.propTypes = {
  dataContext: PropTypes.string,
  subsectionId: PropTypes.string,
  legendLabel: PropTypes.string,
};

export default LineChart;



// tickCount={parseInt((data[dataContext].length / 3), 10)}