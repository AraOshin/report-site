import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryClipContainer,
  VictoryCursorContainer,
  VictoryVoronoiContainer,
  VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

import { DataContext } from '../../pages/index';

const LineChart = ({
  dataContext, legendLabel, subsectionId, yMax, twoLineVis,
}) => (

    <DataContext.Consumer>
      {data => (
        <VictoryChart
          theme={theme}
          domainPadding={{ x: [30, 10], y: [0, 5] }}
          minDomain={{ y: 0 }}

          maxDomain={yMax > 0 ? { y: yMax } : null}
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}


        >

          <VictoryLegend
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            x={50}
            y={10}
            data={[
              { name: 'legendLabel legendLabel legendLabel Label' },
            ]}
          />


          <VictoryAxis
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            tickFormat={['2015 Nov', '2018 Oct']}
            tickValues={['2016 Oct 10', 1, 2, 3]}

          />

          <VictoryAxis
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            dependentAxis
            crossAxis={false}
            style={{
              axis: { stroke: 'white' },
              grid: { stroke: '#D8D8D8' },
            }}
          />

          {/* <VictoryLabel
            text="text label:"
            data={data[dataContext]}
            x={325}
            y={25}
          /> */}

          <VictoryLine
            name="line-vis"
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            style={{
              data: { stroke: '#2FD89F' },
              parent: { border: '1px solid #ccc' },
            }}
            data={data[dataContext]}
            x={0}
            y={1}
          />

          {
            twoLineVis && (
              <VictoryLine
                groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
                style={{
                  data: { stroke: '#2FD89F' },
                  parent: { border: '1px solid #ccc' },
                }}
                data={data.uniqueSitesWeeklyData}
                x={0}
                y={1}
              />
            )
          }
        </VictoryChart>

      )}
    </DataContext.Consumer>

);

LineChart.propTypes = {
  dataContext: PropTypes.string,
  subsectionId: PropTypes.string,
  legendLabel: PropTypes.string,
  yMax: PropTypes.number,
};

export default LineChart;
