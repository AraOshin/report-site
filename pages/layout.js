import React, { Component } from 'react';
import Head from '../components/head';
import './newStyles.css';
import { StickyContainer, Sticky } from 'react-sticky';

const shouldTransform = distanceFromTop => distanceFromTop <= 50;
const getIconClassName = transform => `splash-footer-icon ${transform && 'scrolled-splash-footer-icon'}`;

const Layout = () => (
  <div>
    <Head title="Home" />


    <div className="splash">
      <div className="splash-top" />
      <div
        className="splash-banner"
      />
    </div>
    <StickyContainer className="site-container">
      <Sticky>
        {({ style, distanceFromTop, ...rest }) => {
          const transform = shouldTransform(distanceFromTop);

          return (
            <div
              style={style}
              className={`splash-footer ${transform && 'scrolled-splash-footer'}`}

            >
              {console.log(rest)}
              <div className={`splash-footer-icons ${transform && 'scrolled-splash-footer-icons'}`}>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-campground" />
                  {!transform && <span className="icon-label"> Campsites </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-taxi" />
                  {!transform && <span className="icon-label"> Police Action </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-tint" />
                  {!transform && <span className="icon-label"> Hygiene Access </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-trash" />
                  {!transform && <div className="icon-label">Waste Disposal Access</div>}
                </div>
              </div>
            </div>
          );
        }}

      </Sticky>


      <div
        className="report-container"
      >
        <div className="tab campsites">
          <div className="report section-one">
            <div className="report-text heading">
              Policing Report
            </div>


            <div className="report-columns">
              <div>
                <div className="report-text sub-heading">
                  Policing Subsection One Title
                </div>
                <div className="spacer-line" />
                <div className="paragraph">
                  This diagram is a comparison of requests to services for policing in 2017 and 2018.
                </div>
                <div className="paragraph">
                  Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.

                </div>

              </div>

              <div className="report-vis" />
            </div>


          </div>
          <div className="section-banner" />
          <div className="report section-two" />
          <div className="section-banner" />
        </div>
        <div className="tab police-action">
          <div className="report section-one" />
          <div className="section-banner" />
          <div className="report section-two" />
          <div className="section-banner" />
        </div>
        <div className="tab hygiene-access">
          <div className="report section-one" />
          <div className="section-banner" />
          <div className="report section-two" />
          <div className="section-banner" />
        </div>
        <div className="tab waste-disposal">
          <div className="report section-one" />
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
