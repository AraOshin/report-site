import React, { Component } from 'react';
import { StickyContainer } from 'react-sticky';
import Head from '../head';
import PercentBanner from './banners/PercentBanner';
import TextBanner from './banners/TextBanner';
import AboutBanner from './banners/AboutBanner';
import WhatWeCanDoBanner from './banners/WhatWeCanDoBanner';
import Splash from './Splash';
import IconBar from './IconBar';

import Intro from '../Subsections/Intro';
import ReportsPerUniqueSite from '../Subsections/ReportsPerUniqueSite';
import Sweeps from '../Subsections/Sweeps';
import SweepsTimeline from '../Subsections/SweepsTimeline';
import SweepsMap from '../Subsections/SweepsMap';
import SweepsCES from '../Subsections/SweepsCES';

import Policing from '../Subsections/Policing';
import PolicingCEID from '../Subsections/PolicingCEID';
import PolicingCES from '../Subsections/PolicingCES';

import WasteAccess from '../Subsections/WasteAccess';
import ReporterConcerns from '../Subsections/ReporterConcerns';

import Sources from './Sources';
import WaterAccess from '../Subsections/WaterAccess';
import SubsectionDiver from './SubsectionDivider';


class Layout extends Component {
  state = {
    active: 'campsites-section',
  }

  componentDidMount = () => {
    this.handleGetPositionFromTop();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate = (nextProps, nextState) => {
    if (this.state.counter !== nextState.counter) {
      this.handleGetPositionFromTop();
    }
  }

  handleResize = () => {
    this.incrementCounter();
    this.handleGetPositionFromTop();
    this.handleScroll();
  }

  incrementCounter = () => this.setState({ counter: this.state.counter + 1 })

  handleGetPositionFromTop = (isUpdate) => {
    const valToAdd = isUpdate ? 0 : 0;


    this.campsites = this.getPositionFromTop('campsites-section');
    this.police = this.getPositionFromTop('police-section') - 1 + valToAdd;
    this.hygiene = this.getPositionFromTop('hygiene-section') - 1 + valToAdd;
    this.waste = this.getPositionFromTop('waste-section') - 1 + valToAdd;
  }

  getPositionFromTop = id => Math.abs(Math.round(document.getElementById(id).offsetTop));


  hanldleIconClick = (id) => {
    const sectionPosition = document.getElementById(id).offsetTop;

    window.scrollTo({
      top: sectionPosition - 75,
      behavior: 'smooth',
    });
  }

  handleScroll = (distanceFromTop) => {
    const { active } = this.state;
    const reportScrollPosition = Math.abs(Math.round(distanceFromTop) - this.campsites);

    let activeSection = 'campsites-section';

    if (reportScrollPosition >= this.waste) {
      activeSection = 'waste-section';
    } else if (reportScrollPosition >= this.hygiene) {
      activeSection = 'hygiene-section';
    } else if (reportScrollPosition >= this.police) {
      activeSection = 'police-section';
    } else {
      activeSection = 'campsites-section';
    }

    if (active !== activeSection) this.setState({ active: activeSection });
  }


  render() {
    const { active } = this.state;

    return (
      <div onClick={this.incrementCounter}>
        <Head title="Home" />
        <Splash />
        <StickyContainer className="site-container">
          <IconBar
            active={active}
            handleIconClick={this.hanldleIconClick}
            handleScroll={this.handleScroll}
          />
          <div className="report-container">
            <div className="tab campsites" id="campsites-section">
              <Intro toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                bigText={<span>$3.5 million</span>}
                smallTextOne={(
                  <span>
                    estimated in reallocated personnel costs for the City to manage the fallout from sweep-evictions
                  </span>
                )}
                imgUrl="/static/01_navybar_01.jpg"
              />
              <ReportsPerUniqueSite toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                bigText={<span>5:1</span>}
                smallTextOne={(
                  <span>
                    ratio of public reports generated for every unique campsite in Jan-Nov 2018

                  </span>
                )}
                imgUrl="/static/02_navybar_02.jpg"
              />

              <Sweeps toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                bigText={<span>174 people</span>}
                smallTextOne={(
                  <span>
                    greater than 10% of the unsheltered houseless population are affected by street evictions on a weekly basis  (*estimated)

                  </span>
                )}
                imgUrl="/static/03_navybar_03.jpg"
              />


              <SweepsTimeline toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <TextBanner
                text={(
                  <span>
                    Sweeps ironically lead to more trash, trauma, and higher barriers to entering stable housing. They destroy the small modicum of peace and home that people strive to make for themselves.
                  </span>
                )}
              />

              <SweepsMap toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <SubsectionDiver />
              <SweepsCES toggleExpandedSubsection={this.handleGetPositionFromTop} />


              <div className="section-divider" />

            </div>
            <div className="tab police-action" id="police-section">
              <Policing toggleExpandedSubsection={this.handleGetPositionFromTop} />


              <TextBanner
                text={(
                  <span>
                    52% of arrests in Portland in 2017 were of houseless neighbors -- mostly for procedural and low-level crimes. They represent just 3% of the population  (Woolington, 6/13/2018).

                  </span>
                )}
              />

              <PolicingCEID toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <SubsectionDiver />


              <PolicingCES toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <TextBanner
                text={(
                  <span>
                    Housed residents accounted for more than twice the arrests for violent crimes in Portland in 2017; yet unsheltered residents account for 52% or all arrests mostly for low-level and procedural crimes related to trespass (camping) or procedural issues (failure to appear in court) (Lewis & Woolington, 06/29/2018).
                  </span>
                )}
              />

            </div>
            <div className="tab hygiene-access" id="hygiene-section">
              <WaterAccess toggleExpandedSubsection={this.handleGetPositionFromTop} />


              <TextBanner
                text={(
                  <span>
                    <div>
                      Did you know there are a total of 7 public bathrooms

                    </div>
                    <div>
                      open 24/7 in all of Portland?
                    </div>
                  </span>

                )}
              />
            </div>
            <div className="tab waste-disposal" id="waste-section">
              <WasteAccess toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <SubsectionDiver />

              <ReporterConcerns toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                bigText={<span>78%</span>}
                smallTextOne={(
                  <span>
                    of all street waste collected by Metro is dumped by  housed residents (Taylor Cass, Metro).
                  </span>
                )}
                imgUrl="/static/19_navybar_08.jpg"
              />
            </div>

          </div>
        </StickyContainer>
        <div className="section-divider" />


        <WhatWeCanDoBanner />

        <Sources />


        <AboutBanner />
        <div className="footer">
          <img className="logo" src="/static/logo.svg" alt="NeighborToNeighbor Logo" />
        </div>
      </div>

    );
  }
}


export default Layout;
