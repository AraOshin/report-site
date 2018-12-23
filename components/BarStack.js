// import React from 'react';
// import {
//   VictoryStack, VictoryBar, VictoryAxis, VictoryChart, VictoryLabel,
// } from 'victory';

// import theme from './victoryTheme';

// const BarStack = props => (
//   <div>

//     <VictoryChart
//       domainPadding={3}
//       theme={theme}
//     >

//       <VictoryAxis
//         crossAxis
//         label="Date"
//         fixLabelOverlap

//         tickLabelComponent={(
//           <VictoryLabel
//             angle={30}
//             textAnchor="start"
//             verticalAnchor="end"
//           />
//         )}
//       />
//       <VictoryAxis
//         fixLabelOverlap
//         dependentAxis
//         crossAxis
//         label="Unique campsites and campsite reports"
//       />

//       <VictoryStack
//         colorScale={['tomato', 'orange', 'gold']}
//       >

//         <VictoryBar
//           data={props.data}
//           x="Week"
//           y="estimatedSites"
//         />
//         <VictoryBar
//           data={props.data}
//           x="Week"
//           y="totalReports"
//         />

//         <VictoryBar
//           data={props.sweepsData}
//           x={0}
//           y={1}
//         />
//       </VictoryStack>

//     </VictoryChart>
//   </div>


// );


// export default BarStack;
