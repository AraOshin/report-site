const moment = require('moment');
const { sweepsData } = require('../data-store/sweeps');
// const { reportsDataNew } = require('../data-store/campsite_reports_final');
const { reportsData } = require('../data-store/campsiteReports');
const { uniqueSites } = require('../data-store/uniqueSites');
const { policingReports } = require('../data-store/policingReports');

const targetNeighborhoods = ['KERNS', 'BUCKMAN', 'HOSFORD-ABERNETHY'];

const targetAreaSweepsData = sweepsData.features
  .filter(feature => targetNeighborhoods.includes(feature.properties.NAME));

const targetAreaReportsData = reportsData.features
  .filter(feature => targetNeighborhoods.includes(feature.NAME));


const getDates = (someArray, dateKey) => someArray
  .map(feature => feature.properties[dateKey])
  .sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1));

const getDatesJson = (someArray, dateKey) => someArray
  .map(feature => feature[dateKey])
  .sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1));

// returns array with date value of each sweep feature in dataset, sorted by date
const sweepsDates = getDates(sweepsData.features, 'ReportDate');

const targetAreaSweepsDates = getDates(targetAreaSweepsData, 'ReportDate');

const reportsDates = getDatesJson(reportsData.features, 'Date.Created.New');

const targetAreaReportsDates = getDatesJson(targetAreaReportsData, 'Date.Created.New');

const uniqueSitesData = uniqueSites.features
  .map(feature => ({
    Week: moment(feature.Date).format('MM/DD/YY'),
    estimatedSites: feature.EstimatedSites,
    totalReports: feature.TotalReports,
  }))
  .sort(
    (a, b) => (moment(a.Week)
      .isAfter(moment(b.Week))
      ? 1
      : -1
    ),
  );


const uniqueSitesByWeek = uniqueSites.features
  .sort(
    (a, b) => (
      moment(a.Date)
        .isAfter(b.Date)
        ? 1
        : -1
    ),
  )
  .map(feature => ([
    moment(feature.Date).format('MM/DD/YY'), Number(feature.EstimatedSites),
  ]));


const reportsPerUniqueSiteByWeek = uniqueSites.features
  .sort(
    (a, b) => (
      moment(a.Date)
        .isAfter(b.Date)
        ? 1
        : -1
    ),
  )
  .map(feature => ([
    moment(feature.Date).format('MM/DD/YY'), Number(feature.TotalReports) / Number(feature.EstimatedSites),
  ]));


// returns object keyed by month (format: Jan 18) with  value of total sweeps for that month

const getMonthlyCount = someArray => someArray.reduce((acc, curr) => {
  const key = moment(curr).format('MMM YYYY');
  if (acc[key]) acc[key]++;
  else acc[key] = 1;
  return acc;
}, {});

const yearlyReports = reportsDates.reduce((acc, curr) => {
  const key = moment(curr).format('YY');
  if (acc[key]) acc[key]++;
  else acc[key] = 1;
  return acc;
}, {});


const sweepsByMonth = getMonthlyCount(sweepsDates);
const targetAreaSweepsByMonth = getMonthlyCount(targetAreaSweepsDates);

const reportsByMonth = getMonthlyCount(reportsDates);
const targetAreaReportsByMonth = getMonthlyCount(targetAreaReportsDates);


const reportsAggressive = reportsData.features.map(feature => feature['Repeated.instances.of.overly.aggressive.behavior.from.campers']);


// const uniqueSitesWeekSum = uniqueSites.features.reduce((acc, curr) => {
//   const key = moment(curr.Week).format('MMM YYYY');
//   if (acc[key]) {
//     acc[key] = {
//       weeks: acc[key].weeks + 1,
//       weeksSum: acc[key].weeksSum + curr.EstimatedSites,
//     };
//   } else {
//     acc[key] = {
//       weeks: 1,
//       weeksSum: curr.EstimatedSites,
//     };
//   }
//   return acc;
// }, {});


const uniqueSitesAndReportsWeekSum = uniqueSites.features.reduce((acc, curr) => {
  const key = moment(curr.Week).format('MMM YYYY');
  if (acc[key]) {
    acc[key] = {
      weeks: acc[key].weeks + 1,
      weeksSumReports: acc[key].weeksSumReports + curr.Count_AllReports,
      weeksSumSites: acc[key].weeksSumSites + curr.EstimatedSites,
    };
  } else {
    acc[key] = {
      weeks: 1,
      weeksSumReports: curr.Count_AllReports,
      weeksSumSites: curr.EstimatedSites,
    };
  }
  return acc;
}, {});



const uniqueSitesByMonth = Object.entries(uniqueSitesAndReportsWeekSum)
  .reduce((acc, curr) => {
    const val = (curr[1].weeksSumSites / curr[1].weeks);
    const key = curr[0];
    acc[key] = val;
    return acc;
  }, {});



const reportsAggressiveCount = reportsAggressive.reduce((acc, curr) => {
  const key = curr;
  if (acc[key]) acc[key]++;
  else acc[key] = 1;
  return acc;
}, {});


const policingReportsByYear = policingReports.features;

console.log(reportsAggressiveCount);

module.exports = {
  sweepsByMonth,
  reportsByMonth,
  targetAreaSweepsByMonth,
  targetAreaReportsByMonth,
  reportsAggressiveCount,
  yearlyReports,
  uniqueSitesData,
  uniqueSitesByWeek,
  reportsPerUniqueSiteByWeek,
  uniqueSitesByMonth,
  policingReportsByYear,
};

