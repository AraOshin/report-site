import React, { Component } from 'react';
import Head from '../components/head';
import './styles.css';
import BarChart from '../components/BarChart';


class Layout extends Component {
  handleRefCallback = (element) => {
    const rect = element.getBoundingClientRect();
    console.log(rect);
  }

  render() {
    return (
      <div className="site">
        <Head title="Layout" />
        <div className="container">
          <div className="grid-one">
            <div className="item-1 content">
              <h3> Headline (i.e) Magnitude of Urban Campsite Sweeps</h3>
            </div>
            <div className="item-2 content">
              <h5>When enough hardships collide - you lose your job, healthcare, food stamps, housing, leave a domestic violence situation - you end up with no place to go. Before you can get back on your feet, you need to survive- to sleep, eat, bathe, and seek shelter.</h5>
            </div>
            <div className="item-3 content">
              <BarChart data={Object.entries(this.props.sweepsByMonth)} />
            </div>
            <div className="item-4 content">
              <h5>When enough hardships collide - you lose your job, healthcare, food stamps, housing, leave a domestic violence situation - you end up with no place to go. Before you can get back on your feet, you need to survive- to sleep, eat, bathe, and seek shelter.</h5>

            </div>
            <div className="item-5 content">5</div>
          </div>
          <div className="grid-two">
            <div className="item-1 content">1</div>
            <div className="item-2 content">2</div>
            <div className="item-3 content">

              <BarChart data={Object.entries(this.props.targetAreaSweepsByMonth)} />

            </div>
            <div className="item-4 content">4</div>
            <div className="item-5 content">5</div>
          </div>
        </div>
        {/* <div className="container-two">
          <div className="grid-three">
            <div className="item-1 content">
              <h3> Magnitude of Urban Campsite Sweeps</h3>
            </div>
            <div className="item-2 content">2</div>
            <div ref={this.handleRefCallback} className="item-3 content"> vis
            </div>
            <div className="item-4 content">

            </div>
            <div className="item-5 content">5</div>
          </div>
          <div className="grid-four">
            <div className="item-1 content">1</div>
            <div className="item-2 content">2</div>
            <div className="item-3 content">3</div>
            <div className="item-4 content">4</div>
            <div className="item-5 content">5</div>
          </div>
        </div> */}
      </div>
    );
  }
}


Layout.getInitialProps = ({ req, res }) => {
  const sweepsData = Object.entries(res.sweepsByMonth);
  const reportsData = Object.entries(res.reportsByMonth);
  const campsiteEstimatesData = res.campEstimatesByMonth;
  const sweepsByMonth = res.sweepsByMonth;


  const heatmapsStructureSweeps = sweepsData.map((sweepsMonthEntries, i) => ({
    bin: i,
    bins: [{
      count: sweepsMonthEntries[1],
      bin: 0,
      month: sweepsMonthEntries[0],
    }],
  }));

  const heatmapsStructureReports = reportsData.map((reportsMonthEntries, i) => ({
    bin: i,
    bins: [{
      count: reportsMonthEntries[1],
      bin: 0,
      month: reportsMonthEntries[0],
    }],
  }));

  // const campsiteEstimatesSweepsData = campsiteEstimatesData.map(campsiteEstimatesEntry => {
  //   return {
  //     estimatedCampsites: Object.values(campsiteEstimatesEntry)[0],
  //     sweeps: sweepsByMonth[Object.keys(campsiteEstimatesEntry)[0]]
  //       && sweepsByMonth[Object.keys(campsiteEstimatesEntry)[0]],
  //     date: Object.keys(campsiteEstimatesEntry)[0],
  //   }
  // });

  // data = {
  //   [
  //   { x: 1, y: 2, amount: 30 },
  //   { x: 2, y: 3, amount: 40 },
  //   { x: 3, y: 5, amount: 25 },
  //   { x: 4, y: 4, amount: 10 },
  //   { x: 5, y: 7, amount: 45 }
  //   ]}


  // const BubbleScatterData = Object.entries(campsiteEstimatesSweepsData).map(entry => ({
  //   x: entry[0],
  //   y: entry[1].estimatedCampsites,
  //   amount: entry[1].sweeps,
  // }));

  // const BubbleScatterDataSweeps = Object.entries(campsiteEstimatesSweepsData).map(entry => ({
  //   x: entry[0],
  //   y: entry[1].sweeps,
  //   amount: entry[1].estimatedCampsites,
  // }));

  return {
    sweepsByMonth: res.sweepsByMonth,
    targetAreaSweepsByMonth: res.targetAreaSweepsByMonth,
    heatmapsStructureSweeps,
    reportsByMonth: res.reportsByMonth,

    // heatmapsStructureReports,
    // // reportsAggressiveCount: res.reportsAggressiveCount,
    // // campEstimatesByMonth: res.campEstimatesByMonth,
    // campsiteEstimatesSweepsData,
    // BubbleScatterData,
    // BubbleScatterDataSweeps,
  };
};

export default Layout;
