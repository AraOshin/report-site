import React from 'react';
import { StickyContainer } from 'react-sticky';
import Head from '../head';
import PercentBanner from './banners/PercentBanner';
import AboutBanner from './banners/AboutBanner';
import Splash from './Splash';
import IconBar from './IconBar';
import ReportsSection from './Campsites/ReportsSection';
import UniqueSitesSection from './Campsites/UniqueSitesSection';
import SweepsSection from './Campsites/SweepsSection';
import ReportsSectionCES from './Campsites/ReportsSectionCES';
import SweepsSectionCES from './Campsites/SweepsSectionCES';
import SweepsTimeline from './HygieneAccess/SweepsTimeline';


const Layout = () => (
  <div>
    <Head title="Home" />
    <Splash />
    <StickyContainer className="site-container">
      <IconBar />
      <div className="report-container">
        <div className="tab campsites" id="campsites-section">
          <ReportsSection />
          <div className="section-divider">
            <div className="section-divider-line" />
          </div>
          <UniqueSitesSection />
          <div className="section-divider">
            <div className="section-divider-line" />
          </div>
          <SweepsSection />
          <div className="section-divider">
            <div className="section-divider-line" />
          </div>
          <ReportsSectionCES />
          <div className="section-divider">
            <div className="section-divider-line" />
          </div>

          <SweepsSectionCES />

          <div className="section-divider">
            <div className="section-divider-line" />
          </div>

          <SweepsTimeline />

          <div className="section-divider">
            <div className="section-divider-line" />
          </div>

          <SweepsSectionCES />

        </div>
        <div className="tab police-action" id="police-section">
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
