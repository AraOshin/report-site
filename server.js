
const { createServer } = require('http');
const next = require('next');

const {
  // sweepsByMonth,
  // reportsByMonth,
  // targetAreaSweepsByMonth,
  // targetAreaReportsByMonth,
  // reportsAggressiveCount,
  // yearlyReports,
  // uniqueSitesData,
  // uniqueSitesByWeek,
  // reportsPerUniqueSiteByWeek,
  // uniqueSitesByMonth,
  // avgReportsPerUniqueSitesByMonth,
  policingReportsByYear,
  sweepsWeeklyData,
  reportsWeeklyData,
  uniqueSitesWeeklyData,
} = require('./utils/serverUtils');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // res.sweepsByMonth = sweepsByMonth;
    // res.reportsByMonth = reportsByMonth;
    // res.targetAreaSweepsByMonth = targetAreaSweepsByMonth;
    // res.targetAreaReportsByMonth = targetAreaReportsByMonth;
    // res.yearlyReports = yearlyReports;
    // res.reportsAggressiveCount = reportsAggressiveCount;
    // res.uniqueSitesData = uniqueSitesData;
    // res.uniqueSitesByWeek = uniqueSitesByWeek;
    // res.reportsPerUniqueSiteByWeek = reportsPerUniqueSiteByWeek;
    // res.uniqueSitesByMonth = uniqueSitesByMonth;
    // res.avgReportsPerUniqueSitesByMonth = avgReportsPerUniqueSitesByMonth;
    res.policingReportsByYear = policingReportsByYear;
    res.sweepsWeeklyData = sweepsWeeklyData;
    res.reportsWeeklyData = reportsWeeklyData;
    res.uniqueSitesWeeklyData = uniqueSitesWeeklyData;
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
