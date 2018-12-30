import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryPie, VictoryContainer, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const PieChart = () => (
  <div className="pie-vis-layout">

    <div className="pie-vis-row-2">
      <div className="report-vis-pie">


        <div className='pie-title-text'>
          Public Perception of Trash/Biohazards
        </div>

        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />

      </div>

      <div className="report-vis-pie">

        <VictoryLabel text='title' />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />

      </div>

    </div>

    <div className="pie-vis-row-2">
      <div className="report-vis-pie">

        <VictoryLabel text='title' />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />

      </div>

      <div className="report-vis-pie">

        <VictoryLabel text='title' />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />

      </div>
    </div>
    <div className="pie-vis-row-3">
      <div className="report-vis-pie">

        <VictoryLabel text='title' />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />
      </div>

      <div className="report-vis-pie">

        <VictoryLabel text='title' />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />
      </div>

      <div className="report-vis-pie">

        <VictoryLabel
          text='Public Perception of Aggressive Behavior'
          textAnchor='middle'
          padding={0}
        />
        <VictoryPie
          theme={theme}
          data={['false', '25%']}
          x={0}
          y={1}
          innerRadius={100}
        />
      </div>

    </div>

  </div>

);
export default PieChart;
