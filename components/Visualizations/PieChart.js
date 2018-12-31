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
          Public Perception of Trash/Biohazards
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">

          <div>Public Perception of</div>
          <div>Misuse of Public Space </div>
        </div>
        <VictoryPie
          theme={theme}


          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          Percieved Presence of Structures/Tents
        </div>

        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />
      </div>

    </div>

    <div className="pie-vis-row-4">
      <div className="report-vis-pie">
        <div className="pie-title-text">
          Public Perception of Trash/Biohazards
        </div>

        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />

      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          Percieved Presence Of Structures/Tents
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />

      </div>
      <div className="report-vis-pie">

        <div className="pie-title-text">
          Percieved Presence Of Structures/Tents
        </div>
        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />
      </div>

      <div className="report-vis-pie">

        <div className="pie-title-text">
          Percieved Right-of-Way Obstruction
        </div>


        <VictoryPie
          theme={theme}

          data={[['yes', 25], ['no', 75]]}
          x={0}
          y={1}
          labels={d => `${d[1]}% \n ${d[0]}`}
          colorScale={['#2FD89F', '#4992D5']}
          style={{ labels: { fill: '#0B2B40', fontSize: 20, fontFamily: "'Lato', 'sans-serif'" } }}
          innerRadius={100}
        />
      </div>


    </div>


  </div>

);
export default PieChart;
