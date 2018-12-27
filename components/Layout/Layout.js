import React, { Component } from 'react';
import { StickyContainer } from 'react-sticky';
import Head from '../head';
import PercentBanner from './banners/PercentBanner';
import AboutBanner from './banners/AboutBanner';
import Splash from './Splash';
import IconBar from './IconBar';
import Reports from '../Subsections/Reports';
import UniqueSites from '../Subsections/UniqueSites';
import Sweeps from '../Subsections/Sweeps';
import ReportsCES from '../Subsections/ReportsCES';
import SweepsCES from '../Subsections/SweepsCES';
import SweepsTimeline from '../Subsections/SweepsTimeline';
import Policing from '../Subsections/Policing';
import SweepsMap from '../Subsections/SweepsMap';
import ReportsPerUniqueSite from '../Subsections/ReportsPerUniqueSite';
import ProblemsPlaceholder from '../Subsections/ProblemsPlaceholder';

class Layout extends Component {
  state = {
    active: 'campsites-section',
  }

  componentDidMount = () => {
    this.handleGetPositionFromTop();
  }

  handleGetPositionFromTop = (isUpdate) => {
    const valToAdd = isUpdate ? 75 : 0;


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
              <Reports toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <UniqueSites toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <ReportsPerUniqueSite toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <Sweeps toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <ReportsCES toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <SweepsCES toggleExpandedSubsection={this.handleGetPositionFromTop} />
              <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div>
              <SweepsMap toggleExpandedSubsection={this.handleGetPositionFromTop} />
            </div>

            <div className="section-divider" />

            <div className="tab police-action" id="police-section">
              <Policing toggleExpandedSubsection={this.handleGetPositionFromTop} />
              {/* <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div> */}

              <PercentBanner
                bigText="47%"
                smallTextOne={(
                  <span>
                    <strong>increase</strong>

                    in

                <strong>police</strong>
                  </span>
                )}
                smallTextTwo={(
                  <span>
                    <strong>actions</strong>

                    in 2018
                  </span>
                )}
                imgUrl="/static/police_img.png"
              />

              <PercentBanner
                bigText="47%"
                smallTextOne={(
                  <span>
                    <strong>increase</strong>

                    in

                <strong>police</strong>
                  </span>
                )}
                smallTextTwo={(
                  <span>
                    <strong>actions</strong>

                    in 2018
                  </span>
                )}
                imgUrl="/static/police_img.png"
                imgOnRight={false}
              />

              <div className="section-divider" />
            </div>
            <div className="tab hygiene-access" id="hygiene-section">
              <ProblemsPlaceholder toggleExpandedSubsection={this.handleGetPositionFromTop} />
              {/* <div className="subsection-divider">
                <div className="subsection-divider-line" />
              </div> */}

              <div className="section-divider" />
            </div>
            <div className="tab waste-disposal" id="waste-section">
              <SweepsTimeline toggleExpandedSubsection={this.handleGetPositionFromTop} />
            </div>
          </div>
        </StickyContainer>


        <AboutBanner />
        <div className="footer" />


      </div>


    );
  }
}


export default Layout;
