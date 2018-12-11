import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import BarChart from '../components/BarChart';
import ScatterPlot from '../components/ScatterPlot';


const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
  reportsByMonth,
  targetAreaReportsByMonth,
}) => (
    <div>
      <Head title="Home" />
      {console.log('log==========', targetAreaSweepsByMonth)}
      <BarChart data={Object.entries(sweepsByMonth)} />
      <BarChart data={Object.entries(targetAreaSweepsByMonth)} />
      <ScatterPlot data={Object.entries(reportsByMonth)} />
      <ScatterPlot data={Object.entries(targetAreaReportsByMonth)} />
    </div>
);

Home.getInitialProps = ({ req, res }) => {
  const sweepsData = Object.entries(res.sweepsByMonth);
  const reportsData = Object.entries(res.reportsByMonth);

  return {
    sweepsByMonth: res.sweepsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    reportsByMonth: res.reportsByMonth,
    targetAreaReportsByMonth: res.targetAreaReportsByMonth,
  };
};

Home.propTypes = {
  targetAreaSweepsByMonth: PropTypes.object,
  sweepsByMonth: PropTypes.object,
  targetAreaReportsByMonth: PropTypes.object,
  reportsByMonth: PropTypes.object,
};

export default Home;
