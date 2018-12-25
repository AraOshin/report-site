import React from 'react';
import {
  VictoryGroup,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLegend,
} from 'victory';
import theme from './victoryTheme';
import { DataContext } from '../../pages/index';

const BarGroup = ({ dataContext, legendLabels }) => (

  <DataContext.Consumer>
    {data => (
      <VictoryChart
        theme={theme}
        width={400}
        domainPadding={{ x: [50, 50], y: [0, 5] }}
        minDomain={{ y: 0 }}
      >

        <VictoryLegend x={50}
          titleOrientation='top'
          orientation='vertical'
          data={[
            { name: legendLabels[0] },
            { name: legendLabels[1] },
          ]}
        />

        <VictoryAxis
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
        <VictoryGroup offset={19}>
          <VictoryBar
            data={data.policingReportsByYear}
            x="year"
            y="targetAreaDispatchedCalls"
          />

          <VictoryBar
            data={data.policingReportsByYear}
            x="year"
            y="targetAreaTotalReports"
          />


        </VictoryGroup>
      </VictoryChart>
    )}
  </DataContext.Consumer>

);
export default BarGroup;
