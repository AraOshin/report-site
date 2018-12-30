const moment = require('moment');
const { uniqueSitesWeekly } = require('../data-store/uniqueSitesWeekly');
const { policingReports } = require('../data-store/policingReports');
const { sweepsWeekly } = require('../data-store/sweepsWeekly');
const { reportsWeekly } = require('../data-store/reportsWeekly');


const getWeeklyData = (someArray, dataProperty) => someArray
  .sort((a, b) => (moment(a.Week).isAfter(moment(b.Week)) ? 1 : -1))
  .map(feature => (
    [moment(feature.Week).format('YYYY MMM DD'), feature[dataProperty]]
  ));


const uniqueSitesWeeklyData = getWeeklyData(uniqueSitesWeekly.features, 'EstimatedSites');
const reportsWeeklyData = getWeeklyData(reportsWeekly.features, 'Count');
const sweepsWeeklyData = getWeeklyData(sweepsWeekly.features, 'Count');


const policingReportsByYear = policingReports.features;


module.exports = {
  policingReportsByYear,
  sweepsWeeklyData,
  reportsWeeklyData,
  uniqueSitesWeeklyData,
};
