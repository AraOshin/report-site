const moment = require('moment');
const { uniqueSitesWeekly } = require('../data-store/uniqueSitesWeekly');
const { sweepsWeekly } = require('../data-store/sweepsWeekly');
const { sweepsWeeklyTargetArea } = require('../data-store/sweepsWeeklyTargetArea');
const { reportsWeekly } = require('../data-store/reportsWeekly');


const getWeeklyData = (someArray, dataProperty) => someArray
  .filter(weeklyData => moment(weeklyData.Week).format('YYYY MMM') !== '2018 Nov')
  .sort((a, b) => (moment(a.Week).isAfter(moment(b.Week)) ? 1 : -1))
  .map(feature => (
    [moment(feature.Week).format('YYYY-MM-DD'), feature[dataProperty]]
  ));


const uniqueSitesWeeklyData = getWeeklyData(uniqueSitesWeekly.features, 'EstimatedSites');

const reportsWeeklyData = getWeeklyData(reportsWeekly.features, 'Count');

const sweepsWeeklyData = getWeeklyData(sweepsWeekly.features, 'Count');

const sweepsWeeklyTargetAreaData = getWeeklyData(sweepsWeeklyTargetArea.features, 'Count');

module.exports = {
  sweepsWeeklyData,
  reportsWeeklyData,
  uniqueSitesWeeklyData,
  sweepsWeeklyTargetAreaData,
};
