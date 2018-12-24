

// Colors
const colors = [
  '#2FD89F',
  '#0B2B40',
  '#02B67A',
  '#4992D5',
  'D8D8D8',
  'purple',
  'pink',
];
const lightBlue = colors[3];
const darkBlue = colors[1];

const lightGreen = colors[0];
const lightGrey = colors[4];

// Typography
const sansSerif = 'sans-serif';
const openSans = 'Open Sans';
const letterSpacing = 'normal';
const fontSize = 9;

// Layout
const baseProps = {
  width: 600,
  height: 300,
  colorScale: colors,
};

// Labels
const baseLabelStyles = {
  fontFamily: openSans,
  fontSize,
  letterSpacing,
  padding: 8.2,
  fill: darkBlue,
  stroke: 'transparent',
};
const centeredLabelStyles = Object.assign({ textAnchor: 'middle' }, baseLabelStyles);

// Strokes
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

// Put it all together...
const theme = {
  area: Object.assign({
    style: {
      data: {
        fill: lightBlue,
      },
      labels: centeredLabelStyles,
    },
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: 'transparent',
        stroke: darkBlue,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin,
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding: 25,
      }),
      grid: {
        fill: 'none',
        stroke: 'none',
        pointerEvents: 'painted',
      },
      ticks: {
        fill: 'transparent',
        size: 1,
        stroke: 'transparent',
      },
      tickLabels: baseLabelStyles,
    },
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: lightBlue,
        padding: 8,
        strokeWidth: 0,
      },
      labels: baseLabelStyles,
    },
  }, baseProps),
  boxplot: Object.assign({
    style: {
      max: { padding: 8, stroke: lightBlue, strokeWidth: 1 },
      maxLabels: baseLabelStyles,
      median: { padding: 8, stroke: lightBlue, strokeWidth: 1 },
      medianLabels: baseLabelStyles,
      min: { padding: 8, stroke: lightBlue, strokeWidth: 1 },
      minLabels: baseLabelStyles,
      q1: { padding: 8, fill: darkBlue },
      q1Labels: baseLabelStyles,
      q3: { padding: 8, fill: darkBlue },
      q3Labels: baseLabelStyles,
    },
    boxWidth: 20,
  }, baseProps),
  candlestick: Object.assign({
    style: {
      data: {
        stroke: lightGreen,
        strokeWidth: 1,
      },
      labels: centeredLabelStyles,
    },
    candleColors: {
      positive: '#ffffff',
      negative: lightBlue,
    },
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    borderWidth: 8,
    style: {
      data: {
        fill: 'transparent',
        stroke: lightBlue,
        strokeWidth: 2,
      },
      labels: centeredLabelStyles,
    },
  }, baseProps),
  group: Object.assign({
    colorScale: colors,
  }, baseProps),
  legend: {
    title: 'LEGEND',
    titleOrientation: 'left',
    colorScale: colors,
    gutter: 0,
    orientation: 'horizontal',

    style: {
      data: {
        type: 'circle',
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: Object.assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: lightBlue,
        strokeWidth: 3,
      },
      labels: centeredLabelStyles,
    },
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: 'transparent',
        strokeWidth: 1,
      },
      labels: Object.assign({}, baseLabelStyles, { padding: 20 }),
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50,
  },
  scatter: Object.assign({
    style: {
      data: {
        fill: lightBlue,
        stroke: 'transparent',
        strokeWidth: 0,
      },
      labels: centeredLabelStyles,
    },
  }, baseProps),
  stack: Object.assign({
    colorScale: colors,
  }, baseProps),
  tooltip: {
    style: Object.assign({}, centeredLabelStyles, { padding: 5, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: lightBlue,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none',
    },
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: Object.assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0,
      },
      labels: Object.assign({}, centeredLabelStyles, { padding: 5, pointerEvents: 'none' }),
      flyout: {
        stroke: lightBlue,
        strokeWidth: 1,
        fill: '#f0f0f0',
        pointerEvents: 'none',
      },
    },
  }, baseProps),
};


export default theme;
