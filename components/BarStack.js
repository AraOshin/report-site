import React from 'react';
import { VictoryStack, VictoryBar, VictoryAxis, VictoryChart } from 'victory';

const BarStack = props => (
  <div>

    <VictoryChart>

      <VictoryStack
        colorScale={["tomato", "orange", "gold"]}
      >

        <VictoryBar
          data={props.data}
        />
        <VictoryBar
          data={props.dataSweeps}
        />
      </VictoryStack>
      <VictoryAxis dependentAxis
        tickFormat={(tick) => `${tick}%`}
      />
      <VictoryAxis
        tickValues={['March 2017', 'April 2018']}

      />

    </VictoryChart >
  </div>


);


export default BarStack;
