const moment = require('moment');
const { sweepsData } = require('../data-store/sweeps');
const { reportsDataNew } = require('../data-store/campsite_reports_final');
// const { campsiteEstimatesData } = require('../data-store/campsiteEstimates');

const targetNeighborhoods = ['KERNS', 'BUCKMAN', 'HOSFORD-ABERNETHY'];

const targetAreaSweepsData = sweepsData.features
  .filter(feature => targetNeighborhoods.includes(feature.properties.NAME));

const getDates = (someArray, dateKey) => someArray
  .map(feature => feature.properties[dateKey])
  .sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1));

// returns array with date value of each sweep feature in dataset, sorted by date
const sweepsDates = getDates(sweepsData.features, 'ReportDate');

const targetAreaSweepsDates = getDates(targetAreaSweepsData, 'ReportDate');

const reportsDates = getDates(reportsDataNew.features, 'Date.Created.New');

// returns object keyed by month (format: Jan 18) with  value of total sweeps for that month

const getMonthlyCount = someArray => someArray.reduce((acc, curr) => {
  const key = moment(curr).format('MMM YY');
  if (acc[key]) acc[key]++;
  else acc[key] = 1;
  return acc;
}, {});

const sweepsByMonth = getMonthlyCount(sweepsDates);
const targetAreaSweepsByMonth = getMonthlyCount(targetAreaSweepsDates);

const reportsByMonth = getMonthlyCount(reportsDates);


module.exports = {
  sweepsByMonth,
  reportsByMonth,
  targetAreaSweepsByMonth,

  // reportsAggressiveCount,
  // campEstimatesByMonth,
};


// const reportsAggressive = reportsData.features.map(feature => feature.properties['Excessive trash and/or biohazards']);

// const reportsAggressiveCount = reportsAggressive.reduce((acc, curr) => {
//   const key = curr;
//   if (acc[key]) acc[key]++;
//   else acc[key] = 1;
//   return acc;
// }, {});


// const campEstimatesWeekSum = campsiteEstimatesData.reduce((acc, curr) => {
//   const key = moment(curr.dataKey).format('MMM YY');
//   if (acc[key]) {
//     acc[key] = {
//       weeks: acc[key].weeks + 1,
//       weeksSum: acc[key].weeksSum + curr.dataValue,
//     };
//   } else {
//     acc[key] = {
//       weeks: 1,
//       weeksSum: curr.dataValue,
//     };
//   }
//   return acc;
// }, {});


// const campEstimatesByMonth = Object.entries(campEstimatesWeekSum).map(monthWeekSumArray => ({
//   [monthWeekSumArray[0]]: (monthWeekSumArray[1].weeksSum / monthWeekSumArray[1].weeks) * 4.3,
// }));
