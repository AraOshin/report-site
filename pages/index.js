import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';

import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import ScatterPlot from '../components/ScatterPlot';
import ScatterSize from '../components/ScatterSize';
import BarStack from '../components/BarStack';

export const DataContext = React.createContext({});

const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
  reportsByMonth,
  targetAreaReportsByMonth,
  reportsAggressiveCount,
  yearlyReports,
  uniqueSitesData,
}) => (
    <div>
      <Head title="Home" />
      {/* {console.log('log==========', uniqueSitesData)} */}
      <DataContext.Provider value={Object.entries(sweepsByMonth)}>
        <Layout />
      </DataContext.Provider>


    </div>
);


{ /* <BarChart data={Object.entries(sweepsByMonth)} />
    <BarChart data={Object.entries(targetAreaSweepsByMonth)} />
    <ScatterPlot data={Object.entries(reportsByMonth)} x={0} y={1} />
    <ScatterPlot data={Object.entries(targetAreaReportsByMonth)} x={0} y={1} />
    <PieChart data={Object.entries(reportsAggressiveCount)} />
    <ScatterSize data={Object.entries(reportsAggressiveCount)} />
    <ScatterPlot
      data={uniqueSitesData}
      x="Week"
      y="estimatedSites"
    />
    <BarStack
      data={uniqueSitesData}
      sweeps={Object.entries(sweepsByMonth)}
    />
    </div >
); */ }

Home.getInitialProps = ({ req, res }) => {
  const sweepsData = Object.entries(res.sweepsByMonth);
  const reportsData = Object.entries(res.reportsByMonth);

  return {
    sweepsByMonth: res.sweepsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    reportsByMonth: res.reportsByMonth,
    targetAreaReportsByMonth: res.targetAreaReportsByMonth,
    reportsAggressiveCount: res.reportsAggressiveCount,
    yearlyReports: res.yearlyReports,
    uniqueSitesData: res.uniqueSitesData,
  };
};

Home.propTypes = {
  targetAreaSweepsByMonth: PropTypes.object,
  sweepsByMonth: PropTypes.object,
  targetAreaReportsByMonth: PropTypes.object,
  reportsByMonth: PropTypes.object,
  reportsAggressiveCount: PropTypes.object,
  yearlyReports: PropTypes.object,

};

export default Home;
