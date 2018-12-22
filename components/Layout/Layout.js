import React from 'react';
import { StickyContainer } from 'react-sticky';
import Head from '../head';
import SectionOne from './SectionOne';
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


          <div className="section-banner">
            <div className="inner-section" />
          </div>


          <div className="report section-two" />
          <div className="section-banner" />
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


    <div className="reprt about-banner">
      <img className="responsive-img" src="/static/about-img.png" />
    </div>
    <div className="footer" />


  </div>


);


export default Layout;
