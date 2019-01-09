import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';
import smoothscroll from 'smoothscroll-polyfill';

export const DataContext = React.createContext({});
export const WindowSizeContext = React.createContext(0);

export default class Home extends React.Component {
  static getInitialProps = ({ res }) => (
    {
      policingReportsByYear: res.policingReportsByYear,
      sweepsWeeklyData: res.sweepsWeeklyData,
      reportsWeeklyData: res.reportsWeeklyData,
      uniqueSitesWeeklyData: res.uniqueSitesWeeklyData,
      sweepsWeeklyTargetAreaData: res.sweepsWeeklyTargetAreaData,
    });

  static propTypes = {
    policingReportsByYear: PropTypes.array,
    sweepsWeeklyData: PropTypes.array,
    reportsWeeklyData: PropTypes.array,
    uniqueSitesWeeklyData: PropTypes.array,
    sweepsWeeklyTargetAreaData: PropTypes.array,
  };

  state = { windowSize: 0 }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    smoothscroll.polyfill();
  }

  handleResize = () => this.setState({ windowSize: window.innerWidth })

  render() {
    const {
      policingReportsByYear,
      sweepsWeeklyData,
      reportsWeeklyData,
      uniqueSitesWeeklyData,
      sweepsWeeklyTargetAreaData,
    } = this.props;

    const { windowSize } = this.state;

    return (
      <div>
        <Head />
        <WindowSizeContext.Provider value={windowSize}>
          <DataContext.Provider
            value={{
              policingReportsByYear,
              sweepsWeeklyData,
              reportsWeeklyData,
              uniqueSitesWeeklyData,
              sweepsWeeklyTargetAreaData,
            }}
          >
            <Layout />
          </DataContext.Provider>
        </WindowSizeContext.Provider>
      </div>
    );
  }
}
