import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';
import BarGroup from '../components/BarGroup';

export const DataContext = React.createContext({});

const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
  reportsByMonth,
  targetAreaReportsByMonth,
  reportsAggressiveCount,
  reportsPerUniqueSiteByWeek,
  uniqueSitesByMonth,
  policingReportsByYear
}) => (
    <div>
      <Head title="Home" />
      {console.log(policingReportsByYear)}

      <DataContext.Provider
        value={{
          reportsByMonth: Object.entries(reportsByMonth),
          targetAreaReportsByMonth: Object.entries(targetAreaReportsByMonth),
          uniqueSitesByMonth: Object.entries(uniqueSitesByMonth),
          sweepsByMonth: Object.entries(sweepsByMonth),
          targetAreaSweepsByMonth: Object.entries(targetAreaSweepsByMonth),
          reportsAggressiveCount: Object.entries(reportsAggressiveCount),
          policingReportsByYear,

        }}
      >
        <Layout />
      </DataContext.Provider>

      <BarGroup data={policingReportsByYear} />

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
    policingReportsByYear: res.policingReportsByYear
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
