import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';

export const DataContext = React.createContext({});

const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
  reportsByMonth,
  targetAreaReportsByMonth,
  reportsAggressiveCount,
  uniqueSitesByMonth,
  policingReportsByYear,
  avgReportsPerUniqueSitesByMonth,
  uniqueSitesByWeek,
  sweepsWeeklyData,
  reportsWeeklyData,
  uniqueSitesWeeklyData
}) => (
    <div>
      <Head title="Home" />
      {console.log('sweeps weekly', sweepsWeeklyData)}

      <DataContext.Provider
        value={{
          reportsByMonth: Object.entries(reportsByMonth),
          sweepsByMonth: Object.entries(sweepsByMonth),
          targetAreaSweepsByMonth: Object.entries(targetAreaSweepsByMonth),
          reportsAggressiveCount: Object.entries(reportsAggressiveCount),
          policingReportsByYear,
          avgReportsPerUniqueSitesByMonth: Object.entries(avgReportsPerUniqueSitesByMonth),
          uniqueSitesByWeek,
          targetAreaReportsByMonth: Object.entries(targetAreaReportsByMonth),
          uniqueSitesByMonth: Object.entries(uniqueSitesByMonth),
          sweepsWeeklyData: sweepsWeeklyData,
          reportsWeeklyData: reportsWeeklyData,
          uniqueSitesWeeklyData
        }}
      >`
        <Layout />
      </DataContext.Provider>
    </div>
  );


Home.getInitialProps = ({ res }) => (
  {
    sweepsByMonth: res.sweepsByMonth,
    reportsByMonth: res.reportsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    targetAreaReportsByMonth: res.targetAreaReportsByMonth,
    reportsAggressiveCount: res.reportsAggressiveCount,
    // reportsPerUniqueSiteByWeek: res.reportsPerUniqueSiteByWeek,
    uniqueSitesByMonth: res.uniqueSitesByMonth,
    policingReportsByYear: res.policingReportsByYear,
    avgReportsPerUniqueSitesByMonth: res.avgReportsPerUniqueSitesByMonth,
    uniqueSitesByWeek: res.uniqueSitesByWeek,
    sweepsWeeklyData: res.sweepsWeeklyData,
    reportsWeeklyData: res.reportsWeeklyData,
    uniqueSitesWeeklyData: res.uniqueSitesWeeklyData
  });

Home.propTypes = {
  sweepsByMonth: PropTypes.object,
  reportsByMonth: PropTypes.object,
  targetAreaSweepsByMonth: PropTypes.object,
  targetAreaReportsByMonth: PropTypes.object,
  reportsAggressiveCount: PropTypes.object,
  uniqueSitesByMonth: PropTypes.object,
  policingReportsByYear: PropTypes.array,
  avgReportsPerUniqueSitesByMonth: PropTypes.object,

};

export default Home;
