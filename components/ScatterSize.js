import React from 'react';
import {
  VictoryScatter, VictoryLabel,
} from 'victory';
import theme from './victoryTheme';

const ScatterSize = props => (
  <div style={{ width: '50%', height: '80%' }}>

    <VictoryScatter
      maxBubbleSize={25}
      minBubbleSize={5}
      theme={theme}
      bubbleProperty="count"
      labels={datum => `${datum.year}: ${datum.count} `}
      data={[
        {
          x: 1, y: 1, count: 4215, year: 2016,
        },
        {
          x: 1, y: 2, count: 15291, year: 2017,
        },
        {
          x: 1, y: 3, count: 20349, year: 2018,
        },
      ]}
    />

  </div>


);
export default ScatterSize;
