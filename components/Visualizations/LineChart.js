import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryClipContainer,
  VictoryVoronoiContainer,
  VictoryTooltip,
  LineSegment,
} from 'victory';
import theme from './victoryTheme';

import { DataContext } from '../../pages/index';

const CustomFlyout = ({
  x,
  lineColor,
  datum,
  toolTipLabel,
}) => (
    <g>
      <LineSegment
        x1={x}
        x2={x}
        y1={50}
        y2={250}
        style={{ stroke: '#D8D8D8', strokeWidth: 2 }}
      />
      <rect
        x={55}
        y={66}
        width={175}
        height={20}
        fill="white"
        style={{ opacity: 0.8 }}
      />

      <text
        x={65}
        y={80}
        fill={lineColor}
        style={{ fontSize: 10, fontFamily: 'Open Sans' }}
      >
        {`Week of\n${moment(datum[0]).format('MMM DD, YYYY')}:\n ${datum[1]} ${toolTipLabel}`}
      </text>
    </g>
);

CustomFlyout.propTypes = {
  x: PropTypes.number,
  lineColor: PropTypes.string,
  datum: PropTypes.object,
  toolTipLabel: PropTypes.string,
};


const LineChart = ({
  dataContext, legendLabel, subsectionId, yMax, twoLineVis, lineColor, toolTipLabel,
}) => (

    <DataContext.Consumer>
      {data => (
        <VictoryChart
          theme={theme}
          domainPadding={{ x: [30, 10], y: [0, 5] }}
          minDomain={{ y: 0 }}
          maxDomain={yMax > 0 ? { y: yMax } : null}
          groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
          containerComponent={(
            <VictoryVoronoiContainer
              style={{
                labels: { fontSize: 100 },
              }}
              labels={d => ''} // eslint-disable-line
              labelComponent={(
                <VictoryTooltip
                  flyoutComponent={<CustomFlyout lineColor={lineColor} toolTipLabel={toolTipLabel} />}
                />


              )}
            />
          )}

        >

          <VictoryLegend
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            x={50}
            y={twoLineVis ? 0 : 15}
            data={twoLineVis
              ? [
                { name: legendLabel[0] },
                { name: legendLabel[1] },
              ]

              : [{ name: legendLabel }]}

            colorScale={[lineColor, ' #4992D5']}
            orientation={twoLineVis
              ? 'virtical'
              : 'horizontal'}


          />


          <VictoryAxis
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}

            fixLabelOverlap
            tickFormat={label => `${moment(label).format('YYYY')}\n${moment(label).format('MMM')}`}
            tickCount={parseInt((data[dataContext].length / 13), 10)}

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


          <VictoryLine
            name="line-vis"
            groupComponent={<VictoryClipContainer clipId={`lineChart${subsectionId}`} />}
            style={{
              data: { stroke: lineColor },
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
                  data: { stroke: '#4992D5' },
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
  legendLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  yMax: PropTypes.number,
  lineColor: PropTypes.string,
  twoLineVis: PropTypes.bool,
  toolTipLabel: PropTypes.string,
};

export default LineChart;
