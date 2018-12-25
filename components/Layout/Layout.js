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

          <SweepsTimeline />

          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>

          <SweepsCES />

        </div>
        <div className="section-divider" />
        <div className="tab police-action" id="police-section">

          <SweepsMap />

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

          <div className="section-banner" />
          <div className="report section-two" />
          <div className="section-banner" />
        </div>
        <div className="tab hygiene-access" id="hygiene-section">
          <div className="report section-one"> hygiene </div>
          <div className="section-banner" />
          <div className="report section-two" />
          <div className="section-banner" />
        </div>
        <div className="tab waste-disposal" id="waste-section">
          <div className="report section-one"> waste </div>
          <div className="section-banner" />
          <div className="report section-two" />
        </div>
      </div>
    </StickyContainer>


    <AboutBanner />
    <div className="footer" />


  </div>


);


export default Layout;
