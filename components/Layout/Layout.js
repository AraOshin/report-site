import React from 'react';
import { StickyContainer } from 'react-sticky';
import Head from '../head';
import SectionOne from './SectionOne';
import PercentBanner from './banners/PercentBanner';
import AboutBanner from './banners/AboutBanner';
import Splash from './Splash';
import IconBar from './IconBar';


const Layout = ({ chart }) => (
  <div>
    <Head title="Home" />
    <Splash />
    <StickyContainer className="site-container">
      <IconBar />
      <div className="report-container">
        <div className="tab campsites" id="campsites-section">
          <SectionOne chart={chart} />
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
          <div className="report section-two" />
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
        </div>
        <div className="tab police-action" id="police-section">
          <div className="report section-one"> police </div>
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
