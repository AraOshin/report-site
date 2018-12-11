
const { createServer } = require('http');
const next = require('next');

const {
  sweepsByMonth,
  reportsByMonth,
  targetAreaSweepsByMonth,
  targetAreaReportsByMonth,
  // reportsAggressiveCount,
  // campEstimatesByMonth,
} = require('./utils/serverUtils');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    res.sweepsByMonth = sweepsByMonth;
    res.reportsByMonth = reportsByMonth;
    res.targetAreaSweepsByMonth = targetAreaSweepsByMonth;
    res.targetAreaReportsByMonth = targetAreaReportsByMonth;
    // res.reportsAggressiveCount = reportsAggressiveCount;
    // res.campEstimatesByMonth = campEstimatesByMonth;
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
