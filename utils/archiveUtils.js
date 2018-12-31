// const { sweepsData } = require('../data-store/sweeps');
// const { reportsData } = require('../data-store/campsiteReports');
// const moment = require('moment');
// const { policingReports } = require('../data-store/policingReports');


// const targetNeighborhoods = ['KERNS', 'BUCKMAN', 'HOSFORD-ABERNETHY'];

// const targetAreaSweepsData = sweepsData.features
//   .filter(feature => targetNeighborhoods.includes(feature.properties.NAME));

// const targetAreaReportsData = reportsData.features
//   .filter(feature => targetNeighborhoods.includes(feature.NAME));


// const getDates = (someArray, dateKey) => someArray
//   .map(feature => feature.properties[dateKey])
//   .sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1));

// const getDatesJson = (someArray, dateKey) => someArray
//   .map(feature => feature[dateKey])
//   .sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1));

// // // returns array with date value of each sweep feature in dataset, sorted by date
// const sweepsDates = getDates(sweepsData.features, 'ReportDate');

// const targetAreaSweepsDates = getDates(targetAreaSweepsData, 'ReportDate');

// const reportsDates = getDatesJson(reportsData.features, 'Date.Created.New');

// const targetAreaReportsDates = getDatesJson(targetAreaReportsData, 'Date.Created.New');

// // returns object keyed by month (format: Jan 18) with  value of total sweeps for that month

// const getMonthlyCount = someArray => someArray.reduce((acc, curr) => {
//   const key = moment(curr).format('YYYY MMM');
//   if (key === '2018 Nov') return acc;
//   if (acc[key]) acc[key]++;
//   else acc[key] = 1;
//   return acc;
// }, {});


// const sweepsByMonth = getMonthlyCount(sweepsDates);
// const targetAreaSweepsByMonth = getMonthlyCount(targetAreaSweepsDates);

// const reportsByMonth = getMonthlyCount(reportsDates);
// const targetAreaReportsByMonth = getMonthlyCount(targetAreaReportsDates);

// const reportsAggressive = reportsData.features.map(feature => feature['Repeated.instances.of.overly.aggressive.behavior.from.campers']);


// const reportsAggressiveCount = reportsAggressive.reduce((acc, curr) => {
//   const key = curr;
//   if (acc[key]) acc[key]++;
//   else acc[key] = 1;
//   return acc;
// }, {});

// const policingReportsByYear = policingReports.features;


// module.exports = {
//   sweepsByMonth,
//   reportsByMonth,
//   targetAreaSweepsByMonth,
//   targetAreaReportsByMonth,
//   reportsAggressiveCount,
// policingReportsByYear,
// };
