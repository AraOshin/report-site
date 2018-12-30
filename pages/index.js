import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';

export const DataContext = React.createContext({});

const Home = ({

  policingReportsByYear,
  sweepsWeeklyData,
  reportsWeeklyData,
  uniqueSitesWeeklyData,
}) => (
    <div>
      <Head title="Home" />
      {console.log('sweeps weekly', sweepsWeeklyData)}

      <DataContext.Provider
        value={{
          policingReportsByYear,
          sweepsWeeklyData,
          reportsWeeklyData,
          uniqueSitesWeeklyData,
        }}
      >
        <Layout />
      </DataContext.Provider>
    </div>
  );


Home.getInitialProps = ({ res }) => (
  {
    policingReportsByYear: res.policingReportsByYear,
    sweepsWeeklyData: res.sweepsWeeklyData,
    reportsWeeklyData: res.reportsWeeklyData,
    uniqueSitesWeeklyData: res.uniqueSitesWeeklyData,
  });

Home.propTypes = {

  policingReportsByYear: PropTypes.array,
  sweepsWeeklyData: PropTypes.array,
  reportsWeeklyData: PropTypes.array,
  uniqueSitesWeeklyData: PropTypes.array,


};

export default Home;
