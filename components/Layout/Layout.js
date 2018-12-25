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
import Policing from './Policing/Policing';
import SweepsImage from './Policing/SweepsImage';


const Layout = () => (
  <div>
    <Head title="Home" />
    <Splash />
    <StickyContainer className="site-container">
      <IconBar />
      <div className="report-container">
        <div className="tab campsites" id="campsites-section">
          <ReportsSection />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <UniqueSitesSection />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <SweepsSection />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>
          <ReportsSectionCES />
          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>

          <SweepsSectionCES />

          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>

          <SweepsTimeline />

          <div className="subsection-divider">
            <div className="subsection-divider-line" />
          </div>

          <SweepsSectionCES />

        </div>
        <div className="section-divider" />
        <div className="tab police-action" id="police-section">

          <SweepsImage />

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
