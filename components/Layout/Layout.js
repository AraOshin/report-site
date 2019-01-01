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
import PieVis from '../Subsections/PieVis';

import Sources from './Sources';
import WaterAccess from '../Subsections/WaterAccess';


class Layout extends Component {
  state = {
    active: 'campsites-section',
  }

  componentDidMount = () => {
    this.handleGetPositionFromTop();
  }

  handleGetPositionFromTop = (isUpdate) => {
    const valToAdd = isUpdate ? 0 : 0;
    console.log('valtoAdd:', valToAdd);


    this.campsites = this.getPositionFromTop('campsites-section');
    this.police = this.getPositionFromTop('police-section') - 1 + valToAdd;
    this.hygiene = this.getPositionFromTop('hygiene-section') - 1 + valToAdd;
    this.waste = this.getPositionFromTop('waste-section') - 1 + valToAdd;
    console.log(this.campsites, this.police, this.hygiene, this.waste);
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
      <div>
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
                smallTextOne={(
                  <span>
                    The City of Portland is spending an estimated additional 3.5 million on managing a crisis in the houseless community that it is much exacerbated by its 1.2 million dollar camp eviction program.
                  </span>
                )}
                imgUrl="/static/01_navybar_01.png"
              />
              <ReportsPerUniqueSite toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                smallTextOne={(
                  <span>
                    In 2018, for every unique campsite estimated by the city the public generated approximately 6 reports.
                  </span>
                )}
                imgUrl="/static/02_navybar_02.png"
              />

              <Sweeps toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                smallTextOne={(
                  <span>
                    174 people, over 10% of the unsheltered houseless population, are evicted from their homes on a weekly basis.
                  </span>
                )}
                imgUrl="/static/03_navybar_03.png"
              />


              <SweepsTimeline toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <TextBanner
                text={(
                  <span>
                    Sweep-evictions ironically lead to more trash, trauma, & higher barriers to entering stable housing
                  </span>
                )}
              />

              <SweepsMap toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <SweepsCES toggleExpandedSubsection={this.handleGetPositionFromTop} />


              <div className="section-divider" />
            </div>
            <div className="tab police-action" id="police-section">
              <Policing toggleExpandedSubsection={this.handleGetPositionFromTop} />


              <TextBanner
                text={(
                  <span>
                    Violent Crime likelihood 2wice for housed as unhoused
                  </span>
                )}
              />

              <PolicingCEID toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>


              <PolicingCES toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <TextBanner
                text={(
                  <span>
                    Rebecca’s stats on  Crime
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
                      open 24/7 in all of Portland ?
                    </div>

                  </span>
                )}
              />
            </div>
            <div className="tab waste-disposal" id="waste-section">
              <WasteAccess toggleExpandedSubsection={this.handleGetPositionFromTop} />

              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>

              <PieVis toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <PercentBanner
                smallTextOne={(
                  <span>
                    Taylor Cass - Metro - 78% of all trash left on the streets is from housed people
                  </span>
                )}
                imgUrl="/static/19_navybar_08.png"
              />
            </div>

          </div>
        </StickyContainer>


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
