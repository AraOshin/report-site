import React from 'react';
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


const Layout = () => (
  <div>
    <Head title="Home" />
    <Splash />
    <StickyContainer className="site-container">
      <IconBar />
      <div className="report-container">
        <div className="tab campsites" id="campsites-section">
          <Reports />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <UniqueSites />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <ReportsPerUniqueSite />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <Sweeps />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <ReportsCES />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <SweepsCES />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <SweepsMap />
        </div>

        <div className="section-divider" />

        <div className="tab police-action" id="police-section">
          <Policing />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <Policing />



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
          <ProblemsPlaceholder />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <SweepsTimeline />
          <div className="section-divider" />
        </div>
        <div className="tab waste-disposal" id="waste-section">
          <SweepsTimeline />
        </div>
      </div>
    </StickyContainer>


    <AboutBanner />
    <div className="footer" />


  </div>


);


export default Layout;
