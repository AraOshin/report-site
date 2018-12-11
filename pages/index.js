import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import BarChart from '../components/BarChart';
import ScatterPlot from '../components/ScatterPlot';


const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
}) => (
    <div>
      <Head title="Home" />
      {console.log('log==========', targetAreaSweepsByMonth)}
      <BarChart data={Object.entries(sweepsByMonth)} />
      <BarChart data={Object.entries(targetAreaSweepsByMonth)} />
      <ScatterPlot data={Object.entries(targetAreaSweepsByMonth)} />
    </div>
);

Home.getInitialProps = ({ req, res }) => {
  const sweepsData = Object.entries(res.sweepsByMonth);
  const reportsData = Object.entries(res.reportsByMonth);

  return {
    sweepsByMonth: res.sweepsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    reportsByMonth: res.reportsByMonth,
  };
};

Home.propTypes = {
  targetAreaSweepsByMonth: PropTypes.object,
  sweepsByMonth: PropTypes.object,
};

export default Home;
