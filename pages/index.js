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
  reportsPerUniqueSiteByWeek,
  uniqueSitesByMonth,
}) => (
    <div>
      <Head title="Home" />
      {console.log(reportsPerUniqueSiteByWeek)}

      <DataContext.Provider
        value={{
          reportsByMonth: Object.entries(reportsByMonth),
          targetAreaReportsByMonth: Object.entries(targetAreaReportsByMonth),
          uniqueSitesByMonth: Object.entries(uniqueSitesByMonth),
          sweepsByMonth: Object.entries(sweepsByMonth),
          targetAreaSweepsByMonth: Object.entries(targetAreaSweepsByMonth),
          reportsAggressiveCount: Object.entries(reportsAggressiveCount),
        }}
      >
        <Layout />
      </DataContext.Provider>

    </div>
);


Home.getInitialProps = ({ res }) => (
  {
    sweepsByMonth: res.sweepsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    reportsByMonth: res.reportsByMonth,
    targetAreaReportsByMonth: res.targetAreaReportsByMonth,
    reportsAggressiveCount: res.reportsAggressiveCount,
    yearlyReports: res.yearlyReports,
    uniqueSitesData: res.uniqueSitesData,
    uniqueSitesByWeek: res.uniqueSitesByWeek,
    reportsPerUniqueSiteByWeek: res.reportsPerUniqueSiteByWeek,
    uniqueSitesByMonth: res.uniqueSitesByMonth,
  });

Home.propTypes = {
  targetAreaSweepsByMonth: PropTypes.object,
  sweepsByMonth: PropTypes.object,
  targetAreaReportsByMonth: PropTypes.object,
  reportsByMonth: PropTypes.object,
  reportsAggressiveCount: PropTypes.object,
  reportsPerUniqueSiteByWeek: PropTypes.array,
  uniqueSitesByMonth: PropTypes.object,

};

export default Home;
