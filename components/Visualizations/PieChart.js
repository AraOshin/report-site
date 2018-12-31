import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryPie, VictoryContainer, VictoryChart, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const PieChart = () => (
  <div className="pie-vis-layout">


    <div className="pie-vis-row-3">
      <div className="report-vis-pie">

        <div className="pie-title-text">
          <div>Public Perception of</div>
          <div>Trash/Biohazards</div>
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 57], ['no', 43]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">

          <div>Public Perception of</div>
          <div>Misuse of Public Space </div>
        </div>
        <VictoryPie
          theme={theme}


          data={[['yes', 43], ['no', 57]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          {/* Percieved Presence of Structures/Tents */}
          <div>Public Perception of</div>
          <div>Structures/Tents Present </div>
        </div>


        <VictoryPie
          theme={theme}

          data={[['yes', 39], ['no', 61]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />
      </div>

    </div>

    <div className="pie-vis-row-4">
      <div className="report-vis-pie">
        <div className="pie-title-text">
          {/* Percieved Right-of-Way Obstruction */}
          <div>Public Perception of</div>
          <div>Right-of-Way Obstruction </div>
        </div>

        <VictoryPie
          theme={theme}

          data={[['yes', 31], ['no', 69]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />

      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          <div>Public Perception of</div>
          <div>Environmental Damage</div>
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 27], ['no', 73]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />

      </div>
      <div className="report-vis-pie">

        <div className="pie-title-text">
          Public Perception of Intoxication/Drug Use
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 23], ['no', 77]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}

        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          <div>Public Perception of</div>
          <div>Aggressive Behavior</div>
        </div>


        <VictoryPie
          theme={theme}

          data={[['yes', 19], ['no', 81]]}
          x={0}
          y={1}
          labelRadius={95}
          innerRadius={80}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
        />
      </div>


    </div>


  </div>

);
export default PieChart;
