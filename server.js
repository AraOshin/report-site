
const { createServer } = require('http');
const next = require('next');

const {
  sweepsWeeklyData,
  sweepsWeeklyTargetAreaData,
  reportsWeeklyData,
  uniqueSitesWeeklyData,
} = require('./utils/serverUtils');

let loads = 0;


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url === '/') console.log('loads:', loads++);
    res.sweepsWeeklyData = sweepsWeeklyData;
    res.sweepsWeeklyTargetAreaData = sweepsWeeklyTargetAreaData;
    res.reportsWeeklyData = reportsWeeklyData;
    res.uniqueSitesWeeklyData = uniqueSitesWeeklyData;
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
