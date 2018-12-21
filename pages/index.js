import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import ScatterPlot from '../components/ScatterPlot';
import ScatterSize from '../components/ScatterSize';
import BarStack from '../components/BarStack';


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


      <div className="splash">
        <div className="splash-top" />
        <div className="splash-banner" />
        <div className="splash-footer">
          <div className="splash-footer-icons">
            <div className="splash-footer-icon">
              <i className="fas fa-campground" />
              <span className="text-stuff"> campsites </span>
            </div>
            <div className="splash-footer-icon">
              <i className="fas fa-taxi" />
              <span className="text-stuff"> policing </span>
            </div>
            <div className="splash-footer-icon">
              <i className="fas fa-tint" />
              <span className="text-stuff"> Hygiene Access </span>
            </div>
            <div className="splash-footer-icon">
              <i className="fas fa-trash" />
              <div className="text-stuff">Waste Disposal Access</div>
            </div>
          </div>
        </div>


      </div>
      <div className="report-one">
        <div className="sticky-header" />
        <div className="report-one-sub-one">
          <div className="report-half-viz">
            <ScatterSize />
          </div>
        </div>
        <div className="report-one-banner" />
        <div className="report-one-sub-two" />
      </div>
      <div className="site-bottom">
        <div className="about-banner">
          <img className="responsive-img" src="/static/about-img.png" />
        </div>
        <div className="footer"> Footer </div>
      </div>

      {console.log('log==========', uniqueSitesData)}
      <BarChart data={Object.entries(sweepsByMonth)} />
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
