import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import BarChart from '../components/BarChart';
import ScatterPlot from '../components/ScatterPlot';
import './styles.css';


const Home = ({
  targetAreaSweepsByMonth,
  sweepsByMonth,
  reportsByMonth,
  targetAreaReportsByMonth,
}) => (
    <div>
      <Head title="Home" />
      <div className="splash">
        {/* <div className="splash-img" /> */}
        <div className="splash-top" />
        <div className="splash-banner" />
        <div className="splash-footer">
          <div className="splash-footer-icons">
            <i className="fas fa-campground" />
            <i className="fas fa-taxi" />
            <i className="fas fa-tint" />
            <i className="fas fa-trash" />
          </div>
        </div>
      </div>
      <div className="report-one">
      <div className="report-one-sub-one" />
      <div className="report-one-banner" />
      <div className="report-one-sub-two" />
      </div>
    <div className="site-bottom">
      <div className="about-banner">
        <img className="responsive-img" src="/static/about-img.png" />
      </div>
      <div className="footer"> Footer </div>
    </div>

      { console.log('log==========', targetAreaSweepsByMonth) }
<BarChart data={Object.entries(sweepsByMonth)} />
  <BarChart data={Object.entries(targetAreaSweepsByMonth)} />
  <ScatterPlot data={Object.entries(reportsByMonth)} />
  <ScatterPlot data={Object.entries(targetAreaReportsByMonth)} />
    </div >
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
