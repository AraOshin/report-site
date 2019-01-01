

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
const fontSize = 12;

// Layout
const baseProps = {
  width: 550,
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
    fontSize: 20,


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
      labels: Object.assign({}, baseLabelStyles, { padding: 10 }),
    },
    colorScale: ['#0B2B40',
      '#02B67A'],
    width: 350,
    height: 350,
    padding: 25,
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
  tooltip: {
    style: Object.assign({}, centeredLabelStyles, { padding: 5, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: lightBlue,
      strokeWidth: 1,
      fill: 'red',
      pointerEvents: 'none',
    },
    cornerRadius: 5,
    pointerLength: 10,
  },
};


export default theme;
