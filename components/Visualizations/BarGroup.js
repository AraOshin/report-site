import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryGroup,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLegend,
  VictoryClipContainer,
} from 'victory';
import theme from './victoryTheme';
import { DataContext } from '../../pages/index';

const BarGroup = ({ dataContext, legendLabels, subsectionId }) => (

  <DataContext.Consumer>
    {data => (
      <VictoryChart
        theme={theme}
        width={400}
        domainPadding={{ x: [50, 50], y: [0, 5] }}
        minDomain={{ y: 0 }}
        groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
      >

        <VictoryLegend x={50}
          groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
          titleOrientation='top'
          orientation='vertical'
          data={[
            { name: legendLabels[0] },
            { name: legendLabels[1] },
          ]}
        />

        <VictoryAxis
          groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
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
        <VictoryGroup
          groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
          offset={19}
        >

          <VictoryBar
            groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
            data={data.policingReportsByYear}
            x="year"
            y="targetAreaDispatchedCalls"
          />

          <VictoryBar
            groupComponent={<VictoryClipContainer clipId={`barGroup${subsectionId}`} />}
            data={data.policingReportsByYear}
            x="year"
            y="targetAreaTotalReports"
          />


        </VictoryGroup>
      </VictoryChart>
    )}
  </DataContext.Consumer>

);

BarGroup.propTypes = {
  dataContext: PropTypes.string,
  subsectionId: PropTypes.string,
  legendLabels: PropTypes.array,
};
export default BarGroup;
