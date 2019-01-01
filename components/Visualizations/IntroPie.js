import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryPie, VictoryLegend, VictoryChart, VictoryLabel,
  VictoryClipContainer,
} from 'victory';
import theme from './victoryTheme';

const IntroPie = () => (

  <div className="report-vis-pie">

    <div className="intro-pie-title-text">

      <div>Total Estimated Costs of Sweep-Evictions</div>
      <div>Data by Evans & Lindsay 2018</div>
    </div>

    <div>
      <VictoryLegend
        groupComponent={<VictoryClipContainer clipId="IntroPie" />}
        x={50}
        y={0}
        height={85}
        title="LEGEND"
        orientation="virtical"
        colorScale={['#2FD89F', '#4992D5']}
        data={[
          { name: 'Annual City Spending on Sweeps/Evictions' },
          { name: 'Annual City Spending on Reallocated Personnel Costs' },
        ]}
      />


      <VictoryPie
        theme={theme}
        width={400}
        height={350}
        data={[['($1,238,868)', 25], ['($3,579,438)', 74]]}
        x={0}
        y={1}
        labelRadius={40}
        innerRadius={30}
        labels={d => `${d[1]}% \n ${d[0]}`}
        colorScale={['#2FD89F', '#4992D5']}
        style={{
          labels: {
            fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'", fontWeight: '700',
          },
        }}

      />
    </div>


  </div>

);
export default IntroPie;
